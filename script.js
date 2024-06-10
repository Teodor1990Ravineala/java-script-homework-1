// console.log("teodor");

// const name = "teodor" ;

// console.log(name)

// --------------------------------------

// let age = 20;
// age = 21;

// console.log(age+3)

// --------------------------------------

// let age = "Age is 30";
// console.log(age)

// ---------------------------------------

// alert("Salut");

// ---------------------------------------


// const userAge = prompt("Citi ani ai?", 16);

// console.log(userAge);

// // typeof - verifica greselie 
// console.log(typeof userAge);

// ---------------------------------------

// concordenatia - uneste componentele intre ele
// interpoliatia - uneste componentele intre ele

// ---------------------------------------

// concordenatia le uneste :

// const category = "tpys";

// console.log("www.baby.com" +category);

// console.log("20"+3);

// // ---------------------------------------

// // interpoliatia 
// console.log(`www.ion.com ${category} ${category}`);


// const r = 121 ;
// const g = 30 ;
// const b = 100 ;

// console.log("rgb("+r+","+g+","+b+")");
// console.log(`rgb(${r},${g},${b})`);

// ---------------------------------------

// ca sa se adune cifrele trebuie sa punem "+"
// inainte de nume sau cifra :

// console.log(+"20" +3);

// ---------------------------------------

// NaN = arata ca nu este numar 
// isNan = functia care verifica

// boolean = > true / false 
// exemple:
// console.log(isNaN("Teodor")); = trye
// console.log(isNaN("7")); = false
// ---------------------------------------

// const number= prompt("Citi ani ai ?");

// console.log(number * 365);

// ---------------------------------------

// const number = prompt("Numar");

// console.log(number**2);

// ---------------------------------------


// ---------------------------------------

// const num1 =+prompt("Primul Numar ?");
// const num2 =+prompt("Numarul doi?");

// if(num1 > num2) {
//     console.log("Primul este mai mare ca al dolea");
// }

// else if (num2 > num1) {
//     console.log("Al dolea este mai mare ce primul");
// }
// else {
//     console.log("Ambele sunt egale");
// }
// ---------------------------------------

// let hello = 'Buna ziua!';
// let mesage = hello ;
// alert(hello);
// alert(mesage);
// ---------------------------------------

// let num1 = prompt`Numarul unu`;
// let num2 = prompt `Numarul doi`;

// let sum = + num1 + + num2 ;
// alert(sum);
//// alert(+num1 + +num2); 

//sau

// console.log(+num1 + +num2); 
// ---------------------------------------

// let name = "Tudor";
// alert(`Salut${name}!`);

// ---------------------------------------


// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // ?

// ---------------------------------------

// const num1 =+prompt("Primul Numar ?");
// const num2 =+prompt("Numarul doi?");

// if(num1 > num2) {
//     console.log("Primul este mai mare ca al dolea");
// }

// else if (num2 > num1) {
//     console.log("Al dolea este mai mare ce primul");
// }
// else {
//     console.log("Ambele sunt egale");
// }

//--------------------------------------------------


//---------------------------------------------



// const r =232;
// const g =324;
// const b =234;
// console.log(`rgb(${r},${g},${b})`);
//------------------------------------------

// const num1 =prompt("citi ani ai ?",3);
// console.log (num1 *365);

//-----------------------------------------


// const num1 =+ prompt`Numarul unu `;
// const num2 =+ prompt`numarul doi`;

// console.log(num1+num2);
//==============================================
  // console.log(isNaN("Teodor")); = trye
// console.log(isNaN("7")); = false  

//-----------------------------------------------------

//               HOME WORK 1

//Nr:1


const num1 =+prompt("introduceti numarul:");

if (num1===0) {
    console.log ("este egal cu zero");
} 
else if (num1 % 2 ===0) {
    console.log("numarul este par");
}
else{
    console.log("numarul este impar");
}

//-------------------------------------------------------

//Nr:2
const number =+prompt("number?");

if(isNaN (number)) {
    console.log(`${number}= Это значение преобразовать в число не получится` );

} else {
    console.log(`${number}= Это значение можно преобразовать в число`);
}



