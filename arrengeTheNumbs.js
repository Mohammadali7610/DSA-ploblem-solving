// step - 1 = creat a function arrangeTheNums with parameter arr
// step - 2 = consider a variable zeros with  value is 0
// step - 3 = Run a loop with i is equal to zero and i is less then arr.length and i++
// step - 4 = In the loop apply a if condition if arr[i] is equal to or type of '0' then consider a varaible temp is eqaul to arr [i] then apply  arr[i] is eqaul to arr[zero] then apply arr[zero] is eqaul to temp the then zero++
// step - 5 = return the arr.join('')
// step - 6 = change the string in array with apply .split('')
// step - 7 = call the function in consol.log with original 




function arrangeTheNums(arr) {
  let zero = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') {
      const temp = arr[i];
      arr[i] = arr[zero];
      arr[zero] = temp;
      zero++;
    }
  }

  return arr.join('');
}

const original = '111000111100011100'.split('');

console.log('Rearranged :', arrangeTheNums(original));
