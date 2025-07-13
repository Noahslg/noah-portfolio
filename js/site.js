fetch("projets.json")
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("project-list");

    data.forEach(projet => {
      const section = document.createElement("section");
      section.className = "project";
      section.style.fontFamily = projet.font || "sans-serif";

      const titre = document.createElement("h2");
      titre.textContent = projet.title;
      section.appendChild(titre);

      const desc = document.createElement("p");
      desc.textContent = projet.description;
      section.appendChild(desc);

      if (projet.image) {
        const img = document.createElement("img");
        img.src = projet.image;
        section.appendChild(img);
      }

      if (projet.video) {
        const iframe = document.createElement("iframe");
        iframe.src = projet.video;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        section.appendChild(iframe);
      }

      list.appendChild(section);
    });
  });
