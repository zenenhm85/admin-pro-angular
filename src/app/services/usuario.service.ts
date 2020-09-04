import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

import { RegisterForm } from '../interfaces/register-form.interface'
import { LoginForm } from '../interfaces/login-form.interface'
import { ActualizarPerfilForm } from '../interfaces/actulizar-perfil.interface'


import { Observable, of, from } from 'rxjs';
import { Router } from '@angular/router';

import { Usuario } from '../models/usuario.model';

const url = environment.url

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public usuario: Usuario;

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) {
    this.googleInit();
  }

  get id(): string {
    return this.usuario.id || '';
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  crearUsuario(formData: RegisterForm) {

    return this.http.post(`${url}/usuarios`, formData);

  }
  actualizarPerfilUsuario(formData: ActualizarPerfilForm) {

    return this.http.put(`${url}/usuarios/${this.id}`, formData, {
      headers: {
        'x-token': this.token
      }
    });
  }
  loginUsuario(formData: LoginForm) {

    return this.http.post(`${url}/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }
  validarToken(): Observable<boolean> {


    return this.http.get(`${url}/login`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp: any) => {
        const { email, google, nombre, role, img = '', id } = resp.usuario;
        this.usuario = new Usuario(nombre, email, '', google, img, role, id);
        localStorage.setItem('token', resp.token);
        return true;
      }),
      catchError(error => of(false))

    );

  }
  loginGoogle(token) {

    return this.http.post(`${url}/login/google`, { token })
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }
  logout() {
    localStorage.removeItem('token');

    this.auth2.signOut().then(() => {

      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    });
  }
  googleInit() {

    return new Promise(resolve => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '718763981932-57qokl5albfvn7502jkcr9fs1g5ti6p1.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    })

  }

  async actualizarFoto(
    archivo: File,
    id: string
  ) {

    try {

      const ruta = `${url}/usuarios/upload/${id}`;
      const formData = new FormData();
      formData.append('imagen', archivo);

      const resp = await fetch(ruta, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await resp.json();

      if (data.ok) {
        return data.nombreArchivo;
      } else {
        console.log(data.msg);
        return false;
      }

    }
    catch (error) {
      console.log(error);
      return false;
    }

  }

}
