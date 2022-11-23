import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../interfaces/Libro';

@Component({
    selector: 'app-libro',
    templateUrl: './libro.component.html',
    styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
    @Input() libro: Libro;
    @Input() configuracionExpositor: string;

    @Output() comprado: EventEmitter<Libro> = new EventEmitter();

    @Output() sumar: EventEmitter<void> = new EventEmitter();
    @Output() restar: EventEmitter<void> = new EventEmitter();
    @Output() borrado: EventEmitter<void> = new EventEmitter();
    constructor() { }


    sumarLibro() {
        this.sumar.emit();
    }

    restarLibro() {
        this.restar.emit();
    }

    ngOnInit(): void {

    }

    comprar() {
        this.comprado.emit(this.libro);
    }

    borrarLibro() {
        this.borrado.emit();
    }


}
