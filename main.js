const prestaciones = [
 {
  id: "laboratorio",
  imagen: "./img/laboratorio.svg",
  nombre: "Laboratorio",
  precio: 5000,
  categoria: "Análisis clínicos",
 },
 {
  id: "radiologia",
  imagen: "./img/radiologia.svg",
  nombre: "Radiología",
  precio: 3500,
  categoria: "Diagnostico por imágenes",
 },
 {
  id: "glucometria",
  imagen: "./img/glucometria.svg",
  nombre: "Glucometría",
  precio: 1500,
  categoria: "Análisis clínicos",
 },
 {
  id: "electrocardiograma",
  imagen: "./img/ecg.svg",
  nombre: "Electrocardiograma",
  precio: 4000,
  categoria: "Pruebas cardiológicas",
 },
 {
  id: "kinesiología",
  imagen: "./img/kinesiologia.svg",
  nombre: "Kinesiología",
  precio: 5000,
  categoria: "Visita especialidad",
 },
 {
  id: "visita",
  imagen: "./img/visita-medica.svg",
  nombre: "Visita médica",
  precio: 5000,
  categoria: "Visita especialidad",
 },
 {
  id: "medicacion",
  imagen: "./img/inyectable.svg",
  nombre: "Administración de Medicación",
  precio: 3000,
  categoria: "Servicios farmacéuticos",
 },
];

const prestacionTemplate = document.getElementById("template-prestacion");
console.log(prestacionTemplate);

for (let i = 0; i < prestaciones.length; i++) {
 const clone = prestacionTemplate.content.cloneNode(true);
 clone.querySelector(".prestacion-imagen").src = prestaciones[i].imagen;
 clone.querySelector(".nombre-prestacion").textContent = prestaciones[i].nombre;
 clone.querySelector(
  ".precio-prestacion"
 ).textContent = `Precio: $ ${prestaciones[i].precio}`;
 document.querySelector(".prestaciones-container").appendChild(clone);
}

function toggleMenu() {
 let menu = document.querySelector(".nav-list");
 menu.classList.toggle("hidden-tablet");
}

const navListItems = document.querySelectorAll(".nav-list a");
for (let i = 0; i < navListItems.length; i++) {
 navListItems[i].onclick = toggleMenu;
}
