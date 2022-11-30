import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from '../../../interfaces/Libro';
import { LibroService } from '../../../services/libro.service';
import { SharedService } from '../../../services/shared.service';
import { fanGatosValidator } from '../../shared/validators/fangatos.validator';
import { rangoNumeroValidator } from '../../shared/validators/rango.validator';

/** Componente para la lógica de creación de un libro */
@Component({
    selector: 'app-crear-libro',
    templateUrl: './crear-libro.component.html',
    styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
    
    /** Formulario que contiene los controles necesarios para crear un objeto libro */
    formularioCreacion: FormGroup;
    constructor(
        private snackbar: MatSnackBar,
        private libroService: LibroService,
        private sharedService:SharedService
    ) {
        this.sharedService.tituloWeb.next('Creación de libro');
    }

    ngOnInit(): void {
        this.formularioCreacion = new FormGroup({
            titulo: new FormControl(null, [Validators.required, fanGatosValidator()]),
            autor: new FormControl(null),
            stock: new FormControl(null, [Validators.required]),
            precio: new FormControl(null, [Validators.required, rangoNumeroValidator(5,10)]),
            cantidadPaginas: new FormControl(null, [Validators.required])
        });

    }
    
    /** Cuando el usuario pulse el botón de crear, recoges el libro, y lanzamos la api para guardarlo */
    crearLibro() {
        const libro: Libro = this.formularioCreacion.value;
        this.libroService.crearLibroOBS(libro).subscribe(libroPersistido => {
            this.snackbar.open('Libro creado corrrectamente', 'Cerrar');
        });
        
    }

}
