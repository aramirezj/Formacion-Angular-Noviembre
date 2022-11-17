import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    sesionIniciada: boolean = false;

    formularioLogin: FormGroup;


    constructor(private snackbar: MatSnackBar,private router: Router) { 

    }
    ngOnInit(): void {
        this.formularioLogin = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.email]),
            password: new FormControl(null, [Validators.required])
        });

    }
    iniciarSesion() {
        const email: string = this.formularioLogin.get('email').value;
        const password: string = this.formularioLogin.value.password;

        if (email === 'admin@gmail.com' && password === '1234') {
            this.snackbar.open('Inicio de sesión correcto', 'Cerrar');
            sessionStorage.setItem('token', '1');
            this.sesionIniciada = true;
            this.router.navigate(['expositor']);
        } else {
            this.snackbar.open('Datos incorrectos', 'Cerrar');
        }
    }

    cerrarSesion() {
        sessionStorage.removeItem('token');
        this.sesionIniciada = false;
    }

}
