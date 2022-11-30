import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LibroService } from './services/libro.service';
import { SharedService } from './services/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string;
    valorProduccion:string;
    constructor(private sharedService: SharedService) {
        this.sharedService.tituloWeb
            .subscribe(nuevoTitulo => {
                console.log(nuevoTitulo);
                this.title = nuevoTitulo;
            });
            this.valorProduccion = environment.apiBackend;
            console.log(this.valorProduccion);
    }

}
