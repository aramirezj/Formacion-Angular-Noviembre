import { Component } from '@angular/core';
import { LibroService } from './services/libro.service';
import { SharedService } from './services/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string;
    constructor(private sharedService: SharedService) {
        this.sharedService.tituloWeb
            .subscribe(nuevoTitulo => {
                console.log(nuevoTitulo);
                this.title = nuevoTitulo;
            });

    }

}
