import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { ExpositorAutorComponent } from './expositor-autor/expositor-autor.component';
import { ExpositorComponent } from './expositor/expositor.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'expositor', component: ExpositorComponent },
    { path: 'creacionLibro', component: CrearLibroComponent, canActivate: [AuthGuard] },
    { path: 'expositorAutor', component: ExpositorAutorComponent },
    { path: 'creacionAutor', component: CrearAutorComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
