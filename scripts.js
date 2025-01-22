//contador de caractares del formulario
function contarCaracteresFormulario (){
    const texto = document.getElementById("comentarios2").value;
    document.getElementById("contador").textContent = `Caracteres: ${texto.length}`;
}

//modo oscuro
const toggleButton = document.getElementById('tema');
const themeIcon = document.getElementById('icono');
const body = document.body;

const savedTheme = localStorage.getItem('tema');
if (savedTheme) {
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);
}

// aqui se alterna los iconos
toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    themeIcon.className = 'fas fa-moon'; // Cambia a icono de luna
    localStorage.setItem('tema', 'light');
  } else {
    body.classList.replace('light', 'dark');
    themeIcon.className = 'fas fa-sun'; // Cambia a icono de sol
    localStorage.setItem('tema', 'dark');
  }
});

// fecha en pie de pagina
const today = new Date();
const formattedDate = today.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});
document.getElementById('currentDate').textContent = formattedDate;

//Likesss
const likeButton = document.getElementById ('like-button');
const likeIcon = document.getElementById ('like-icon');
const likeCount = document.getElementById ('like-count');

let likes = 0;
let liked = false;

likeButton.addEventListener('click', () => {
  if (!liked){
    likes++;
    likeIcon.classList.add('active');
  }
  else{
  likes--;
  likeIcon.classList.remove('active'); 
}
liked = !liked;
likeCount.textContent = likes;
});

setTimeout (() => {
  alert('Bienvenido a mi blog');
},3000);