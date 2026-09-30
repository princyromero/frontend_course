let arr=[1,2,3 ,"data", true]
    console.log(arr)

for (let a=0; a<arr.length; a++){
    console.log(arr[a]);
}

for(let a=arr.length-1; a>=0; a--){
    console.log(arr[a]);    
}



//array

let number = [1, 2, 3, 4, 5];
for (let a = 0; a < number.length; a++) {
    console.log(number[a]);
}

let language =["tamil", "English"];
for (let a=0; a<language.length; a++){
    console.log(language[a]);   
}

let score =[70,80,65,95];
for (let a=score.length-1; a>=0; a-- ){
    console.log(score[a]);    
}

let apps = ["Amazon", "Flipkart", "Meesho"];
for (let a = 0; a< apps.length; a++) {
    console.log(apps[a]);
}

let months =["march", "june", "september"];
for (let a=months.length-1; a>=0; a-- ){
    console.log(months[a]);    
}

let price = [500, 100, 200, 300];
for (let a=0; a< price.length; a++) {
    console.log(price[a]);
}

let websites =["google", "chrome", "gmail"];
for (let a=0; a< websites.length; a++){
    console.log(websites[a]);    
}

let Skills =["html", "Css", "Js"];
for (let a=0; a< Skills.length; a++){
    console.log(Skills[a]);    
}

let color = ["black", "white", "purple"];
for (let a=0; a < color.length; a++) {
    console.log(color[a]);
}

let amount =[1000,600,700];
for (let a=amount.length-1; a>=0; a-- ){
    console.log(amount[a]);
}

let city = ["chennai", "bengaluru", "mumbai"];
for (let a=0; a< city.length; a++ ){
    console.log(city[a]);   
}

let brands = ["nike", "rolex", "zara"];
for (let a=0; a< brands.length; a++){
    console.log(brands[a]);   
}

let value = ["true", "false"];
for (let a=0; a< value.length; a++){
    console.log(value[a]);   
}

let course = ["fullstack","frontend","backend"];
for(let a=0; a< course.length; a++){
    console.log(course[a]);    
}

let mobile =["sumsung", "moto", "oppo"];
for(let a=0; a< mobile.length; a++){
    console.log(mobile[a]);    
}

let company =["sony", "adidas", "toyota"];
for(let a=0; a< company.length; a++){
    console.log(company[a]);    
}

let name =["hari", "priya", "helan"];
for(let a=0; a< name.length; a++){
    console.log(name[a]);    
}

let season =["summer", "winter", "rainy"];
for(let a=0; a< name.length; a++){
    console.log(name[a]);    
}


//object

let products = [{ name: "Laptop" }];

for (let a = 0; a < products.length; a++) {
    console.log(products[a].name);
}


let employees = [{ name: "Ravi", salary: 25000 }];

for (let a = 0; a < employees.length; a++) {
    console.log(employees[a].name);
    console.log(employees[a].salary);
}


let students = [{ name: "Arun", mark: 80 },{ name: "Kumar", mark: 70 }];
let count = 0;

for (let a = 0; a < students.length; a++) {
    if (students[a].mark >= 40) {
        count++;
    }
}
console.log(count);


