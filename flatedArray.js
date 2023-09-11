// arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6, 7, 8, 9],
//     [10, 11, 12, 13, 14, 15]
// ];

// const flatArr = [];

// for (i = 0; i < arr.length; i++) {
//   const subArr = arr[i];
//   for (const item of subArr) {
//     flatArr.push(item);
//   }
// }

// console.log("flated arr", flatArr)



// let arr = [1,2,3,4, [1,2], [3,4, [3,4]] , 5];

// let flatArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     flatArr.push(...arr[i]);
//   } else {
//     flatArr.push(arr[i]);
//   }
// }

// console.log(flatArr);

// let arr = [1,2,3,4, [1,2], [3,4, [3,4]] , 5];

// let flatArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     // flatArr.push(arr[i]);
//     console.log("flated arr ",flatArr)
//   } else {
//     flatArr.push(arr[i]);
//   }
// }

// console.log(typeoff, flatArr);


const arr = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5];

function flattenArray(arr) {
    let flattened = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const nestedFlattened = flattenArray(arr[i]);
        flattened = flattened.concat(nestedFlattened);
      } else {
        flattened.push(arr[i]);
      }
    }
  
    return flattened;
  }
  
  console.log(flattenArray(arr));