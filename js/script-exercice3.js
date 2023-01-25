/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExerciceXPNinja Is Palindrome?
 */

/*
1- Write a JavaScript function that checks whether a string is a palindrome or not.
Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, 
e.g., madam, bob or kayak. 
*/

function isPalindrome(word) {
    let wordSplit = word.split("");
    wordSplit = wordSplit.reverse();
    let newWord = "";
    for (let i = 0; i < wordSplit.length; i++) {
        newWord += wordSplit[i];
    }

    return word.toLowerCase() == newWord.toLowerCase();
}

//Test
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Monsieur"));
console.log(isPalindrome("bob"));
console.log(isPalindrome("kayak"));