import { Contacte } from "./contacte.js";
import type { TCategoria } from "./contacte.js";
import { Agenda } from "./agenda.js";
import { DADES_PROVA } from "./dades.js";

// Elements de l'HTML. Els IDs han de coincidir amb index.html.
const inNom = document.getElementById("nom") as HTMLInputElement;
const inTelefon = document.getElementById("telefon") as HTMLInputElement;
const inEmail = document.getElementById("email") as HTMLInputElement;
const selCategoria = document.getElementById("categoria") as HTMLSelectElement;
const divResultat = document.getElementById("resultat") as HTMLDivElement;

const btnAfegir = document.getElementById("btnAfegir")!;
const btnCercar = document.getElementById("btnCercar")!;
const btnModificar = document.getElementById("btnModificar")!;
const btnEliminar = document.getElementById("btnEliminar")!;
const btnLlistar = document.getElementById("btnLlistar")!;
const btnOrdenar = document.getElementById("btnOrdenar")!;
const btnFiltrar = document.getElementById("btnFiltrar")!;

// Llegeix els camps del formulari.
function llegirFormulari(): { nom: string; telefon: string; email: string; categoria: TCategoria } {
    return {
        nom: inNom.value.trim(),
        telefon: inTelefon.value.trim(),
        email: inEmail.value.trim(),
        categoria: selCategoria.value as TCategoria
    };
}

// Mostra un missatge sense interpretar-lo com a HTML.
function mostrarMissatge(missatge: string): void {
    divResultat.textContent = missatge;
}

// Mostra qualsevol llista de contactes.
function mostrarContactes(contactes: Contacte[]): void {
    divResultat.replaceChildren();
    if (contactes.length === 0) {
        mostrarMissatge("No hi ha contactes per mostrar");
        return;
    }
    for (let contacte of contactes) {
        let p = document.createElement("p");
        p.textContent = contacte.toString();
        divResultat.appendChild(p);
    }
}

// Mostra el missatge concret de l'excepció.
function mostrarError(error: unknown): void {
    mostrarMissatge(error instanceof Error ? error.message : String(error));
}

// Crea i afegeix un contacte.
btnAfegir.addEventListener("click", () => {
    try {
        let d = llegirFormulari();
        Agenda.afegir(new Contacte(d.nom, d.telefon, d.email, d.categoria));
        mostrarMissatge("Contacte afegit correctament");
    } catch (error) {
        mostrarError(error);
    }
});

// Cerca un contacte per telèfon.
btnCercar.addEventListener("click", () => {
    let contacte = Agenda.cercar(inTelefon.value);
    if (contacte === undefined) mostrarMissatge("Contacte no trobat");
    else mostrarContactes([contacte]);
});

// Modifica el contacte identificat pel telèfon.
btnModificar.addEventListener("click", () => {
    try {
        let d = llegirFormulari();
        Agenda.modificar(d.telefon, d.nom, d.email, d.categoria);
        mostrarMissatge("Contacte modificat correctament");
    } catch (error) {
        mostrarError(error);
    }
});

// Elimina un contacte per telèfon.
btnEliminar.addEventListener("click", () => {
    mostrarMissatge(Agenda.eliminar(inTelefon.value) ? "Contacte eliminat" : "Contacte no trobat");
});

// Llista tots els contactes.
btnLlistar.addEventListener("click", () => mostrarContactes(Agenda.llistar()));

// Ordena els contactes per nom.
btnOrdenar.addEventListener("click", () => mostrarContactes(Agenda.ordenarPerNom()));

// Filtra els contactes per la categoria seleccionada.
btnFiltrar.addEventListener("click", () => {
    mostrarContactes(Agenda.filtrarPerCategoria(selCategoria.value as TCategoria));
});

// Funció anònima autoexecutable: carrega les dades inicials.
(function (dades: typeof DADES_PROVA): void {
    let carregats = 0;
    let descartats = 0;
    for (let dada of dades) {
        try {
            let contacte = new Contacte(dada.nom, dada.telefon, dada.email, dada.categoria as TCategoria);
            Agenda.afegir(contacte);
            carregats++;
        } catch (error) {
            descartats++;
            console.warn("Contacte de prova descartat:", dada, error);
        }
    }
    mostrarMissatge(`Dades inicials: ${carregats} contactes carregats i ${descartats} descartats.`);
})(DADES_PROVA);
