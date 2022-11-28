import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { ExpositorComponent } from './expositor/expositor.component';

const routes: Routes = [
    { path: 'expositor', component: ExpositorComponent },
    { path: 'creacionLibro', component: CrearLibroComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
