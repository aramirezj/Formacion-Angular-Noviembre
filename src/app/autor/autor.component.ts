import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Autor } from '../interfaces/Autor';

@Component({
    selector: 'app-autor',
    templateUrl: './autor.component.html',
    styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {
    @Input() autor: Autor;
    @Input() configuracionExpositor: string;

    @Output() borrado: EventEmitter<void> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    borrarAutor() {
        this.borrado.emit();
    }

}
