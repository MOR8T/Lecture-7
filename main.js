// #1

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

setTimeout(()=>
    console.log(0)
,0);

setTimeout(()=>
    console.log(1)
,1000);

console.log(2);

setTimeout(()=>
    console.log(3)
,2000);

console.log(4);

