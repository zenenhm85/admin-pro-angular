import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public usuario:Usuario;

  constructor(private usuarioService:UsuarioService, private router: Router) { 
    this.usuario = usuarioService.usuario;
  }

  logout(){
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

}
