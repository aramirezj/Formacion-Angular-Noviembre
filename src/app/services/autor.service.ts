import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interfaces/Autor';

@Injectable()
export class AutorService {
    autoresBBDD: Autor[];
    constructor() {
        let autor1: Autor = { nombre: 'Gabriel Garcia Marquez', librosPublicados: 7 };
        let autor2: Autor = { nombre: 'J.K Rowling', librosPublicados: 4 };


        const autoresCookie: string = localStorage.getItem('autores');

        if (autoresCookie) {
            this.autoresBBDD = JSON.parse(autoresCookie);
        } else {
            this.autoresBBDD = [autor1, autor2];
            this.actualizarCookie();
        }

    }



    recuperarAutoresOBS(): Observable<Autor[]> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(this.autoresBBDD);
                observer.complete();
            }, 5000);
        });
    }

    crearAutorOBS(autor: Autor): Observable<Autor> {
        return new Observable(observer => {
            setTimeout(() => {
                this.autoresBBDD.push(autor);
                this.actualizarCookie();
                observer.next(autor);
                observer.complete();
            }, 2000);
        });
    }

    borrarAutorOBS(autor: Autor): Observable<void> {
        return new Observable(observer => {
            setTimeout(() => {
                const indiceABorrar: number = this.autoresBBDD.findIndex(autorF => autorF.nombre === autor.nombre);
                this.autoresBBDD.splice(indiceABorrar, 1);
                this.actualizarCookie();
                observer.next();
                observer.complete();
            }, 2000);
        })
    }


    actualizarCookie() {
        localStorage.setItem('autores', JSON.stringify(this.autoresBBDD));
    }



}
