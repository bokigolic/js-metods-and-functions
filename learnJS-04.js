/*1. Print all even numbers from 0 – 10

Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.*/

let parniBrojeviRecenica = "";
let neparniBrojeviRecenica = "";
let nizParnih = [];
let nizNeparnih = [];
for (i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    // ak oje paran
    const parniBroj = i;
    parniBrojeviRecenica += parniBroj + " ";
    nizParnih.push(parniBroj)
    console.log(parniBroj + "parni")
  } else {
    // ako je nepran
    const neparaniBroj = i
    neparniBrojeviRecenica += neparaniBroj + " ";
    nizNeparnih.push(neparaniBroj)
    console.log(neparaniBroj + 'neparni')


  }
}

console.log(parniBrojeviRecenica)
console.log(neparniBrojeviRecenica)
console.log(nizParnih)
console.log(nizNeparnih)

const poduplaniParni = nizParnih.map((broj) => {
  return broj * 2;
})
console.log(poduplaniParni);

const utrostruceniNeparni = nizNeparnih.map((broj) => {
  return broj * 3
})
console.log(utrostruceniNeparni);



const izracunajMasovnuStarost = (nizGodinaRodjenja) => {
  const nizStarosti = nizGodinaRodjenja.map((godinaRodjenja) => {
    const starost = 2022 - godinaRodjenja
    return starost
  })
  console.log(nizStarosti);
}
// tetsiranje
izracunajMasovnuStarost([1945, 1990, 2002, 2012, 2015, 1986])








// JAVASCRIPT SCOPE

let a = 1;
let b = 2;
{
  let b = 3
  b = 4
  console.log(b) // 4
  console.log(a) // 1

  {
    let a = 7
    console.log(a) // 7
  }
  console.log(a) // 1
}
console.log(b) // 2



// zadatak duzina imena
const imena = ["aco", "marko", 'petar']
const nizDuzinaImena = imena.map((ime) => {
  duzinaImena = ime.length;
  return duzinaImena
})
console.log(nizDuzinaImena)


// zadatak masovno izracunati porez na snovu plata
// ako je plata veca od 5000 dolara porez je 50% ako je manje onda je porez 10%

const nizPlata = [3000, 3580, 5820, 7593]
const nizPoreza = nizPlata.map((plata) => {
  if (plata > 5000) {
    let porez = plata * 0.5
    return porez
  } else {
    let porez = plata * 0.1
    return porez
  }
})
console.log(nizPoreza)


// zadatak masovno izracunati vkliki je visak.kose ako vojnicka frizura treba mbiti maksimalno 20mm.

const nizDuzinaKose = [0, 50, 25, 35, 37, 55, 200, 563]
const NizViskovaKose = nizDuzinaKose.map((duzina) => {
  let visak = 0;
  if ((duzina - 20) > 0) {
    visak = duzina - 20
  }
  return visak
})
console.log(NizViskovaKose)


// zadatak masovno izracunaj iznos nagrade za svakog ko ubere preko 100 kg jabuka. Nagrada je 2 $ za svaku kilu koj apredje preko 100 kg

const nizKolicinaUbranihJabuka = [90, 101, 13, 120, 80, 116];
const nizNagrada = nizKolicinaUbranihJabuka.map((kolicina) => {
  let nagrada = 0;
  if (kolicina > 100) {
    nagrada = (kolicina - 100) * 2
  }
  return nagrada
})
console.log(nizNagrada)



