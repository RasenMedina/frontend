/*
Fes un mètode que, passant-li un enter positiu (n), retorni un array amb n paraules agafades aleatòriament de l'array diccionari[].
Per provar aquest mètode, fes un altre que el cridi per generar un array de 10 paraules i el mostri amb una separació de 10 guions entre cada paraula:
*/

import { diccionari } from "./Diccionari.js";

function mostrarNParaules(n:number):void{

    //Generem les n paraules i les guardem en una array
    let paraules:string[] = generarNParaules(n);

    //Construïm el text que volem mostrar
    let m:string="";
    for(let i:number=0; i<n-1; i++){
        m+=paraules[i];
        m+="<br>----------<br>";
    }
    m+=paraules[n-1];
    
    //Busquem l'element de l'HTML que té id="resultat"
    let resultat:HTMLElement | null = document.getElementById("resultat");

    //Comprovem que l'element existeix abans d'utilitzar-lo
    if(resultat!==null){
        resultat.innerHTML = m;
    }
}

function generarNParaules(n:number):string[]{

    //Primer definim les variables
    let paraules:string[]=[];

    //Omplim l'array de n paraules aleatòries
    for(let i:number=0; i<n; i++){
        //Creem un índex aleatori entre 0 i la longitud del diccionari-1
        let i_random:number= Math.floor(Math.random()*diccionari.length);

        //Agafem la paraula que ocupa aquest lloc aleatori i l'assignem a l'array de paraules
        // paraules[i]=diccionari[i_random];
        paraules.push(diccionari[i_random])
    }

    //Retornem el resultat
    return paraules;
}

function main():void{
    mostrarNParaules(10);
}

main();