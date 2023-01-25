/**
 * @author ETOUMI Aristide
 * @description 
 */

//1-Get a random number between 1 and 100.
let inputNombre;

do {
    inputNombre = prompt("Entrez un nombre entre 0 et 100")
} while (inputNombre == null || isNaN(inputNombre) || parseFloat(inputNombre) < 0 || parseFloat(inputNombre) > 100);

//2-Console.log all even numbers from 0 to the random number.
let nombreConverti = Math.round(inputNombre);
let suiteNombre = "";
for (let i = 0; i <= inputNombre; i++) {
    (i == inputNombre) ? suiteNombre += i : suiteNombre += i+", ";
}

console.log(suiteNombre);