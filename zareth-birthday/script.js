const photos = [
  {
    file: "1.jpeg",
    category: "ella",
    caption: "Una sonrisa bonita",
    tag: "Ella",
  },
  {
    file: "2.jpeg",
    category: "ella",
    caption: "Tengo una serpiente en mi bota!!!!",
    tag: "Ella",
  },
  {
    file: "3.jpeg",
    category: "ella",
    caption: "y esos cachetes ksksksk",
    tag: "Ella",
  },
  {
    file: "4.jpeg",
    category: "ella",
    caption: "Una sonrisa bonita",
    tag: "Ella",
  },
  {
    file: "5.jpeg",
    category: "familia",
    caption: "Su lugar seguro",
    tag: "Familia",
  },
  {
    file: "11.jpeg",
    category: "familia",
    caption: "Su lugar seguro",
    tag: "Familia",
  },
  {
    file: "14.jpeg",
    category: "familia",
    caption: "Su lugar seguro",
    tag: "Familia",
  },
  {
    file: "15.jpeg",
    category: "familia",
    caption: "Su lugar seguro",
    tag: "Familia",
  },
  {
    file: "16.jpeg",
    category: "familia",
    caption: "Su lugar seguro",
    tag: "Familia",
  },
  {
    file: "6.jpeg",
    category: "amigos",
    caption: "Risas que se quedan",
    tag: "Amistades",
  },
  {
    file: "13.jpeg",
    category: "amigos",
    caption: "Risas que se quedan",
    tag: "19",
  },
  {
    file: "12.jpeg",
    category: "ella",
    caption: "Así de auténtica",
    tag: "Ella",
  },
  {
    file: "9.jpeg",
    category: "ella",
    caption: "Así de auténtica",
    tag: "Ella",
  },
  {
    file: "10.jpeg",
    category: "ella",
    caption: "Así de auténtica",
    tag: "Ella",
  },
  {
    file: "18.jpeg",
    category: "ella",
    caption: "Así de auténtica",
    tag: "Ella",
  },
  {
    file: "20.jpeg",
    category: "momentos",
    caption: "Pequeños grandes momentos",
    tag: "Momentos",
  },
  {
    file: "7.jpeg",
    category: "amigos",
    caption: "Personas que hacen bien",
    tag: "Amistades",
  },
  {
    file: "8.jpeg",
    category: "amigos",
    caption: "Personas que hacen bien",
    tag: "Amistades",
  },
    {
    file: "21.jpeg",
    category: "amigos",
    caption: "Risas que se quedan",
    tag: "Amistades",
  },
    {
    file: "22.jpeg",
    category: "amigos",
    caption: "Risas que se quedan",
    tag: "Amistades",
  },
    {
    file: "23.jpeg",
    category: "amigos",
    caption: "Risas que se quedan",
    tag: "Amistades",
  },
    {
    file: "24.jpeg",
    category: "amigos",
    caption: "Risas que se quedan",
    tag: "Amistades",
  },
    {
    file: "25.jpeg",
    category: "amigos",
    caption: "Risas que se quedan",
    tag: "Amistades",
  },
];

// GUSTOS: imágenes y GIF de sus cosas favoritas.
const likes = [
  {
    icon: "🏐",
    title: "Voleibol",
    description: "Que nunca te falten ganas de saltar por tus sueños.",
    image: "assets/favoritos/voleibol.gif",
  },
  {
    icon: "🌸",
    title: "Anime",
    description: "Mil historias, personajes y mundos por descubrir.",
    image: "assets/favoritos/anime.gif",
  },
  {
    icon: "🌸",
    title: "Mi Kirby",
    description: "Solo yo tengo el derecho de decirte asi",
    image: "assets/favoritos/kirby.gif",
  },
  {
    icon: "🍫",
    title: "Postres",
    description: "Un poquito de dulzura siempre alegra el día.",
    image: "assets/favoritos/postres.gif",
  },
  {
    icon: "🐶",
    title: "Snoopy",
    description: "Ternura, ocurrencias y pequeñas aventuras.",
    image: "assets/favoritos/snnopy.gif",
  },
  {
    title: "kuromy",
    description: "me acorde de los huequitos que se te marcan cuando te ries",
    image: "assets/favoritos/kuro.gif",
  },
  {
     title: "jsjsja se parece a ti",
    description: "Alguien por ahi.......",
    image: "assets/favoritos/tu.gif",
  },
];

