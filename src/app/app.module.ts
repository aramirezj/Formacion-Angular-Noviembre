import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { CrearAutorComponent } from './modules/autor/crear-autor/crear-autor.component';
import { ExpositorAutorComponent } from './modules/autor/expositor-autor/expositor-autor.component';
import { AutorComponent } from './modules/autor/carta-autor/autor.component';
import { AutorService } from './services/autor.service';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
