import { ValidatorFn, AbstractControl } from "@angular/forms";

export function rangoNumeroValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {


        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'rangoNumero': true };
        }
        return null;

        


    };
}