import { ValidatorFn, AbstractControl } from "@angular/forms";

export function fanGatosValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

        if (control.value !== undefined && (control.value === 'perro')) {
            return { 'fanGatos': true };
        }
        return null;

        


    };
}