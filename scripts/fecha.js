const creationYear = document.querySelector(".year");
//console.log(creationYear);
const fechas = new Date();
let currentYear = fechas.getFullYear();
creationYear.textContent = currentYear;