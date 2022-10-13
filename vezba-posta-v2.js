/*
ZADATAK na temu poste dostave paketa... VERZIJA 2
GIVEN: niz paketa za razne gradove
CILJ: te pakete treba razvrstati u 3 nizza za recimo severni region, jizni i centralnio region
SVRHA: je sto se ti paketi dalje salju u te centralne poste za ta tri regiona pa ce odatle biti dostavljene za kuce ili adrese
- svaki paket sadrzi grad koji napisao posiljaoc gdje treba da se dostavi.
- gradovi su podeljeni na rrgiona na sledeci nacin:
 -severni region: Novi Sad i Subotica
 -centralni: Beograd, Kragujevac
 -juzni: Nis i Leskovac

NOVA KOMPLIKACIJA:
- adrese mogu biti i neispravno napisane ili nmoez biti upotrebljen grad kojeg nema na spisku regiona, i njih radnik treba da ubaci u poseban niz koji ce se zvati 'problematicni'

KORAK 2)
- posle svega, pametniji radnik (supervizor ili kontrolor) to sto je u basketu 'problmaticni' premesta u 'vratitiposiljaocu a ako nema adrese onda u ''izgubljenoNadjeno'.


*/

// niz sa adresama gradova kako su ih posiljaci adresirali

// ...ovo je GIVEN 
let paketi = [
  "beograd",
  "novi sad",
  "kragujevac",
  "temisvar",
  "beograd",
  "novi sad",
  "nis",
  "temisvar",
  "beograd",
  null,
  "leskovac",
  "kragujevac",
  "leskovac",
  "nis",
  "subotica",
  "leskovac",
  91651,
  "subotica",
  "niis",
  "temisvar",
  "kragujevac",
  "subotica",
  "niis",
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
let paketiProblematicni = [];
let paketiZaVratitiPosiljaocu = [];
let paketiZaIzgubljenoNadjeno = [];

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
  } else {
    paketiProblematicni.push(paket)
  }
}
console.log('paketiZaJug', paketiZaJug)
console.log('paketiZaCentar', paketiZaCentar)
console.log('paketiZaSever', paketiZaSever)
console.log('paketiProblematicni', paketiProblematicni)

// KORAK 2)

for (let i = 0; i < paketiProblematicni.length; i++) {
  const paket = paketiProblematicni[i];
  if (typeof paket === 'string') {
    // ako je adresa string znaci IMA ADRESU
    paketiZaVratitiPosiljaocu.push(paket)
  } else {
    // ako nema adresu
    paketiZaIzgubljenoNadjeno.push(paket)
  }
}
console.log('paketiZaVratitiPosiljaocu', paketiZaVratitiPosiljaocu)
console.log('paketiZaIzgubljenoNadjeno', paketiZaIzgubljenoNadjeno)

