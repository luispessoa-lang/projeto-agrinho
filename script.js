// Galeria dinâmica
const images = [
  "https://source.unsplash.com/random/800x600/?soybean",
  "https://source.unsplash.com/random/800x600/?cornfield",
  "https://source.unsplash.com/random/800x600/?chicken-farm",
  "https://source.unsplash.com/random/800x600/?wheat-field",
  "https://source.unsplash.com/random/800x600/?tractor-parana"
];

const gallery = document.getElementById('gallery');
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Agro Paraná";
  gallery.appendChild(img);
});

// Formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! (Simulação)');
  this.reset();
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
