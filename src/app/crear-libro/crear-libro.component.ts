import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from '../interfaces/Libro';
import { LibroService } from '../services/libro.service';

@Component({
    selector: 'app-crear-libro',
    templateUrl: './crear-libro.component.html',
    styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
    formularioCreacion: FormGroup;
    constructor(
        private snackbar: MatSnackBar,
        private libroService: LibroService
    ) {
        console.log(this.libroService.miLibroFavorito);
        this.libroService.miLibroFavorito = 'El perfume';
    }

    ngOnInit(): void {
        this.formularioCreacion = new FormGroup({
            titulo: new FormControl(null, [Validators.required]),
            autor: new FormControl(null),
            stock: new FormControl(null, [Validators.required]),
            precio: new FormControl(null, [Validators.required]),
            cantidadPaginas: new FormControl(null, [Validators.required])
        });

    }

    crearLibro() {
        const libro: Libro = this.formularioCreacion.value;
        this.libroService.crearLibroOBS(libro).subscribe(libroPersistido => {
            this.snackbar.open('Libro creado corrrectamente', 'Cerrar');
        });
        
    }

}
