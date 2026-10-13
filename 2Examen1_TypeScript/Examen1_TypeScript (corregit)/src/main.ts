//Classe que connecta HTML amb el programa

import { Contacte, TCategoria } from './contacte.js'; //Importem la classe contacte que representa una persona de l'agenda i el tipus TCategoria
import { Agenda } from './agenda.js'; //Importem la classe agenda
import { DADES_PROVA } from './dades.js'; //Importem l'array DADES_PROVA

// Inputs i resultats
const inNom = document.getElementById("nom") as HTMLInputElement; //Ho tractem com un input
const inTelefon = document.getElementById("telefon") as HTMLInputElement;
const inEmail = document.getElementById("email") as HTMLInputElement;
const selCategoria = document.getElementById("categoria") as HTMLSelectElement; //Ho tractem com un select
const divResultat = document.getElementById("resultat") as HTMLDivElement;

// Botons
const btnAfegir = document.getElementById("btnAfegir")!; // ! -> no serà null ni undefined
const btnCercar = document.getElementById("btnCercar")!;
const btnModificar = document.getElementById("btnModificar")!;
const btnEliminar = document.getElementById("btnEliminar")!;
const btnLlistar = document.getElementById("btnLlistar")!;
const btnOrdenar = document.getElementById("btnOrdenar")!;
const btnFiltrar = document.getElementById("btnFiltrar")!;

// Crear agenda
let agenda = new Agenda(); // creem una instància de la classe Agenda

// Afegir contacte
btnAfegir.addEventListener("click", () => { // li associem una funció lambda al botó d'afegir
    // llegim els 4 camps del formulari
    let nom = inNom.value.trim();
    let telefon = inTelefon.value.trim();
    let email = inEmail.value.trim();
    let categoria = selCategoria.value as TCategoria;

    // ens assegurem que el nom i el telèfon continguin dades
    if (nom === "" || telefon === "") {
        divResultat.innerHTML = "Falten dades";
        return;
    }

    // creem un objecte de la classe Contacte i l'afegim a l'agenda
    try {
        let contacte = new Contacte(nom, telefon, email, categoria);
        agenda.afegir(contacte);
        divResultat.innerHTML = "Contacte afegit";
    } catch (error) {
        divResultat.innerHTML = "Error en afegir contacte"; //
    }
});

// Cercar contacte
btnCercar.addEventListener("click", () => {
    let telefon = inTelefon.value;
    let contacte = agenda.cercar(telefon); // retorna un Contacte o undefined

    if (contacte !== undefined) {
        divResultat.textContent = contacte.nom + " - " + contacte.telefon;
    } else {
        divResultat.innerHTML = "No trobat";
    }
});

// Eliminar contacte
btnEliminar.addEventListener("click", () => {
    let telefon = inTelefon.value;

    if (agenda.eliminar(telefon)) { // eliminar retorna un un booleà
        divResultat.innerHTML = "Contacte eliminat";
    } else {
        divResultat.innerHTML = "No existeix";
    }
});

// Llistar contactes
btnLlistar.addEventListener("click", () => {
    let contactes = agenda.llistar(); // obtenim tots els contactes del Map en forma d'array

    divResultat.innerHTML = ""; // buidem el contenidor de resultats

    for (let contacte of contactes) { // recorrem els contactes
        let p = document.createElement("p"); // creem un paràgraf HTML nou
        p.textContent = contacte.nom + " - " + contacte.telefon; // introduïm el text al paràgraf
        divResultat.appendChild(p); // afegim aquest paràgraf al contenidor
    }
});

// Modificar contacte
btnModificar.addEventListener("click", () => {
    // llegim els 4 camps del formulari
    let telefon = inTelefon.value;
    let nom = inNom.value;
    let email = inEmail.value;
    let categoria = selCategoria.value as TCategoria;

    // modifiquem el contacte afegit
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
(function(dades: typeof DADES_PROVA): void { // declara una funció sense nom i tipem el paràmetre dades
    for (let dada of dades) {
        let contacte = new Contacte(
            dada.nom,
            dada.telefon,
            dada.email,
            dada.categoria as TCategoria
        );

        agenda.afegir(contacte);
    }
})(DADES_PROVA); // perquè l'executi immediatament

// Falta el try catch!!!












