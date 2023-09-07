//Solution for Q1

// let str="abcadeecfb";
let Ans=" ";
let Arr=str.split('');
let unique_arr=new Set(Arr);
for(let a of unique_arr){
    Ans +=a;
}
console.log(Ans);

//Solution for Q2

// let str="abcadeecfb"
let ans = new Map();
for (let char of str) {
    if (ans.has(char)) {
       ans.set(char, ans.get(char)+1)
    } else {
        ans.set(char, 1);
    }
}
for(let [key, value] of ans){
    console.log(`${key}=${value}`);  
}



