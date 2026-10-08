/*
4 - Expedients d'alumnes
Crea 3 objectes per guardar les dades de 3 alumnes.

Cada objecte ha de contenir els següents atributs:

nom (text)
cognoms (text)
curs (número: 1 o 2)
moduls (array d'objectes que han de contenir els següents atributs):
nom (text)
notes (array de números que ha de contenir les notes de cada UF del mòdul)
Clona els 3 alumnes i modifica els seus atributs: nom, cognoms, afegeix/treu un mòdul, canvia les notes...

Crea un array i guarda a dins els 6 objectes anteriors.

Els alumnes no tenen perquè estar matriculats dels mateixos mòduls, però el mateix mòdul ha de tenir el mateix nombre d'unitats formatives (notes) en tots els alumnes que hi estiguin matriculats.

Fes un mètode que calculi la mitjana de cada mòdul de cada alumne i la guardi en l'atribut notaModul dins de l'objecte modul. Només s'ha de calcular si té totes les UF del mòdul aprovades.

Fes un mètode que calculi la nota mitjana de tot el curs, però només si té nota de tots els mòduls.
Aquesta nota s'ha de guardar en l'atribut notaFinal dins de l'objecte alumne.

Fes un mètode que ordeni els alumnes per cognoms i nom utilitzant sort() i una funció personalitzada.

Fes un mètode (o els que necessitis) per mostrar les dades en una taula similar a la següent:

Alumne	Curs	M02	M03	M06	M07	Final
Man, Bat	2	9	7	5	7	7,0
Man, Iron	1	 	8	 	6	
Man, Spider	2	6	 	8	9	
Woman, Cat	1	9	8	 	 	
Woman, Super	2	 	7	5	7	
Woman, Wonder	2	8	6	7	9	7,5
La nota de cada mòdul ha de ser la mitjana arrodonida de les notes de cada UF.
La nota final ha de ser la mitjana dels mòduls arrodonida a un decimal.

Fes un mètode per filtrar els alumnes que estan matriculats en un mòdul concret (utilitza filter()).

Fes un mètode per filtrar els alumnes que no estan matriculats en un mòdul concret (utilitza filter()).

Fes un mètode per filtrar els alumnes que han finalitzat el cicle.

Modifica el mètode que mostra els alumnes de forma que pugui mostrar qualsevol llista que se li passi (per exemple, les llistes filtrades).
*/


//Primer creem els tipus d'objecte
type Modul={
    readonly nom:string;
    notes:number[];
    mitjana?:number;
};

type Alumne={
    nom:string;
    cognoms:string;
    curs:1|2;
    moduls:Modul[];
    notaFinal?: number;
};

//Funció per crear 3 alumnes
function crearAlumnes():Alumne[]{
    let alumne1:Alumne={
        nom:"Yaro",
        cognoms:"Kalinin",
        curs:2, 
        moduls:[
            {
                nom:"Client",
                notes:[8,7,6]
            },
            {
                nom:"Servidor",
                notes:[2,5,6]
            }           
        ]
    };
    let alumne2:Alumne={
        nom:"Ana",
        cognoms:"Bonilla",
        curs:1,
        moduls:[
            {
                nom:"Client",
                notes:[6,9,6]
            },
            {
                nom:"Servidor",
                notes:[5,10,8]
            }
        ]
    };
    let alumne3:Alumne={
        nom:"Joel",
        cognoms:"Toribio",
        curs:2,
        moduls:[
            {
                nom:"Client",
                notes:[8,8,10]
            },
            {
                nom:"Servidor",
                notes:[8,9,9]
            }
        ]
    };
    return [alumne1, alumne2, alumne3];
}

//Funció per clonar 3 alumnes i modificar els seus atributs
function provesAmb3Alumnes(a1:Alumne, a2:Alumne, a3:Alumne):Alumne[]{
    //Primers els clonem
    let a1_bis: Alumne = JSON.parse(JSON.stringify(a1));

    let a2_bis: Alumne = JSON.parse(JSON.stringify(a2));

    let a3_bis: Alumne = JSON.parse(JSON.stringify(a3));
    /*
    let a1_bis: Alumne = {
        ...a1,
        moduls: a1.moduls.map((modul: Modul) => ({
            ...modul,
            notes: [...modul.notes]
        }))
    };


    let a2_bis: Alumne = {
        ...a2,
        moduls: a2.moduls.map((modul: Modul) => ({
            ...modul,
            notes: [...modul.notes]
        }))
    };


    let a3_bis: Alumne = {
        ...a3,
        moduls: a3.moduls.map((modul: Modul) => ({
            ...modul,
            notes: [...modul.notes]
        }))
    };
    */

    // Ara modifiquem les còpies.
    a1_bis.nom = "Marc";
    a1_bis.cognoms = "Garcia";

    // Canviem una nota.
    a1_bis.moduls[0].notes[0] = 10;


    a2_bis.nom = "Laura";
    a2_bis.cognoms = "Martinez";

    // Afegim un mòdul.
    a2_bis.moduls.push({
        nom: "Desplegament",
        notes: [7, 8, 9]
    });


    a3_bis.nom = "Pau";
    a3_bis.cognoms = "Soler";

    // Eliminem l'últim mòdul.
    a3_bis.moduls.pop();


    //Després els retornem en forma d'array d'alumne
    return [a1_bis, a2_bis, a3_bis];
}


