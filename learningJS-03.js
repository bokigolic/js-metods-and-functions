// Write a js program to crate a new string, takong the first 3 char and last 3 char and adding them together

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3)


console.log(makeNewString('boki'))
console.log(makeNewString('bokideveloper'))
//bokoki
// bokper

// seecond way

const newString = ["boki", "bokideveloper", "bo"]
let slicedStr = "";
for (i = 0; i < newString.length; i++) {
  const rec = newString[i]
  if (rec.length < 3) {
    slicedStr += rec
  } else {
    const prvaTriSlova = rec.slice(0, 3)
    const zadnjaTriSlova = rec.slice(-3)
    slicedStr += prvaTriSlova + " " + zadnjaTriSlova + ' - ';
  }
}
console.log(slicedStr)


