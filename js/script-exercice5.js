/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExerciceXPNinja | Unique Elements
 */

//Write a JS function that takes an array and returns a new array with only unique elements.

function uniqueElements(data) {
    let uniqueData = [data[0]]; //On sauvegarde le 1er élément de la liste
    
    for (let i = 1; i < data.length; i++) {
        if (!isExist(data[i], uniqueData)) uniqueData.push(data[i]);
    }

    return uniqueData;
}

/**
 * Vérifie si dataToCheick existe dans dataArray
 * @param dataToCheick 
 * @param dataArray 
 * @returns true si l'élément existe dans la liste et false sinon
 */
function isExist(dataToCheick, dataArray) {
    for (const data of dataArray) {
        if (dataToCheick == data) {
            return true;
        }
    }
    return false;
}

//Test
console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));
console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));