//Funció per calcular la nota mitjana de tots els alumnes
function calcularMitjanes(alumnes:Alumne[]):void{
    for (let i:number=0; i<alumnes.length; i++){
        for (let j:number=0; j<alumnes[i].moduls.length; j++){
            let haSuspes: boolean = alumnes[i].moduls[j].notes.some((nota: number) => nota < 5);
            if (!haSuspes){
                let total:number = 0;
                for (let z:number=0; z<alumnes[i].moduls[j].notes.length; z++){
                    total += alumnes[i].moduls[j].notes[z];
                }
                alumnes[i].moduls[j].mitjana = Math.round(total/alumnes[i].moduls[j].notes.length);
            }
            else{
                delete alumnes[i].moduls[j].mitjana;
            }
            
        } 
    }
}

//Funció per calcular la nota final
function calcularNotesFinals(alumnes: Alumne[]): void {

    for (let alumne of alumnes){
        let faltaAlgunaNota:boolean = alumne.moduls.some(
            (modul: Modul) => modul.mitjana === undefined
        );
        if (!faltaAlgunaNota && alumne.moduls.length>0){
            let total= 0;
            for (let modul of alumne.moduls) {
                total += modul.mitjana!;
            }
            let mitjana= total/alumne.moduls.length;
            alumne.notaFinal = Math.round (mitjana * 10) / 10;
        }
    }
}

//Funció per mostrar les notes
function mostrarNotes(notes:number[]):string{
    return notes.join(", ");
}

//Funció per mostrar els mòduls
function mostrarModuls(moduls:Modul[]):string{
    let m="";
    for (let i:number=0; i<moduls.length-1; i++){
        m += moduls[i].nom + "<br>";
        m += mostrarNotes(moduls[i].notes) + "<br>";
        let mitjana = moduls[i].mitjana;
        m += mitjana !== undefined ? mitjana : "0";
        m += "<br>"
    }
    return m;
}

//Funció per mostrar els alumnes
function mostrarAlumnes(alumnes:Alumne[]):string{
    let m = "";
    for (let i:number=0; i<alumnes.length; i++){
        m += alumnes[i].nom + "<br>";
        m += alumnes[i].cognoms + "<br>";
        m += alumnes[i].curs + "<br>";
        m += mostrarModuls(alumnes[i].moduls);
        if (alumnes[i].notaFinal !== undefined) {
            m += "Nota final: " + alumnes[i].notaFinal;
        }
        m += "<hr>";
    }
    return m;
}

//Funció per escriure en un document HTML
function escriureHTML(id: string, contingut: string): void {
    let element:HTMLElement | null = document.getElementById(id);
    if (element !== null){
        element.innerHTML = contingut;
    }
}

// Filtrar
function filtrarPerCurs(alumnes:Alumne[], curs:1|2):Alumne[]{
    return alumnes.filter(
        (alumne:Alumne) => alumne.curs === curs
    );
}

function filtrarMatriculats(alumnes:Alumne[], nomModul:string):Alumne[]{
    return alumnes.filter(
        (alumne:Alumne) => alumne.moduls.some(
            (modul:Modul) => modul.nom === nomModul
        )
    );
}

function filtrarNoMatriculats(alumnes:Alumne[], nomModul:string):Alumne[]{
    return alumnes.filter(
        (alumne:Alumne) => !alumne.moduls.some(
            (modul:Modul) => modul.nom === nomModul
        )
    );
}

function filtrarFinalitzats(alumnes:Alumne[]):Alumne[]{
    return alumnes.filter(
        (alumne:Alumne) => alumne.notaFinal !== undefined
    );
}

//Ordenar
function ordenarAlumnes(alumnes:Alumne[]): Alumne[] {
    let ordenats: Alumne[] = [...alumnes];
    ordenats.sort(
        (a: Alumne, b: Alumne):number => {
            let comparacioCognoms : number = a.cognoms.localeCompare(b.cognoms);
            if (comparacioCognoms !== 0){
                return comparacioCognoms;
            }
            return a.nom.localeCompare(b.nom);
        }
    );
    return ordenats;
}

