document.addEventListener("DOMContentLoaded", function() {
  let navLinks = document.querySelectorAll(".introduzione .nav-link");

  const searchParams = new URLSearchParams(document.location.search);
  const type = searchParams.has("type") ? searchParams.get("type") : "ale";

  const typeMap = {
    "ale": 0,
    "lager": 1,
    "lambic": 2,
    "acqua": 0,
    "lievito": 2,
    "luppolo": 3,
    "cereali": 1
  };

  const index = type in typeMap ? typeMap[type] : 0;

  // Impostare il link attivo
  navLinks[index].classList.add("active");

  if (searchParams.has("type")) {
    document.getElementById("introduzione").scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Mostrare il testo corrispondente al parametro "type"
  const testo = document.querySelectorAll('.testoinfo .containerintro');
  const testo2 = document.querySelectorAll('.contenuto .contenutopaginatesto');

  testo.forEach((text, i) => {
    text.style.display = i === index ? 'block' : 'none';
  });

  testo2.forEach((text, i) => {
    text.style.display = i === index ? 'grid' : 'none';
  });

  // Aggiorna i link di navigazione per aggiungere il parametro "type" nell'URL
  navLinks.forEach((navLink, i) => {
    navLink.addEventListener("click", function(event) {
      event.preventDefault();
      navLinks.forEach(link => link.classList.remove("active"));
      navLink.classList.add("active");

      // Aggiornare l'URL senza ricaricare la pagina
      const newUrl = new URL(window.location);
      newUrl.searchParams.set('type', Object.keys(typeMap).find(key => typeMap[key] === i));
      window.history.pushState({}, '', newUrl);

      // Mostrare il testo corrispondente al link cliccato
      testo.forEach((text, idx) => {
        text.style.display = idx === i ? 'block' : 'none';
      });

      testo2.forEach((text, idx) => {
        text.style.display = idx === i ? 'grid' : 'none';
      });
    });
  });
});
