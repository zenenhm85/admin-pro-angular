import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { UsuarioService } from '../services/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usuarioService:UsuarioService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      console.log('Paso por el guard');
      return true;
  }
  
}
