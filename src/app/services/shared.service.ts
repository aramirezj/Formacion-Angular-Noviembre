import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    tituloWeb: BehaviorSubject<string> =
     new BehaviorSubject('Inicio');
    constructor() { }
}
