import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';
import { LibroService } from '../services/libro.service';

@Component({
    selector: 'app-expositor',
    templateUrl: './expositor.component.html',
    styleUrls: ['./expositor.component.scss']
})
export class ExpositorComponent implements OnInit {


    modoElegido: string = 'Consultar';

    libroPrincipal: Libro;

    listadoLibros: Libro[] = [];

    librosComprados: Libro[] = [];

    precioTotal: number = 0;

    constructor(private libroService: LibroService) {
    }

    ngOnInit(): void {



        /* console.log('PRE PEDIDA DE API')
         this.recuperarLibros().then(librosDevueltos => {
             console.log('Libros devueltos por la promesa')
             console.log(librosDevueltos)
         });
         console.log('POST PEDIDA DE API')*/

        this.libroService.recuperarLibrosOBS().subscribe(librosDevueltos => {
            console.log('libros obtenidos');
            console.log(librosDevueltos);
            this.listadoLibros = librosDevueltos;
        })






    }





   /* recuperarLibros(): Promise<Libro[]> {
        console.log('Inicio metodo recuperarLibros')
        const promesaLibros = new Promise<Libro[]>((resolve, reject) => {
            setTimeout(() => {

                resolve(this.listadoLibros);

            }, 3000)
        });

        return promesaLibros;

    }*/





    cambiarModo(modoDeseado: string): void {
        this.modoElegido = modoDeseado;
    }

    gestionaCompra(miLibroComprado: Libro) {
        this.librosComprados.push(miLibroComprado);
        this.precioTotal += miLibroComprado.precio;
    }

    actualizaStock(libroParaActualizar: Libro, cantidad: number) {
        libroParaActualizar.stock += cantidad;
    }










}
