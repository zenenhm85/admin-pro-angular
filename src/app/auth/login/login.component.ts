import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  

  public loginForm = this.fb.group({
    email: ['zenen@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(1)]],
    remember: [false]
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  login() {
    if (this.loginForm.invalid) {
      Swal.fire('Error', 'Email o contraseña no válidos', 'error' );
      return;
    }
    this.usuarioService.loginUsuario(this.loginForm.value)
      .subscribe((res) => {

        this.router.navigateByUrl('/dashboard');

        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Login realizado con éxito!'
        })
      },
        (err) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: err.error.message
          })

        })
  }
  

}
