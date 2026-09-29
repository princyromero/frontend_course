for(let count=0; count<=100; count++){
    console.log(count);
}

for(let reverse=100; reverse>=0; reverse--){
    console.log(reverse);
}

for(let even=1; even<=100; even++){
    if(even %2 ==1){
        console.log("evennumber",even);
    }
}

for(let odd=1; odd<=100; odd++){
    if(odd %2 ==1){
        console.log("oddnumber",odd);
    }
}

let line =" "
for (let score =1; score<=100; score++){
    line +=score +""
}
console.log(line);
