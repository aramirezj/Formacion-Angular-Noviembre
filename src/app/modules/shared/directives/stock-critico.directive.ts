import { Directive, ElementRef, Host, HostListener, Input, OnChanges, Renderer2, SimpleChange } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from 'src/app/interfaces/Libro';
import { LibroService } from 'src/app/services/libro.service';

@Directive({
    selector: '[appStockCritico]'
})
export class StockCriticoDirective implements OnChanges {
    @Input('appStockCritico') datos:{libro:Libro,stock:number};
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private matSnackBar: MatSnackBar,
        private libroService:LibroService
    ) {
    }

    ngAfterViewInit() {

        const stockNumber: number = parseInt(this.elementRef.nativeElement.textContent)
        if (stockNumber < 5) {
            this.elementRef.nativeElement.textContent += ' (Stock crítico)';
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
        }
        console.log(this.datos);
    }

    ngOnChanges(changes:{datos:SimpleChange}){
        console.log(changes);
        if(!changes.datos.firstChange){
            if(changes.datos.currentValue.stock  === 0){
                this.matSnackBar.open('Quillo lo has vacio');
                this.libroService.borrarLibroOBS(this.datos.libro).subscribe();
            }
        }
    }

    @HostListener('click', ['$event.target'])
    onClick() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
        this.elementRef.nativeElement.textContent = 'HE SIDO CLICADO';
    }

}
