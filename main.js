// affichage du lien de l'image en cliquant sur les boutons du carousel
const btnCarousel = document.querySelectorAll(".carousel-indicators button");

// btnCarousel[0].addEventListener("click", ()=>{
//     alert(btnCarousel[0].src="./img/kimJungGi1.jpg")
// })
// btnCarousel[1].addEventListener("click", ()=>{
//     alert(btnCarousel[1].src="./img/kimJungGi2.jpg")
// })
// btnCarousel[2].addEventListener("click", ()=>{
//     alert(btnCarousel[2].src="./img/kimJungGi2.jpg")
// })
for (let i=0; i <= 2; i++) {
    btnCarousel[i].addEventListener("click", ()=>{
        alert(btnCarousel[i].src=`./img/brianSum${i+1}.jpg`)
    })
}

// agrandi l'image en survol des images
const card = document.querySelectorAll(".card");

for (i=0; i <= 2; i++) {
    card[i].addEventListener("mouseover", ()=>{
            card[i].classList.toggle("cardImg")
        })
}