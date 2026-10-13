
import { Contacte, TCategoria } from './contacte.js';
import { Agenda } from './agenda.js';
import { DADES_PROVA } from './dades.js';

// Inputs i resultats
const inNom = document.getElementById("nom") as HTMLInputElement;
const inTelefon = document.getElementById("telefon") as HTMLInputElement;
const inEmail = document.getElementById("email") as HTMLInputElement;
const selCategoria = document.getElementById("categoria") as HTMLSelectElement;
const divResultat = document.getElementById("resultat") as HTMLDivElement;

// Botons
const btnAfegir = document.getElementById("btnAfegir")!;
const btnCercar = document.getElementById("btnCercar")!;
const btnModificar = document.getElementById("btnModificar")!;
const btnEliminar = document.getElementById("btnEliminar")!;
const btnLlistar = document.getElementById("btnLlistar")!;
const btnOrdenar = document.getElementById("btnOrdenar")!;
const btnFiltrar = document.getElementById("btnFiltrar")!;

// Crear agenda
let agenda = new Agenda();

// Afegir contacte
btnAfegir.addEventListener("click", () => {
    let nom = inNom.value;
    let telefon = inTelefon.value;
    let email = inEmail.value;
    let categoria = selCategoria.value as TCategoria;

    if (nom == "" || telefon == "") {
        divResultat.innerHTML = "Falten dades";
        return;
    }

    try {
        let contacte = new Contacte(nom, telefon, email, categoria);
        agenda.afegir(contacte);
        divResultat.innerHTML = "Contacte afegit";
    } catch (error) {
        divResultat.innerHTML = "Error en afegir contacte";
    }
});

// Cercar contacte
btnCercar.addEventListener("click", () => {
    let telefon = inTelefon.value;
    let contacte = agenda.cercar(telefon);

    if (contacte !== undefined) {
        divResultat.textContent = contacte.nom + " - " + contacte.telefon;
    } else {
        divResultat.innerHTML = "No trobat";
    }
});

// Eliminar contacte
btnEliminar.addEventListener("click", () => {
    let telefon = inTelefon.value;

    if (agenda.eliminar(telefon)) {
        divResultat.innerHTML = "Contacte eliminat";
    } else {
        divResultat.innerHTML = "No existeix";
    }
});

// Llistar contactes
btnLlistar.addEventListener("click", () => {
    let contactes = agenda.llistar();

    divResultat.innerHTML = "";

    for (let contacte of contactes) {
        let p = document.createElement("p");
        p.textContent = contacte.nom + " - " + contacte.telefon;
        divResultat.appendChild(p);
    }
});

// Modificar contacte
btnModificar.addEventListener("click", () => {
    let telefon = inTelefon.value;
    let nom = inNom.value;
    let email = inEmail.value;
    let categoria = selCategoria.value as TCategoria;

    try {
        agenda.modificar(telefon, nom, email, categoria);
        divResultat.innerHTML = "Contacte modificat";
    } catch (error) {
        divResultat.innerHTML = "Error en modificar";
    }
});

// Ordenar
btnOrdenar.addEventListener("click", () => {
    // TODO ordenar contactes
});

// Filtrar
btnFiltrar.addEventListener("click", () => {
    divResultat.innerHTML = "Filtrar pendent";
});

// Funció anònima i autoexecutable
(function(dades: typeof DADES_PROVA): void {
    for (let dada of dades) {
        let contacte = new Contacte(
            dada.nom,
            dada.telefon,
            dada.email,
            dada.categoria as TCategoria
        );

        agenda.afegir(contacte);
    }
})(DADES_PROVA);














