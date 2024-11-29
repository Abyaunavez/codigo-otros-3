const productos = [ // Array de objetos de productos
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const li = document.getElementById("lista-de-productos"); // Selecciona el contenedor de la lista de productos por su ID. CORREGIDO: Cambio de getElementsByName a getElementById.
const $i = document.querySelector('input'); // Selecciona el campo de texto por su etiqueta. CORRECTO

for (let i = 0; i < productos.length; i++) { // Itera sobre el array de productos.
  var d = document.createElement("div"); // Crea un div para el producto.
  d.classList.add("producto"); // Añade la clase 'producto' al div.

  var ti = document.createElement("p"); // Crea un párrafo para el título del producto.
  ti.classList.add("titulo"); // Añade la clase 'titulo' al párrafo.
  ti.textContent = productos[i].nombre; // Establece el texto del párrafo como el nombre del producto.
  
  var imagen = document.createElement("img"); // Crea una imagen para el producto.
  imagen.setAttribute('src', productos[i].img); // Establece el atributo src de la imagen.

  d.appendChild(ti); // Añade el título al div del producto.
  d.appendChild(imagen); // Añade la imagen al div del producto.

  li.appendChild(d); // Añade el div del producto a la lista de productos.
}

const botonDeFiltro = document.querySelector("button"); // Selecciona el botón de filtro. CORRECTO

botonDeFiltro.onclick = function() { // Añade un evento onclick al botón de filtro.
  while (li.firstChild) { // Mientras haya elementos hijos en la lista de productos...
    li.removeChild(li.firstChild); // ...elimínalos.
  }

  const texto = $i.value; // Obtiene el valor del campo de texto.
  console.log(texto); // Muestra el texto en la consola. CORRECTO
  const productosFiltrados = filtrado(productos, texto); // Filtra los productos según el texto. CORRECTO

  for (let i = 0; i < productosFiltrados.length; i++) { // Itera sobre los productos filtrados.
    var d = document.createElement("div"); // Crea un div para el producto filtrado.
    d.classList.add("producto"); // Añade la clase 'producto' al div.
  
    var ti = document.createElement("p"); // Crea un párrafo para el título del producto filtrado.
    ti.classList.add("titulo"); // Añade la clase 'titulo' al párrafo.
    ti.textContent = productosFiltrados[i].nombre; // Establece el texto del párrafo como el nombre del producto filtrado.
    
    var imagen = document.createElement("img"); // Crea una imagen para el producto filtrado.
    imagen.setAttribute('src', productosFiltrados[i].img); // Establece el atributo src de la imagen.
  
    d.appendChild(ti); // Añade el título al div del producto filtrado.
    d.appendChild(imagen); // Añade la imagen al div del producto filtrado.
  
    li.appendChild(d); // Añade el div del producto filtrado a la lista de productos.
  }
};

const filtrado = (productos = [], texto) => { // Función de filtrado de productos.
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto)); // Filtra los productos según el tipo o color que incluye el texto.
};



/* Estudiar esta funcionpara implementarlo en la busqueda de produuctos de la ecomerce*/ 