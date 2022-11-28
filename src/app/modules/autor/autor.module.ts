import { NgModule } from '@angular/core';

import { AutorRoutingModule } from './autor-routing.module';
import { AutorComponent } from './carta-autor/autor.component';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { ExpositorAutorComponent } from './expositor-autor/expositor-autor.component';
import { SharedModule } from '../shared/shared.module';
import { AutorService } from 'src/app/services/autor.service';


@NgModule({
    declarations: [
        CrearAutorComponent,
        ExpositorAutorComponent,
        AutorComponent
    ],
    imports: [
        SharedModule,
        AutorRoutingModule
    ],
    providers:[AutorService]
})
export class AutorModule { }
