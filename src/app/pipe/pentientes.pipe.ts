import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

@Pipe({
    name: 'pendientes',
    //indicamos que es un pipe inpuro, para que la data cambie 
    pure: false
})

export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[], estado: boolean): Lista[] {

        let nuevaLista: Lista[] = [];

        // si la lista se encuentra en estado terminado,
        // entonces cree una nueva lista actualizada
        for (let lista of listas) {
            if (lista.terminado === estado) {
                nuevaLista.push(lista);
            }
        }

        return nuevaLista;
    }
}