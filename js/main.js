const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const sliderImgEl = document.querySelector(".sliderImg");
const sliderTitoliEl = document.querySelector(".sliderTitoliEl");
const sliderDescrizioneEl = document.querySelector(".sliderDescrizioneEl");
const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");

// let currentImgindex = {
//     immagini: formElements.image.value,
//     titoli: formElements.title.value,
//     descrizioni: formElements.text.value,
// }

sliderImgEl.src = images[ currentImgindex ];

btnNext.addEventListener("click", function() {
    console.log("Next btt click");
    currentImgindex++;
    const ultimoIndiceDisponibile = images.length - 1;
    if ( currentImgindex > ultimoIndiceDisponibile){
        currentImgindex = ultimoIndiceDisponibile;
    }
    sliderImgEl.src = images[ currentImgindex ];
});

btnPrev.addEventListener("click", function() {
    console.log("Prev btt click");
    currentImgindex--;
    if ( currentImgindex < 0 ){
        currentImgindex = 0;
    }
    sliderImgEl.src = images[ currentImgindex ];
});

function ciao(){
    alert("Belin");
} 