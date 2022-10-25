// #1

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// setTimeout(()=>
// console.log(1)
// ,1000);
// console.log(2);
// console.log(3);

// setTimeout(()=>
//     console.log(0)
// ,0);

// setTimeout(()=>
//     console.log(1)
// ,1000);

// console.log(2);

// setTimeout(()=>
//     console.log(3)
// ,2000);

// console.log(4);


// let cnt = 0;

// setInterval(()=>{
// cnt++;
// let h1 = document.createElement("h1");
// document.body.appendChild(h1);
// h1.innerHTML = cnt;
// },2000);

// #2

// function Say(Name,text){
//     console.log(`Hello ${Name}`);
//     text();
// }

// function Text(){
//     console.log("how are you ")
// }
// Say("Shahrom",Text);


let num = 4;
let Prom = new Promise(function(resolve,reject){
    if(num %2==0){
        resolve("Even");
    }
    else{
        reject("Odd");
    }
});

console.log(Prom);
