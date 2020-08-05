import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;
  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');

    this.checkCurrentTheme();
    
  }
  changeTheme(theme:string){    
    
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);

    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }
  checkCurrentTheme(){
    this.links.forEach(item => {
      item.classList.remove('working');

      const btnTheme = item.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        item.classList.add('working');
      }
    });
  }

}
