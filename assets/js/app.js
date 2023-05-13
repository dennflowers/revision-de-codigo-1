const githubApi = 'https://api.github.com'; // Se utiliza la constante  'githubApi' para almacenar la URL
const usersEndpoint = `${githubApi}/users`; 

//vSe ha mejorado la legibilidad del código utilizando nombres más descriptivos para las variables
const nameElement = document.querySelector('#name');
const blogElement = document.querySelector('#blog');
const locationElement = document.querySelector('#location');

async function getUserData(username) { // Se utiliza la función 'getUserData', es más descriptiva
  try { // se utiliza 'try'/'catch'
    nameElement.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const userData await response.json();
    // Se utiliza el operador lógico || para proporcionar un valor predeterminado en caso de que los datos del usuario no estén disponibles
    nameElement.textContent = userData.name || 'Nombre no disponible';
    blogElement.textContent = userData.blog || 'blog no disponible';
    locationElement.textContent = userData.location || 'Ubicación no disponible';
  } catch (error){
    console.error('Ha ocurrido un error:', error);
    nameElement.textContent = 'Algo salió mal; ${error.message}';
  }
}

getUserData('stolinski');