/*
ZADATAK na temu poste dostave paketa...
GIVEN: niz paketa za razne gradove
CILJ: te pakete treba razvrstati u 3 nizza za recimo severni region, jizni i centralnio region
SVRHA: je sto se ti paketi dalje salju u te centralne poste za ta tri regiona pa ce odatle biti dostavljene za kuce ili adrese
- svaki paket sadrzi grad koji napisao posiljaoc gdje treba da se dostavi.
- gradivi su podeljeni na rrgiona na sledeci nacin:
 -severni region: Novi Sad i Subotica
 -centralni: Beograd, Kragujevac
 -juzni: Nis i Leskovac



*/

// niz sa adresama gradova kako su ih posiljaci adresirali

// ...ovo je GIVEN 
let paketi = [
  "beograd",
  "novi sad",
  "kragujevac",
  "beograd",
  "novi sad",
  "nis",
  "beograd",
  "leskovac",
  "kragujevac",
  "leskovac",
  "nis",
  "subotica",
  "leskovac",
  "subotica",
  "kragujevac",
  "subotica",
  "leskovac",
];
// isto je GIVEN i ovo
let gradoviOdRegionaSever = ["novi sad", "subotica"];
let gradoviOdRegionaCentar = ["beograd", " kragujevac"];
let gradoviOdRegionaJug = ["nis", "leskovac"];


// ovo surezulati za popunjavanje
let paketiZaJug = [];
let paketiZaCentar = [];
let paketiZaSever = [];

// zamiljamo radnik akoji ima radni zadata k da gleda  u adresu i svrstava u tri basket

let radnikPoste;

for (let i = 0; i < paketi.length; i++) {
  const paket = paketi[i];
  if (paket === "novi sad" || paket === "subotica") {
    paketiZaSever.push(paket)
  } else if (paket === "beograd" || paket === "kragujevac") {
    paketiZaCentar.push(paket)
  } else if (paket === "nis" || paket === "leskovac") {
    paketiZaJug.push(paket)
  }
}
console.log('paketiZaJug', paketiZaJug)
console.log('paketiZaCentar', paketiZaCentar)
console.log('paketiZaSever', paketiZaSever)



