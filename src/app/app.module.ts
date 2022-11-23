import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpositorComponent } from './expositor/expositor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { AuthGuard } from './guards/auth.guard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LibroComponent } from './libro/libro.component';
import { LibroService } from './services/libro.service';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { ExpositorAutorComponent } from './expositor-autor/expositor-autor.component';
import { AutorComponent } from './autor/autor.component';
import { AutorService } from './services/autor.service';

@NgModule({
    declarations: [
        AppComponent,
        ExpositorComponent,
        LoginComponent,
        CrearLibroComponent,
        LibroComponent,
        CrearAutorComponent,
        ExpositorAutorComponent,
        AutorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatSnackBarModule,
        MatInputModule,
        MatFormFieldModule
    ],
    providers: [AuthGuard, LibroService, AutorService],
    bootstrap: [AppComponent]
})
export class AppModule { }
