// step 1 = creat a function with two parameter array 1 and array 2
// step 2 = consider a variable "mergeValues" in this variable we can put both array in the array
// step 3 = consider another variable "flateArray" in this variable we flated the mergeValues
// step 4 = consider anohter variable "uniqueValue" with empty object for track the flateArray
// step 5 = run a for loop for through the flateArray and its element in the uniqueValue
// step 6 = consider a another variable "unionArray" in this variable  convert the uniquevalue object to array 
// step 7 = return the unionArray




const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];


const unionValue = (array1,array2) =>{
    let mergeValues = [array1,array2];
    let flateArray = mergeValues.flat();
    const uniqueValue = {}
    for (const element of flateArray) {
        uniqueValue[element] = true;
    }
    const unionArray = Object.keys(uniqueValue).map(Number);
    return unionArray
}

console.log(unionValue(inputA,inputB))