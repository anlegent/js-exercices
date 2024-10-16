//// ex 1
let promptNation = prompt("Nationality?");
let promptAge = prompt("Age?");

if (promptNation == "French") {
  console.log("Nationalité valide.");
} else {
  console.log("Nationalité non valide.");
}

if (promptAge >= 18) {
  console.log("Age valide.");
} else {
  console.log("Age non valide.");
}

// ex 2
let promptAgePrix = prompt("Age?");
console.log(promptAgePrix);

if (promptAgePrix <= 5) {
  console.log("Gratuit");
} else if (promptAgePrix <= 17) {
  console.log("Réduit");
} else if (promptAgePrix >= 18) {
  console.log("Plein tarif");
}