// CARTA: personaliza el texto con tus propias palabras.
const letterParagraphs = [
  "Quizás no llevamos muchísimo tiempo conociéndonos y todavía nos quedan muchas historias por compartir, pero en este poquito tiempo te has ganado mi aprecio.",
  "Quería hacerte algo diferente, un pequeño espacio que reuniera algunas de las cosas que te gustan y que te recordara lo especial que eres.",
  "Espero que este nuevo año de vida venga cargado de sonrisas, sueños cumplidos, momentos inolvidables y personas que te quieran bonito.",
  "¡Feliz cumpleaños, Zareth! Nunca dejes de brillar y de ser tú. ♡",
];

const photoGrid = document.querySelector("#photoGrid");
function renderPhotos(filter = "todos") {
  const visible = photos.filter(
    (p) => filter === "todos" || p.category === filter,
  );
  photoGrid.innerHTML = visible
    .map(
      (p, i) => `
    <article class="polaroid" style="--tilt:${i % 2 ? "2deg" : "-2deg"}" tabindex="0" data-file="assets/fotos/${p.file}" data-caption="${p.caption.replaceAll('"', "&quot;")}">
      <span class="tag">${p.tag}</span>
      <img src="assets/fotos/${p.file}" alt="${p.caption}" onerror="this.src='https://placehold.co/500x400/f2e4df/987d78?text=Agrega+${encodeURIComponent(p.file)}'">
      <span class="caption">${p.caption}</span>
    </article>`,
    )
    .join("");
  photoGrid.querySelectorAll(".polaroid").forEach((card) => {
    const open = () => showLightbox(card.dataset.file, card.dataset.caption);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") open();
    });
  });
}
renderPhotos();

document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPhotos(btn.dataset.filter);
  }),
);

// TARJETAS VISUALES DE SUS FAVORITOS.
document.querySelector("#likesGrid").innerHTML = likes
  .map(
    (x) => `
      <article class="favorite-card">
        <div class="favorite-media">
          <img
            src="${x.image}"
            alt="${x.title}"
            loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"
          >
          <span class="favorite-fallback">${x.icon}</span>
        </div>

        <div class="favorite-info">
          <h3>${x.title}</h3>
          <p>${x.description}</p>
        </div>
      </article>
    `,
  )
  .join("");

// La caja regalo se abre y revela el contenido. Después desplaza suavemente al interior.
document.querySelector("#openGift").addEventListener("click", () => {
  const box = document.querySelector("#openGift");
  box.classList.add("opened");
  const music = document.querySelector("#birthdayMusic");
  music.volume = 0.35;
  music.play().catch(() => {
    console.log("La música necesita activarse manualmente.");
  });
  setTimeout(() => {
    document.querySelector("#introScreen").style.display = "none";
    const content = document.querySelector("#giftContent");
    content.classList.add("revealed");
    content.setAttribute("aria-hidden", "false");
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 650);
});

// Navegación interna: cambia de "tarjeta" en lugar de parecer una web tradicional.
function showPanel(name) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.toggle("active", t.dataset.panel === name));
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.toggle("active", p.id === `panel-${name}`));
  document
    .querySelector("#giftContent")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
document
  .querySelectorAll(".tab")
  .forEach((t) =>
    t.addEventListener("click", () => showPanel(t.dataset.panel)),
  );
document
  .querySelectorAll("[data-go]")
  .forEach((b) => b.addEventListener("click", () => showPanel(b.dataset.go)));

// Sobre/carta.
document.querySelector("#letterBody").innerHTML = letterParagraphs
  .map((p) => `<p>${p}</p>`)
  .join("");
document.querySelector("#openLetter").addEventListener("click", () => {
  document.querySelector("#openLetter").style.display = "none";
  document.querySelector("#letter").classList.add("open");
  document.querySelector("#letter").setAttribute("aria-hidden", "false");
});

// Ampliar fotos.
const lightbox = document.querySelector("#lightbox");
function showLightbox(src, caption) {
  document.querySelector("#lightboxImage").src = src;
  document.querySelector("#lightboxCaption").textContent = caption;
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
}
document
  .querySelector("#closeLightbox")
  .addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// Lluvia de corazones al tocar la sorpresa final.
document.querySelector("#celebrate").addEventListener("click", () => {
  const symbols = ["♡", "✿", "✨", "♥", "🌸", "🐾"];
  for (let i = 0; i < 42; i++) {
    const el = document.createElement("span");
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.cssText = `position:fixed;z-index:100;left:${Math.random() * 100}vw;top:-30px;font-size:${16 + Math.random() * 22}px;color:${["#bd7d8c", "#dcaeb5", "#b7c4a8"][i % 3]};pointer-events:none;transition:transform ${2 + Math.random() * 2}s linear,opacity 3s`;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transform = `translateY(${innerHeight + 80}px) rotate(${Math.random() * 360}deg)`;
      el.style.opacity = "0";
    });
    setTimeout(() => el.remove(), 4300);
  }
});