// ======================================================
// PETIT LABORATORI DE MÈTODES D'ARRAY
// ======================================================

function provesArrays(alumnes: Alumne[]): string {

    let m: string = "";


    // --------------------------------------------------
    // MAP
    // --------------------------------------------------

    /*
        map() TRANSFORMA.

        Alumne[]
            ↓
        string[]

        Cada Alumne es converteix en un string.
    */

    let noms: string[] =
        alumnes.map(
            (alumne: Alumne) =>
                `${alumne.nom} ${alumne.cognoms}`
        );

    m += `<h3>map()</h3>`;
    m += `<p>${noms.join(" · ")}</p>`;


    // --------------------------------------------------
    // FILTER
    // --------------------------------------------------

    let alumnesSegon: Alumne[] =
        filtrarPerCurs(alumnes, 2);

    m += `<h3>filter()</h3>`;
    m += `<p>Alumnes de segon: ${alumnesSegon.length}</p>`;

    m += `<ul>`;

    alumnesSegon.forEach(
        (alumne: Alumne) => {
            m += `<li>${alumne.nom} ${alumne.cognoms}</li>`;
        }
    );

    m += `</ul>`;


    // --------------------------------------------------
    // FIND
    // --------------------------------------------------

    /*
        find() NO retorna un array.

        Retorna:
            Alumne | undefined
    */

    let trobat: Alumne | undefined =
        alumnes.find(
            (alumne: Alumne) => alumne.nom === "Ana"
        );

    m += `<h3>find()</h3>`;

    if (trobat !== undefined) {
        m += `<p>Hem trobat: ${trobat.nom} ${trobat.cognoms}</p>`;
    } else {
        m += `<p>No s'ha trobat l'alumne.</p>`;
    }


    // --------------------------------------------------
    // SOME
    // --------------------------------------------------

    /*
        some() retorna un boolean.
    */

    let hiHaPrimer: boolean =
        alumnes.some(
            (alumne: Alumne) => alumne.curs === 1
        );

    m += `<h3>some()</h3>`;
    m += `
        <p>
            Hi ha algun alumne de primer?
            ${hiHaPrimer ? "Sí" : "No"}
        </p>
    `;


    // --------------------------------------------------
    // SORT
    // --------------------------------------------------

    let ordenats: Alumne[] =
        ordenarAlumnes(alumnes);

    m += `<h3>sort()</h3>`;
    m += `<ol>`;

    ordenats.forEach(
        (alumne: Alumne) => {
            m += `
                <li>
                    ${alumne.cognoms}, ${alumne.nom}
                </li>
            `;
        }
    );

    m += `</ol>`;


    return m;
}



//Funció main
function main():void{
     // 1. Creem els tres alumnes originals.
    let alumnes: Alumne[] =
        crearAlumnes();


    /*
        Els mostrem ABANS de calcular/modificar res.

        Per això podem comparar després originals
        i modificats.
    */
    escriureHTML(
        "originals",
        mostrarAlumnes(alumnes)
    );


    // 2. Clonem i modifiquem.
    let alumnesBis: Alumne[] =
        provesAmb3Alumnes(
            alumnes[0],
            alumnes[1],
            alumnes[2]
        );


    // 3. Concatenem els dos arrays.
    let alumnesTotals: Alumne[] =
        alumnes.concat(alumnesBis);


    /*
        alumnes.concat(alumnesBis)

        NO modifica alumnes.

        Retorna un ARRAY NOU amb els dos arrays units.
    */


    // 4. Calculem les mitjanes.
    calcularMitjanes(alumnesTotals);
    calcularNotesFinals(alumnesTotals);


    // 5. Mostrem els diferents resultats.
    escriureHTML(
        "modificats",
        mostrarAlumnes(alumnesBis)
    );


    escriureHTML(
        "totals",
        mostrarAlumnes(alumnesTotals)
    );


    // 6. Fem les proves dels mètodes d'Array.
    escriureHTML(
        "proves",
        provesArrays(alumnesTotals)
    );


    // 7. Filtres específics de l'enunciat.
    let matriculatsClient: Alumne[] =
        filtrarMatriculats(
            alumnesTotals,
            "Client"
        );

    escriureHTML(
        "matriculats",
        mostrarAlumnes(matriculatsClient)
    );


    let finalitzats: Alumne[] =
        filtrarFinalitzats(alumnesTotals);

    escriureHTML(
        "finalitzats",
        mostrarAlumnes(finalitzats)
    );
}


main();