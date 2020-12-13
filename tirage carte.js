tabCartes =[
    "carreau1","carreau2","carreau3","carreau4","carreau5","carreau6","carreau7","carreau8","carreau9","carreau10","carreau11vallet","carreau12dame","carreau13roi",
    "coeur1","coeur2","coeur3","coeur4","coeur5","coeur6","coeur7","coeur8","coeur9","coeur10","coeur11vallet", "coeur12dame","coeur13roi",
    "pic1","pic2","pic3","pic4","pic5","pic6","pic7","pic8","pic9","pic10","pic11vallet","pic12dame","pic13roi",
    "trefle1","trefle2","trefle3","trefle4","trefle5","trefle6","trefle7","trefle8","trefle9","trefle10","trefle11vallet","trefle12dame","trefle13roi"
];

let nbTour = 0;
let nbJoueur = document.getElementById("number");
let laDate = new Date();
const cliCarte = document.getElementById("carteVerso");
const chxCarte = document.getElementById("carteTouree");
const retCompt = document.getElementById("compteur");
const sC = document.getElementById("sC");
const foot = document.getElementById("footer");
const refr = document.getElementById("refresh");

function focused () {
    nbJoueur.focus()
    let leJour = laDate.getDate();
    let leMois = laDate.getMonth()+1;
    let leAn = laDate.getFullYear();
    let dateActu = leJour+"/"+leMois+"/"+leAn;
    foot.innerHTML = " - Site fait le "+dateActu+" -  par Giorgo -"; 
};

function rafraiPage(){
    location.reload();
};

function nbAleat (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};

function jeu () {
    let nb = nbAleat(0,51);
    let selecCarte = tabCartes[nb]
    if (nbJoueur.value > nbTour){
        chxCarte.setAttribute("src", "photos/cartes/"+selecCarte+".jpg");
        nbTour += 1;
        retCompt.innerHTML = "Tirage N° : "+nbTour;
    } else {
        retCompt.innerHTML = "Fin de Tirage";
        refr.value =  "Rejouer ?";
    };   
};

cliCarte.addEventListener("click", jeu);
sC.addEventListener("mousemove", focused);
refr.addEventListener("click", rafraiPage);


