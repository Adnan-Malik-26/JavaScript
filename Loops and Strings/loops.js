//For of and For in Loop
// let str = "AdnanMalik"
// let size = 0;
// for (let i of str){
//     console.log(i);
//     size++;
// }

// console.log(size);

let Student ={
    fullName : "Mohd Adnan Malik",
    age : 20,
    cgpa : 8.9,
    isPass : true 
}

for (let key in Student){
    console.log("key =",key,"Value =",Student[key]);
}