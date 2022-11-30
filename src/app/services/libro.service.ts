import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';

@Injectable()
export class LibroService {
    miLibroFavorito: string = 'La ladrona de libros';
    librosBBDD: Libro[];
    constructor(
        private ngxSpinnerService: NgxSpinnerService
    ) {
        let libro1: Libro = { titulo: 'Cien años de soledad', stock: 7, autor: 'Gabriel Garcia Marquez', precio: 7, cantidadPaginas: 478 };
        let libro2: Libro = { titulo: 'El relato de un naufrago', stock: 4, autor: 'Gabriel Garcia Marquez', precio: 3, cantidadPaginas: 180 };
        let libro3: Libro = { titulo: 'Crónicas de una muerte anunciada', stock: 3, autor: 'Gabriel Garcia Marquez', precio: 5, cantidadPaginas: 370 };
        let libro4: Libro = { titulo: 'El lazarillo de tormes', stock: 10, precio: 22, cantidadPaginas: 100 };


        const librosCookie: string = localStorage.getItem('libros');

        if (librosCookie) {
            this.librosBBDD = JSON.parse(librosCookie);
        } else {
            this.librosBBDD = [libro1, libro2, libro3, libro4];
            this.actualizarCookie();
        }

    }


    //Shift + Alt + F
    recuperarLibrosOBS(): Observable<Libro[]> {
        this.ngxSpinnerService.show();
        return new Observable(observer => {
            setTimeout(() => {
                this.ngxSpinnerService.hide();
                observer.next(this.librosBBDD);
                observer.complete();
            }, 500);
        });
    }

    crearLibroOBS(libro: Libro): Observable<Libro> {
        this.ngxSpinnerService.show();
        return new Observable(observer => {
            setTimeout(() => {
                this.ngxSpinnerService.hide();
                this.librosBBDD.push(libro);
                this.actualizarCookie();
                observer.next(libro);
                observer.complete();
            }, 2000);
        });
    }

    borrarLibroOBS(libro: Libro): Observable<void> {
        this.ngxSpinnerService.show();
        return new Observable(observer => {
            setTimeout(() => {
                this.ngxSpinnerService.hide();
                const indiceABorrar: number = this.librosBBDD.findIndex(libroF => libroF.titulo === libro.titulo);
                this.librosBBDD.splice(indiceABorrar, 1);
                this.actualizarCookie();
                observer.next();
                observer.complete();
            }, 2000);
        })
    }


    actualizarCookie() {
        localStorage.setItem('libros', JSON.stringify(this.librosBBDD));
    }



}
