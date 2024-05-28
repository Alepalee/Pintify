document.addEventListener("DOMContentLoaded", function() {
  let navLinks = document.querySelectorAll(".introduzionehome .nav-link");
  

  navLinks[0].classList.add("active");

  navLinks.forEach((navLink, activeIndex) => {
    navLink.addEventListener("click", () => {
      // nav-link
      navLinks.forEach(navLink => navLink.classList.remove("active"));
      navLink.classList.add("active");
    });
  });

  // Nascondiamo tutti i testi tranne il primo
  const testo = document.querySelectorAll('.testoinfo .containerintro');
  const testo2 = document.querySelectorAll('.contenuto .contenutopaginatesto');
  testo.forEach((text, index) => {
    if (index !== 0) {
      text.style.display = 'none';
    }
  });

  testo2.forEach((text, index) => {
    if (index !== 0) {
      text.style.display = 'none';
    }
  });

  // Aggiungiamo il codice per gestire il testo quando si fa clic su un link
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Nascondiamo tutti i testi
      testo.forEach(text => {
        text.style.display = 'none';
      });

      // Mostriamo il testo corrispondente al link cliccato
      testo[index].style.display = 'block';
    });
  });

  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Nascondiamo tutti i testi
      testo2.forEach(text => {
        text.style.display = 'none';
      });

      // Mostriamo il testo corrispondente al link cliccato
      testo2[index].style.display = 'grid';
    });
  });
});