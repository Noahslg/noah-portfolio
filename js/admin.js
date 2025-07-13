const adminArea = document.getElementById("admin-area");

function login() {
  const pass = document.getElementById("password").value;
  if (pass === "noah1234") {
    afficherFormulaire();
  } else {
    alert("Mot de passe incorrect.");
  }
}

function afficherFormulaire() {
  adminArea.innerHTML = `
    <h1>Ajouter un projet</h1>
    <input type="text" id="title" placeholder="Titre du projet">
    <textarea id="description" placeholder="Description"></textarea>
    <input type="text" id="image" placeholder="Lien image (images/monimage.jpg)">
    <input type="text" id="video" placeholder="Lien YouTube, Vimeo, SoundCloud, etc.">
    <select id="font">
      <option value="sans-serif">Sans-serif</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
      <option value="cursive">Cursive</option>
    </select>
    <button onclick="ajouterProjet()">Ajouter</button>
  `;
}

function ajouterProjet() {
  const projet = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    image: document.getElementById("image").value,
    video: document.getElementById("video").value,
    font: document.getElementById("font").value
  };

  // Affichage dans la console (tu peux copier-coller le JSON pour l’ajouter à projets.json)
  console.log("Nouveau projet : ", JSON.stringify(projet, null, 2));
  alert("Projet généré ! Copie-colle-le dans projets.json.");
}
function appliquerStyle() {
  const maxWidth = document.getElementById("imgMaxWidth").value;
  const align = document.getElementById("textAlign").value;

  // Appliquer les styles
  document.querySelectorAll(".project-item img").forEach(img => {
    img.style.maxWidth = maxWidth + "px";
  });

  document.querySelectorAll(".project-item").forEach(proj => {
    proj.style.textAlign = align;
  });

  // Sauvegarder dans localStorage
  localStorage.setItem('imgMaxWidth', maxWidth);
  localStorage.setItem('textAlign', align);

  alert(`Style appliqué : images max ${maxWidth}px, texte aligné ${align}`);
}
function chargerStyle() {
  const maxWidth = localStorage.getItem('imgMaxWidth') || '400';
  const align = localStorage.getItem('textAlign') || 'center';

  // Met à jour les inputs avec les valeurs sauvegardées
  document.getElementById("imgMaxWidth").value = maxWidth;
  document.getElementById("textAlign").value = align;

  // Applique les styles aux projets déjà affichés
  document.querySelectorAll(".project-item img").forEach(img => {
    img.style.maxWidth = maxWidth + "px";
  });

  document.querySelectorAll(".project-item").forEach(proj => {
    proj.style.textAlign = align;
  });
}

// Appelle la fonction au chargement
window.addEventListener('load', chargerStyle);
