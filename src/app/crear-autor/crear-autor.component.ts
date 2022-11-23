import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Autor } from '../interfaces/Autor';
import { Libro } from '../interfaces/Libro';
import { AutorService } from '../services/autor.service';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.scss']
})
export class CrearAutorComponent implements OnInit {
    formularioCreacion: FormGroup;
    constructor(
        private snackbar: MatSnackBar,
        private autorService: AutorService
    ) {
    }

    ngOnInit(): void {
        this.formularioCreacion = new FormGroup({
            nombre: new FormControl(null, [Validators.required]),
            librosPublicados: new FormControl(null,[Validators.required])
        });

    }

    crearAutor() {
        const autor: Autor = this.formularioCreacion.value;
        this.autorService.crearAutorOBS(autor).subscribe(autorPersistido => {
            this.snackbar.open('Autor creado corrrectamente', 'Cerrar');
        });
        
    }

}
