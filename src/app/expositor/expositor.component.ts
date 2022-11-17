import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Libro } from '../interfaces/Libro';

@Component({
    selector: 'app-expositor',
    templateUrl: './expositor.component.html',
    styleUrls: ['./expositor.component.scss']
})
export class ExpositorComponent implements OnInit {


    modoElegido: string = 'Consultar';

    libroPrincipal: Libro;

    listadoLibros: Libro[] = [];

    constructor() {
        console.log('Hola soy el constructor')
    }

    ngOnInit(): void {

        let libro1: Libro = { titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez', precio: 7, cantidadPaginas: 478 };
        let libro2: Libro = { titulo: 'El relato de un naufrago', autor: 'Gabriel Garcia Marquez', precio: 3, cantidadPaginas: 180 };
        let libro3: Libro = { titulo: 'Crónicas de una muerte anunciada', autor: 'Gabriel Garcia Marquez', precio: 5, cantidadPaginas: 370 };
        let libro4: Libro = { titulo: 'El lazarillo de tormes', precio: 22, cantidadPaginas: 100 };

        this.libroPrincipal = libro1;

        this.listadoLibros = [libro1,libro2,libro3,libro4];

       

    }


    cambiarModo(modoDeseado: string): void {
        this.modoElegido = modoDeseado;
    }



}
