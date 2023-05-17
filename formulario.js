// Obtener referencias a los elementos del formulario
var formulario = document.querySelector("#formulario");
var nameInput = document.querySelector("#name");
var ageInput = document.querySelector("#age");
var nationalitySelect = document.querySelector("#nationality");

// se agrega un controlador de eventos para que se envíe el formulario
formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  
  // se obtienen los valores de los campos del formulario
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value, 10);
  const nationality = nationalitySelect.value;

  // se validan los campos
  var nameValid = validateField(nameInput, name.length > 0);
  var ageValid = validateField(ageInput, !isNaN(age) && age >= 18 && age <= 120 );


  if (nameValid && ageValid) {
    addGuest(name, age, nationality);
  }
});

// Función para validar un campo 

function validateField(input, isValid) {

  if (isValid) {
    input.classList.remove("error");
    return true;
  } else {
    input.classList.add("error");
    return false;
  }
}
  
// Función para agregar un invitado a la lista
function addGuest(_name, _age, _nationality){
}

// Crear un nuevo elemento de lista
var listItem = document.createElement("div");
listItem.classList.add("list-item");

// Crear elementos para que se muestren los detalles del invitado
createItemElement("Nombre", name);
createItemElement("Edad", age);
createItemElement("Nacionalidad", getNationalityse(nationality));

// Función para crear una lista de elementos con etiquetas y value
function createItemElement(label, value){
  let listItem = document.createElement("div");
  let labelSpan = document.createElement("span");
  let valueSpan = document.createElement("span");
  listItem.classList.add("list-item");
  labelSpan.textContent = label + " ";
  valueSpan.textContent = value;
  listItem.appendChild(labelSpan);
  listItem.appendChild(valueSpan);
}

// Botón para eliminar al invitado
let deleteButton = document.createElement("button");
deleteButton.textContent = "Eliminar invitado";
deleteButton.addEventListener("click", function(){
  listItem.remove();
});

// Agregar elementos a la lista
listItem.appendChild(deleteButton);

// Agregar la lista de elementos a la lista de invitados
guestList.appendChild(listItem);
