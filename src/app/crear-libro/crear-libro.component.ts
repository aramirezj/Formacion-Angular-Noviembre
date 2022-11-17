import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../interfaces/Libro';

@Component({
    selector: 'app-crear-libro',
    templateUrl: './crear-libro.component.html',
    styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
    formularioCreacion: FormGroup;
    constructor() { }

    ngOnInit(): void {
        this.formularioCreacion = new FormGroup({
            titulo: new FormControl(null, [Validators.required]),
            autor: new FormControl(null),
            precio: new FormControl(null, [Validators.required]),
            cantidadPaginas: new FormControl(null, [Validators.required])
        });

    }

    crearLibro(){
        const libro:Libro = this.formularioCreacion.value;
        console.log(libro);
    }

}
