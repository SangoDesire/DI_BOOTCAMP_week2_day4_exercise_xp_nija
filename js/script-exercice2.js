/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExerciceXPNinja Capitalized Letters
 */

/*1- Create a function that takes a string as an argument.
  2- Have the function return:
     The string but all letters in even indexes should be capitalized.
     The string but all letters in odd indexes should be capitalized.
 */
function capitalize(word) {
    let retour = [];
    let newValuePair = "";
    let newValueImpair = "";
    for (let i = 0; i < word.length; i++) {
        if (i % 2 == 0) {
            newValuePair += ("" + word.charAt(i)).toUpperCase().trim();
            newValueImpair += ("" + word.charAt(i)).toLowerCase().trim();
        } else {
            newValuePair += ("" + word.charAt(i)).toLowerCase().trim();
            newValueImpair += ("" + word.charAt(i)).toUpperCase().trim();
        }
    }

    retour[0] = newValuePair;
    retour[1] = newValueImpair;

    console.log(retour);
}

function main() {
    let input;
    do {
        input = prompt("Entrez un mot svp!");
    } while (input == null || !isNaN(input) || input.trim().search(" ") != -1);

    capitalize(input.toLowerCase());
}

main();