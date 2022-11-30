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
import { PuntosPipe } from './pipes/puntos.pipe';
import { PocoStockPipe } from './pipes/poco-stock.pipe';
import { StockCriticoDirective } from './directives/stock-critico.directive';

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
        TablaGenericaComponent,
        PuntosPipe,
        PocoStockPipe,
        StockCriticoDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialModules
    ],
    exports: [
        TablaGenericaComponent,
        PuntosPipe,
        PocoStockPipe,
        StockCriticoDirective,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialModules
    ]
})
export class SharedModule { }
