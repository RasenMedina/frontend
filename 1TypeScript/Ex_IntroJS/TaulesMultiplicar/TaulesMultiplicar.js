"use strict";

/**
 * FUNCIÓ AUXILIAR: Genera el codi HTML d'una sola taula de multiplicar per a un número concret.
 * @param {number} n - El número de la taula (per exemple, el 5).
 * @returns {string} - Un string amb el codi HTML de la taula individual.
 */
function generarTaulaUnica(n) {
    let html = "<table class='taula-individual'>";
    // Capçalera de la taula individual (ex: "Taula del 5")
    html += `<tr><th colspan="2">Taula del ${n}</th></tr>`;
    
    // Bucle del 1 al 10 per calcular les multiplicacions
    for (let i = 1; i <= 10; i++) {
        html += `<tr><td>${n} &times; ${i}</td><td>${n * i}</td></tr>`;
    }
    
    html += "</table>";
    return html;
}

/**
 * FUNCIÓ PRINCIPAL: Genera totes les taules des de 'start' fins a 'stop'
 * organitzades en files amb un màxim de 'ncol' columnes.
 * @param {number} start - Número inicial del rang.
 * @param {number} stop - Número final del rang.
 * @param {number} ncol - Nombre de taules que es mostraran per cada fila.
 * @returns {string} - El codi HTML global amb totes les taules estructurades en graella.
 */
function taules(start, stop, ncol) {
    let html = "<table>"; // Contenidor general en format taula
    let contadorColumna = 0;

    // Obrim la primera fila de la graella general
    html += "<tr>";

    // Bucle per recórrer tots els números des del 'start' fins al 'stop'
    for (let i = start; i <= stop; i++) {
        // Cada taula individual va dins d'una cel·la (td)
        html += "<td>";
        html += generarTaulaUnica(i);
        html += "</td>";

        contadorColumna++;

        // Si hem arribat al límit de columnes permès (ncol) i encara queden taules per mostrar
        if (contadorColumna === ncol && i < stop) {
            html += "</tr><tr>"; // Tanquem la fila actual i n'obrim una altra de nova
            contadorColumna = 0; // Reiniciem el comptador per a la nova fila
        }
    }

    // Tanquem l'última fila i la taula contenidora general
    html += "</tr>";
    html += "</table>";

    return html;
}

/**
 * FUNCIÓ MOSTRAR: Llegeix els valors introduïts als inputs de la pantalla,
 * crida a la funció 'taules' i injecta el resultat dins del div amb id="tm".
 */
function mostrar() {
    // Obtenim els valors dels inputs del DOM i els convertim a nombres enters
    let start = parseInt(document.getElementById("start").value);
    let stop = parseInt(document.getElementById("stop").value);
    let ncol = parseInt(document.getElementById("ncol").value);
    
    // Cerquem l'element HTML on mostrarem el resultat final
    let tm = document.getElementById("tm");
    
    // Generem el codi HTML cridant a la funció principal i l'assignem al innerHTML
    tm.innerHTML = taules(start, stop, ncol);
}