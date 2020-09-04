import { environment } from '../../environments/environment';

const url = environment.url;

export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password?:string,
        public google?: boolean,
        public img?: string,
        public role?: string,
        public id?: string
    ) { }

    get imageUrl(){

        if(this.img.includes('https')){
            return this.img;
        }
        
        if(this.img){
            return `${url}/usuarios/imagen/${this.img}`;
        }
        return `${url}/usuarios/imagen/not-image.png`;
        
    }
}