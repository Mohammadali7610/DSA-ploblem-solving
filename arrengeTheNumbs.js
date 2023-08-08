// step - 1 = creat a function arrangeTheNums with parameter arr
// step - 2 = consider a variable zeros with empty string
// step - 3 = consider a another variable ones with empty string
// step - 4 = Run a loop with i is equal to zero and i is less then arr.length and i++
// step - 5 = In the loop apply a if condition if arr[i] is equal to or type of '0' then store the 0 in the zeros variable and adding another 0
// step - 6 = Also apply a else if condition and esle if arr[i] is equal to or type of '1' then store the 0 in the ones variable and adding another 1
// step - 7 = return the function
// step - 8 = call the function in consol.log with original 


const original = '111000111100011100';

function arrangeTheNums(arr) {
    let zeros = '';
    let ones = '';
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '0') {
        zeros += '0';
      } else if (arr[i] === '1') {
        ones += '1';
      }
    }
  
    return zeros + ones;
  }
  
  
  console.log('Original Binary:', original);
  console.log('Rearranged Binary:', arrangeTheNums(original) );