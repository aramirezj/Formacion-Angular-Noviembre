import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private snackbar: MatSnackBar) {

    }

    canActivate(): boolean {
        if (sessionStorage.getItem('token') !== null) {
            return true;
        } else {
            this.snackbar.open('Debe iniciar sesión antes', 'Cerrar');
            this.router.navigate(['login']);
        }
        return sessionStorage.getItem('token') !== null;
    }

}
