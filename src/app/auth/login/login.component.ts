import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(1)]],
    remember: [false]
  });

  public auth2: any;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    if (this.loginForm.invalid) {
      Swal.fire('Error', 'Email o contraseña no válidos', 'error');
      return;
    }
    this.usuarioService.loginUsuario(this.loginForm.value)
      .subscribe((res) => {

        this.router.navigateByUrl('/dashboard');

        if (this.loginForm.get('remember').value) {
          localStorage.setItem('email', this.loginForm.get('email').value);
        }
        else {
          localStorage.removeItem('email');
        }

      },
        (err) => {

          Swal.fire('Error', err.error.message, 'error');

        })
  }
  //const id_token = googleUser . getAuthResponse (). id_token ;
  //Autenticación con GOOGLE
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark'
    });
    this.startApp();
  }
  startApp() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '718763981932-57qokl5albfvn7502jkcr9fs1g5ti6p1.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  }
  attachSignin(element) {
   
    this.auth2.attachClickHandler(element, {},
      (googleUser)=> {
        const id_token = googleUser.getAuthResponse().id_token;
        this.usuarioService.loginGoogle( id_token ).subscribe();
      }, (error)=> {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}
