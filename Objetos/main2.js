// Ejercicio N°11

const alumno = {
    nombre: "Mauricio",
    apellido: "Echaniz",
    edad: 27,
    estudia: false,
    estatura: 1.85
}

console.table(alumno)
console.log(alumno.apellido)
console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.estudia)
console.log(alumno.estatura)

//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°12

const mascota = {
    nombre: "Otto",
    raza: "Shih Tzu",
    edad: 4,
    comió: true,
    color: "blanco y negro"
}

console.table(mascota)
console.log(mascota.raza)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.comió)
console.log(mascota.color)


//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°13

let frutas = ["manzana", "pera", "banana", "kiwi", "naranja"];

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])


//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°14

let numeros = [0,1,2,3,4];

console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])


//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°15

const familia = [
{nombre: "Mauricio", apellido: "Echaniz", edad: 27, estudia: false, estatura: 1.85},
{nombre: "Florencia", apellido: "Echaniz",edad: 25,estudia: true,estatura: 1.70},
{nombre: "Gabriel", apellido: "Echaniz", edad: 52, estudia: false, estatura: 1.74},
{nombre: "Elisa", apellido: "Gomez", edad: 57, estudia: false, estatura: 1.68},
{nombre: "Yolanda", apellido: "Begue", edad: 74, estudia: false, estatura: 1.65}
]

console.log(familia);
console.table(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])


//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°16

let textoAleatorio = `${frutas[1]} ${numeros[3]} ${familia[4]}`

console.log(textoAleatorio)


//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°17

// let miEdad = prompt("Ingrese su edad");
// let edadCompañero = prompt ("Ingrese la edad de su compañero")
// console.log(miEdad);
// console.log(edadCompañero);

// if (miEdad > edadCompañero) {
//     let SoyMayor = `mi edad es mayor a la de mi compañero: true`
//     console.log(SoyMayor)
// } else if(edadCompañero > miEdad) {
//     let SoyMenor =  `mi edad es menor a la de mi compñero: true`
//     console.log(SoyMenor)
// } else {
//     let edadesIguales = `tienen la misma edad: true`
//     console.log(edadesIguales)
// }



//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°18

let soyMayorDeEdad = miEdad >= 18;

let mensaje = `soy mayor de edad ${soyMayorDeEdad}`

console.log(mensaje)



//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°19

let edadPersonaX = prompt("ingrese su edad");
let estaturaPersonaX = prompt("ingrese su estatura");

console.log(edadPersonaX);
console.log(estaturaPersonaX)

let puedeSubir;

if (edadPersonaX > 6 && estaturaPersonaX >= 120){
    puedeSubir = true;
} else {
    puedeSubir = false;
}

console.log(`puede subir a la atracción ${puedeSubir}`)



//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°20

let pase = prompt("ingrese su pase")
let saldo = prompt("ingrese su saldo")

let puedePasar

if (pase == vip || saldo > 1000) {
    puedePasar = true;
} else{
    puedePasar = false;
}

console.log(`la persona puede pasar ${puedePasar}`)
