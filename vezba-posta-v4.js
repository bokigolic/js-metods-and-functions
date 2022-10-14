/*
ZADATAK na temu poste dostave paketa... VERZIJA 4
GIVEN: niz paketa za razne gradove
CILJ: te pakete treba razvrstati u 3 nizza za recimo severni region, jizni i centralnio region
SVRHA: je sto se ti paketi dalje salju u te centralne poste za ta tri regiona pa ce odatle biti dostavljene za kuce ili adrese
- svaki paket sadrzi grad koji napisao posiljaoc gdje treba da se dostavi.
- gradovi su podeljeni na rrgiona na sledeci nacin:
 -severni region: Novi Sad i Subotica
 -centralni: Beograd, Kragujevac
 -juzni: Nis i Leskovac

NOVA KOMPLIKACIJA za v2:
- adrese mogu biti i neispravno napisane ili nmoez biti upotrebljen grad kojeg nema na spisku regiona, i njih radnik treba da ubaci u poseban niz koji ce se zvati 'problematicni'
KORAK 2)
- posle svega, pametniji radnik (supervizor ili kontrolor) to sto je u basketu 'problmaticni' premesta u 'vratitiposiljaocu a ako nema adrese onda u ''izgubljenoNadjeno'.


NOVO ZA VERZIJA 4:
-nizpaketa sevise ne sastoji od niza gradova. Nego je svaki paketu  u stavri objekat koji sadrzi celu adresu. Grad je sada .grad od jednog paketa a treba dodati i properiti drzava i ulica koji ce takodje biti delovi adrese.
- ako drzva nije navedena u adresi, paket se isto tretira kao da je adresirano na drzava srbija
- paketi kod kojih drzava nije srbija se u prvom koraku razvrstavaju u poseban niz 'za inostranstvo' (dakle inostranstvo je kao poseban region...)
- za pojednostavljen iprimer od stranih drzava koristiti samo "italija", "kongo"


PODSETNIK ZA UBUDUCE VERZIJE: da ulica, grad, i  drzava budu u podobjektu primaoc, a da pored njega bude i podobjekat posiljaoc
*/

// niz sa adresama gradova kako su ih posiljaci adresirali

// ...ovo je GIVEN 
let paketi = [
  {
    ulica: "",
    grad: "beograd",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "aaaaa dfd fdf df",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "beograd",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "novi sad",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "novi sad",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "subotica",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "subotica",
    drzava: "srbija"
  },
  "temisvar",
  {
    ulica: "",
    grad: "nis",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "nis",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "kragujevac",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "kragujevac",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "leskovac",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "leskovac",
    drzava: "srbija"
  },
  {
    ulica: "",
    grad: "",
    drzava: "kongo"
  },
  {
    ulica: "",
    grad: "",
    drzava: "italija"
  },
  {
    ulica: "",
    grad: "",
    drzava: ""
  },
  {
    ulica: "",
    grad: "",
    drzava: ""
  },
  "temisvasssr",
  null,
  91651,
];

// isto je GIVEN i ovo
let gradoviOdRegionaSever = ["novi sad", "subotica"];
let gradoviOdRegionaCentar = ["beograd", "kragujevac"];
let gradoviOdRegionaJug = ["nis", "leskovac"];


// ovo surezulati za popunjavanje
let paketiZaJug = [];
let paketiZaCentar = [];
let paketiZaSever = [];
let paketiProblematicni = [];
let paketiZaVratitiPosiljaocu = [];
let paketiZaIzgubljenoNadjeno = [];
let paketiZaInostranstvo = [];

// zamiljamo radnik akoji ima radni zadata k da gleda  u adresu i svrstava u tri basket

let radnikPoste;

for (let i = 0; i < paketi.length; i++) {
  const paket = paketi[i];
  // najpre se proverava je li tio podataka u redu i format je li ispravan za adresu.
  let paketJeIspravan = false;
  if (paket && typeof paket.grad === 'string') {
    paketJeIspravan = true;
  }

  // korak
  // zatim imamo IF ako je ispravana format onda u idu ovi koraci razvrstavanja u regione, akoje neispravan format onda to takodje ide u problemticnipaketi...
  // CILJ ovog koraka je da se eliminisu neispravni paketi
  if (paketJeIspravan === true) {
    // ispravni paketi
    // provera drzave
    let drzava;
    if (typeof paket.drzava === 'string') {
      drzava = paket.drzava;
    } else {
      drzava = "srbija";
    }
    // sad znamo drzavu, sad ukliko drzava nije srbija odmah mozemo svrstati u niz za inostranstvo...
    if (drzava !== 'srbija') {
      paketiZaInostranstvo.push(paket)
    } else {
      // paketi za Srbiju
      // sad rzvrstvamo po regionima u srbiji
      const gradPrimaoca = paket.grad;
      if (gradoviOdRegionaSever.includes(gradPrimaoca)) {
        paketiZaSever.push(paket)
      } else if (gradoviOdRegionaCentar.includes(gradPrimaoca)) {
        paketiZaCentar.push(paket)
      } else if (gradoviOdRegionaJug.includes(gradPrimaoca)) {
        paketiZaJug.push(paket)
      } else {
        paketiProblematicni.push(paket)
      }
    }
  } else {
    // paketi sa problematicnom adresom
    paketiProblematicni.push(paket)
  }
}
console.log('paketiZaJug', paketiZaJug)
console.log('paketiZaCentar', paketiZaCentar)
console.log('paketiZaSever', paketiZaSever)
console.log('paketiProblematicni', paketiProblematicni)
console.log('paketiZaInostranstvo', paketiZaInostranstvo)

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

