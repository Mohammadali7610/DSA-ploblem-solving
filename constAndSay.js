let countAndSay = function(n) {
    if(n === 1) return '1';
    if (n > 1){
    let s = countAndSay(n-1)
    let count = 0
    let s1 = ''
    for(let i=0; i<s.length; i++){
        count++
        if(s[i] != s[i+1]){
            console.log(s1)
            s1 =s1 + count + s[i]
            count = 0
        }
    }
    
    return s1
}
};

// console.log(countAndSay(1))
// console.log(countAndSay(2))
// console.log(countAndSay(3))
// console.log(countAndSay(4))
// console.log(countAndSay(5))
console.log(countAndSay(6))