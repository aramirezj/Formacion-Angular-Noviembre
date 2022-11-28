import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { ExpositorAutorComponent } from './expositor-autor/expositor-autor.component';

const routes: Routes = [
    { path: 'expositorAutor', component: ExpositorAutorComponent },
    { path: 'creacionAutor', component: CrearAutorComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
