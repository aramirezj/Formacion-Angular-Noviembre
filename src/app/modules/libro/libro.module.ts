import { NgModule } from '@angular/core';

import { LibroRoutingModule } from './libro-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LibroComponent } from './carta-libro/libro.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { ExpositorComponent } from './expositor/expositor.component';
import { LibroService } from 'src/app/services/libro.service';


@NgModule({
  declarations: [
    ExpositorComponent,
    CrearLibroComponent,
    LibroComponent,
  ],
  imports: [
    LibroRoutingModule,
    SharedModule
  ],
  providers:[LibroService]
})
export class LibroModule { }
