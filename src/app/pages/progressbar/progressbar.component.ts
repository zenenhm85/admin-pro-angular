import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls:['./progressbar.component.css']
})
export class ProgressbarComponent {

  progress1: number = 20;
  progress2: number = 40;

  get getProgress1(){
    return `${this.progress1}%`;
  }
  get getProgress2(){
    return `${this.progress2}%`;
  }

}
