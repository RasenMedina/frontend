// Comprova si el text conté només lletres sense accents.
export function nomesLletres(text: string): boolean {
    return /^[a-zA-Z]+$/.test(text);
}

// Comprova si el text conté lletres, accents i espais.
export function validarNom(nom: string): boolean {
    return /^[a-zA-ZÀ-ÿ\s'-]+$/.test(nom);
}

// Comprova si hi ha exactament nou dígits.
export function validarTelefon(telefon: string): boolean {
    return /^\d{9}$/.test(telefon);
}

// Comprova el format bàsic d'un correu electrònic.
export function validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Comprova el format de cinc dígits d'un codi postal.
export function validarCodiPostal(codi: string): boolean {
    return /^\d{5}$/.test(codi);
}

// Comprova un DNI espanyol amb vuit dígits i una lletra.
export function validarFormatDNI(dni: string): boolean {
    return /^\d{8}[A-Za-z]$/.test(dni);
}

// Comprova si un text conté algun dígit.
export function conteNumeros(text: string): boolean {
    return /\d/.test(text);
}

// Comprova si un text conté espais.
export function conteEspais(text: string): boolean {
    return /\s/.test(text);
}

// Substitueix tots els espais consecutius per un únic espai.
export function normalitzarEspais(text: string): string {
    return text.replace(/\s+/g, " ").trim();
}

// Elimina els caràcters que no siguin lletres ni números.
export function netejarText(text: string): string {
    return text.replace(/[^a-zA-Z0-9À-ÿ]/g, "");
}

// Extreu tots els grups de dígits d'un text.
export function extreureNumeros(text: string): string[] {
    return text.match(/\d+/g) ?? [];
}

/*
Mini xuleta de RegExp
Símbol	Significat
^	Inici del text
$	Final del text
.	Qualsevol caràcter excepte salt de línia habitualment
\d	Dígit
\w	Lletra ASCII, dígit o _
\s	Espai en blanc
[abc]	Un dels caràcters indicats
[^abc]	Un caràcter que no sigui dels indicats
+	Una o més repeticions
*	Zero o més repeticions
?	Zero o una repetició
{3}	Exactament tres
{2,5}	Entre dues i cinc
i	Ignora majúscules/minúscules
g	Cerca global
Exemple:
/^\d{4}$/


Significa: el text complet ha de tenir exactament quatre dígits.
La validació de DNI anterior només comprova el format, no que la lletra de control sigui correcta.
*/