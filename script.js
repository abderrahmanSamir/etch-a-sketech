const container = document.querySelector("#container");
const btn = document.querySelector("button");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
  let nbrCarre = +prompt("entrer le nombre de carre");

  while (nbrCarre < 1 || nbrCarre >= 100 || isNaN(nbrCarre)) {
    nbrCarre = +prompt(
      "NOMBRE INCORRECT : ENTRER UN NOMBRE INFERIEUR A 100 SUPERIEUR OU EGAL A 1 "
    );
  }

  container.textContent = "";

  let taille = nbrCarre * nbrCarre;
  for (let i = 0; i < taille; i++) {
    let divItem = document.createElement("div");

    divItem.classList.add("div-item");
    divItem.textContent = i + 1;
    divItem.style.opacity = 1.0;

    divItem.addEventListener("mouseover", function () {
      divItem.style.backgroundColor = getRandomColor();
      let currentOpacity = this.style.opacity;
      if (currentOpacity > 0) {
        this.style.opacity = currentOpacity - 0.1; // on change l'opacite fixe initialement a chaque survol
      }
    });
    container.appendChild(divItem);
  }
});
