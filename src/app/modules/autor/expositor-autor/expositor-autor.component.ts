import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Autor } from '../../../interfaces/Autor';
import { AutorService } from '../../../services/autor.service';
import { SharedService } from '../../../services/shared.service';

@Component({
    selector: 'app-expositor-autor',
    templateUrl: './expositor-autor.component.html',
    styleUrls: ['./expositor-autor.component.scss']
})
export class ExpositorAutorComponent implements OnInit {
    modoElegido: string = 'Consultar';


    listadoAutores: Autor[] = [];
    constructor(
        private autorService: AutorService,
        private matSnackbar: MatSnackBar,
        private sharedService:SharedService
    ) {
        this.sharedService.tituloWeb.next('Expositor de autores');
     }

    ngOnInit(): void {
        this.autorService.recuperarAutoresOBS().subscribe(autoresDevueltos => {
            console.log('libros obtenidos');
            console.log(autoresDevueltos);
            this.listadoAutores = autoresDevueltos;
        })
    }

    borrarAutor(autorABorrar: Autor) {
        this.autorService.borrarAutorOBS(autorABorrar).subscribe(() => {
            this.matSnackbar.open('Libro borrado', 'Cerrar');
        });
    }

    cambiarModo(modoDeseado: string): void {
        this.modoElegido = modoDeseado;
    }

}
