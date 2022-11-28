import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'usuario', loadChildren: () =>import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) },
    { path: 'libro', loadChildren: () =>import('./modules/libro/libro.module').then(m => m.LibroModule) },
    { path: 'autor', loadChildren: () =>import('./modules/autor/autor.module').then(m => m.AutorModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
