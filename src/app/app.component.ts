import { Component } from '@angular/core';
import { LibroService } from './services/libro.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'libreria';


    constructor(private libroService: LibroService) {
        console.log(this.libroService.miLibroFavorito);
        this.libroService.miLibroFavorito = 'Cien años de soledad';
    }

}
