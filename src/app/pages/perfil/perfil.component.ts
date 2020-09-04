import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public usuario: Usuario;
  public perfilForm: FormGroup;
  public imagenSubir:File;
  public imgTemp: any = null;

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  actualizarPerfil(){
    this.usuarioService.actualizarPerfilUsuario(this.perfilForm.value).subscribe(() => {
      const {nombre, email} = this.perfilForm.value;

      this.usuario.nombre = nombre;
      this.usuario.email = email;

      Swal.fire('Éxito!', 'Cambios realizados con éxito!', 'success');

    }, (err) => {
      Swal.fire('Error', err.error.message, 'error');
    }) 
  }
  cambiarImagen(file: File){
    this.imagenSubir = file;

    if ( !file ) { 
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL( file );

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }
  }
  subirImagen(){
    this.usuarioService.actualizarFoto(this.imagenSubir,this.usuario.id).then(img=>{
      this.usuario.img = img;
      Swal.fire('Éxito!', 'Imagen subida con éxito!', 'success');
    }).catch(err => {
      Swal.fire('Error', 'No se pudo subir la imagen', 'error');
    });
  }

}
