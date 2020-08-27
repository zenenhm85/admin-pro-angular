import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';

import { RegisterForm } from '../interfaces/register-form.interface'
import { LoginForm } from '../interfaces/login-form.interface'
import { Observable } from 'rxjs';

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm) {

    return this.http.post(`${url}/usuarios`, formData);

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
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ url }/login`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      //catchError( error => of(false) )
    );

  }
  loginGoogle(token) {

    return this.http.post(`${url}/login/google`, {token})
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }

}
