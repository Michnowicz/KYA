// affichage du lien de l'image en cliquant sur les boutons du carousel
const btnCarousel = document.querySelectorAll(".carousel-item img");

for (let i=0; i <= 2; i++) {
    btnCarousel[i].addEventListener("click", ()=>{
        alert(btnCarousel[i].src=`./img/brianSum${i+1}.jpg`)
    })
}

// agrandi l'image en survol des images
const card = document.querySelectorAll(".card");

for (let i=0; i <= 2; i++) {
    card[i].addEventListener("mouseover", ()=>{
            card[i].classList.toggle("cardImg")
        })
}

// modifie la font de tout les titres
const changeH = document.querySelector(".styleH #changeH");
const h = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

changeH.addEventListener("click", ()=>{
    for (let i=0; i <= 2; i++) {
        h[i].classList.toggle("newFont")
    }
})

// modifie la section style
const styleSection = document.querySelector("#styleSection");
const styleSectionButton = document.querySelector("#styleSection button");

styleSectionButton.addEventListener("click", ()=>{
    styleSection.style.color= "rgb(36 110 185)";
})

// ajout darkmode
const darkMode = document.querySelector("#dmButton");
const bd = document.querySelector("body")
const gap = document.querySelectorAll(".gap")

darkMode.addEventListener("click", ()=>{
    bd.classList.toggle("darkMode")
    for (let i=0; i <= gap.length-1; i++) {
        gap[i].classList.toggle("darkMode")
    }
})


// affiche les images cachées
const show = document.querySelector("#hide");
const hiddenCards = document.querySelectorAll(".card.hidden");
console.log(hiddenCards[1])

show.addEventListener("click", ()=>{
    for (let i=0; i <= hiddenCards.length-1; i++) {
        hiddenCards[i].classList.toggle("hidden")
    }
})