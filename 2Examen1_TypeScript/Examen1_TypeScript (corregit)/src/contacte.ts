// TODO: crea aquí la classe Contacte i els tipus relacionats

export type TCategoria = "familia" | "amics" | "feina";

export type TDadesContacte={
    nom:string;
    telefon:string;
    email:string;
    categoria:TCategoria;
};

export class Contacte{
    #nom : string;
    #telefon: string;
    #email: string;
    #categoria: TCategoria;

    constructor(nom: string, telefon: string, email: string, categoria:TCategoria) {
        if (!/^[a-zA-z ]{2,30}$/.test(nom)) {
            throw new Error("El format del nom no és correcte");
        }
        if (!/^[6789]{1}\d{8}$/.test(telefon)) {
            throw new Error("El format del telefon no és correcte");
        }
        if (!/^[\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("El format del email no és correcte");
        }
        if (!/^((familia)|(amics)|(feina))$/.test(categoria)) {
            throw new Error("El format de la categoria no és correcte");
        }
        this.#nom = nom;
        this.#telefon = telefon;
        this.#email = email;
        this.#categoria = categoria;
    }

    get nom(){
        return this.#nom;
    }
    get telefon(){
        return this.#telefon;
    }
    get email(){
        return this.#email;
    }
    get categoria(){
        return this.#categoria;
    }

    //Amb setters seria millor però no tinc temps
    modificar(nom:string, email:string, categoria:TCategoria){
        if (!/^[a-zA-z ]{2,30}$/.test(nom)) {
            throw new Error("El format del nom no és correcte");
        }
        if (!/^[\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("El format del email no és correcte");
        }

        if (!/^((familia)|(amics)|(feina))$/.test(categoria)) {
            throw new Error("El format de la categoria no és correcte");
        }

        this.#nom = nom;
        this.#email = email;
        this.#categoria = categoria;
    }

    toString():string{
        return "" + this.#nom + " · " + this.#telefon + " · " + this.#email + " (" + this.#categoria + ")";
    }

}