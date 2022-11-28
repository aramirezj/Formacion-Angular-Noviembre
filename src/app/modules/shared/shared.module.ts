import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGenericaComponent } from './tabla-generica/tabla-generica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule
];

@NgModule({
    declarations: [
        TablaGenericaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialModules
    ],
    exports: [
        TablaGenericaComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialModules
    ]
})
export class SharedModule { }
