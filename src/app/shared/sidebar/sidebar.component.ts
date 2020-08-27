import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(private usuarioService:UsuarioService, private router: Router) { }

  logout(){
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

}
