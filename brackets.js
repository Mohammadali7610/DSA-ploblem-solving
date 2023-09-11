//step 1- consider a variable isvalid as an arrow function that parameter s
//step 2- cerat a object thats maps each opening brackets to its corresponding closing bracket
//step 3- consider a variable stack to with empty array for traking at the position of the pair of brackests
//step 4- run a for loop with i = 0 and i less then brackets.length and i++
//step 5- consider a variable to store brackets[i]
//step 6- apply a condition if input is eqaul to type of "(" or "{"or "[" then it will be push in the stack
//step 7- In the else condition we apply if condition 









// const isValid = function(brackets) {
//   const store = {
//     '(': ')',
//     '{': '}',
//     '[': ']'
//   };
//    const splitedarr = brackets.split("")
//    const [firstElem] = splitedarr
  
//     if (
//     typeof input !== "string" ||
//     !input ||
//     input.length % 2 !== 0 ||
//     !["{", "(", "["].includes(firstElem)
//   ) {
//     return false;
//   }

//   const stack = [];

//   for (let i = 0; i < brackets.length; i++) {
//     const input = brackets[i];

//     if (input === '(' || input === '{' || input === '[') {
//       stack.push(input);
//     } else {
//       if (stack.length === 0 || store[stack.pop()] !== input) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isValid(""));






// const validParanthesis = (input) => {
//   const splittedArr = input.split("");

//   const [firstElem] = splittedArr;

//   if (
//     typeof input !== "string" ||
//     !input ||
//     input.length % 2 !== 0 ||
//     !["{", "(", "["].includes(firstElem)
//   ) {
//     return false;
//   }

//   const stackArr = [];

//   for (let i = 0; i < splittedArr.length; i++) {
//     const currentElem = splittedArr[i]; // ")"
//     const recentlyAddedStackElem = stackArr[stackArr.length - 1]; // (

//     // Check for {}
//     if (recentlyAddedStackElem === "{" && currentElem === "}") {
//       stackArr.pop();
//       continue;
//     }

//     // Check for []
//     if (recentlyAddedStackElem === "[" && currentElem === "]") {
//       stackArr.pop();
//       continue;
//     }

//     // Check for ()
//     if (recentlyAddedStackElem === "(" && currentElem === ")") {
//       stackArr.pop();
//       continue;
//     }

//     stackArr.push(currentElem); // []

//     // Handle false case
//   }
//   return stackArr.length === 0;
// };

// console.log(validParanthesis("([}}])"));








// const validParanthesis = (input) => {
//   const splittedArr = input.split("");

//   const [firstElem] = splittedArr;

//   if (
//     typeof input !== "string" ||
//     !input ||
//     input.length % 2 !== 0 ||
//     !["{", "(", "["].includes(firstElem)
//     // !["{", "(", "["].includes(splittedArr[0])
//   ) {
//     return false;
//   }

//   const stackArr = [];

//   for (let i = 0; i < splittedArr.length; i++) {
//     const currentElem = splittedArr[i]; // ")"
//     const recentlyPushedStackElem = stackArr[stackArr.length - 1]; // ]

//     // Check for {}
//     if (recentlyPushedStackElem === "{" && currentElem === "}") {
//       stackArr.pop();
//       continue;
//     }

//     // Check for []
//     if (recentlyPushedStackElem === "[" && currentElem === "]") {
//       stackArr.pop();
//       continue;
//     }

//     // Check for ()
//     if (recentlyPushedStackElem === "(" && currentElem === ")") {
//       stackArr.pop();
//       continue;
//     }

//     stackArr.push(currentElem); // ([}}])

//     // Handle false case
//   }
//   return stackArr.length === 0;
// };






const validParanthesisV2 = (input) => {
  const splittedArr = input.split("");

  const [firstElem] = splittedArr;

  const pairsMapping = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  if (
    typeof input !== "string" ||
    !input ||
    input.length % 2 !== 0 ||
    !pairsMapping.hasOwnProperty(firstElem)
  ) {
    return false;
  }

  const stackArr = [];

  for (let i = 0; i < splittedArr.length; i++) {
    const currentElem = splittedArr[i]; // ")"
    const recentlyPushedStackElem = stackArr[stackArr.length - 1]; // ]


    if (pairsMapping[recentlyPushedStackElem] === currentElem) {
      stackArr.pop();
      continue;
    }

    stackArr.push(currentElem);
  }
  return stackArr.length === 0;
};

console.log(validParanthesisV2("([][])"));
