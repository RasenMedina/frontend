import { Contacte } from "./contacte.js";
import type { TCategoria } from "./contacte.js";

// Agenda completament estàtica: no cal fer new Agenda().
export class Agenda {
    static #contactes: Map<string, Contacte> = new Map();

    // Desa un contacte, sense sobreescriure telèfons existents.
    static afegir(c: Contacte): void {
        if (Agenda.#contactes.has(c.telefon)) {
            throw new Error("Ja existeix un contacte amb aquest telèfon");
        }
        Agenda.#contactes.set(c.telefon, c);
    }

    // Retorna el contacte o undefined si no existeix.
    static cercar(telefon: string): Contacte | undefined {
        return Agenda.#contactes.get(telefon.trim());
    }

    // Modifica les dades, però manté la clau (telèfon).
    static modificar(telefon: string, nom: string, email: string, categoria: TCategoria): void {
        let contacte = Agenda.cercar(telefon);
        if (contacte === undefined) {
            throw new Error("No existeix un contacte amb aquest telèfon");
        }
        contacte.modificar(nom, email, categoria);
    }

    // Elimina per telèfon i retorna si s'ha eliminat.
    static eliminar(telefon: string): boolean {
        return Agenda.#contactes.delete(telefon.trim());
    }

    // Converteix els valors del Map en un array.
    static llistar(): Contacte[] {
        return Array.from(Agenda.#contactes.values());
    }

    // Ordena una còpia de la llista; no altera el Map.
    static ordenarPerNom(): Contacte[] {
        return Agenda.llistar().sort((a, b) => a.nom.localeCompare(b.nom, "ca"));
    }

    // Filtra per categoria.
    static filtrarPerCategoria(categoria: TCategoria): Contacte[] {
        return Agenda.llistar().filter(c => c.categoria === categoria);
    }

    // Cerca pel correu electrònic.
    static cercarPerEmail(email: string): Contacte | undefined {
        return Agenda.llistar().find(c => c.email === email.trim());
    }
}
