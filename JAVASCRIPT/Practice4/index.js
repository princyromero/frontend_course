let a=0
let b=1
console.log(a);
console.log(b);
let string=""
for (let x=0; x<=10; x++){
    let c=a+b
    console.log(c);
    
    a=b
    b=c
    string+= c+ " "   
}
console.log(string);

let left =0
let right =1
for(let a=0 ; a<=5; a++){
    let point = left+right
    console.log('point', point);
    left = right
    console.log('left', right);
    right = point
    console.log('right', right);
       
}


