// TODO: crea aquí la classe estàtica Agenda

import { Contacte, TCategoria } from "./contacte.js";

export class Agenda{
    static #contactes: Map<string, Contacte> = new Map();

    afegir(c: Contacte): void {
        let trobat:boolean = Agenda.#contactes.has(c.telefon);
        if (trobat) {
            throw new Error("Ja existeix un contacte amb aquest telèfon");
        }
        Agenda.#contactes.set(c.telefon, c);
    }

    cercar(telefon: string): Contacte | undefined {
        return Agenda.#contactes.get(telefon);
    }

    modificar(telefon: string, nom: string, email: string, categoria: TCategoria): void {
        let contacte = this.cercar(telefon);

        if (contacte !== undefined) {
            contacte.modificar(nom, email, categoria);
        }
        else{
            throw new Error("No existeix un contacte amb aquest telèfon");
        }
    }

    eliminar(telefon: string): boolean {
        let contacte = this.cercar(telefon);

        if (contacte !== undefined) {
             Agenda.#contactes.delete(telefon);
             return true;
        }
        return false;       
    }

    llistar(): Contacte[] {
        return Array.from(Agenda.#contactes.values()); //Obtenim els valors de contactes i els retornem en forma d'array
    }

    cercarPerEmail(email: string): Contacte | undefined {
        //agafem l'array de contactes, i busquem els contactes que tinguin el mateix email
        return this.llistar().find(contacte => contacte.email === email);
    } 
}