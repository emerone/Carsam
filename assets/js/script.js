const navAccueil = document.querySelector('a[href="#Accueil"]');
const navCatalogue = document.querySelector('a[href="#Catalogue"]');
const navApropos = document.querySelector('a[href="#À-propos"]');    


navAccueil.addEventListener('click',() => {
    console.log(navAccueil)
})

navApropos.addEventListener('click',() => {
    console.log(navApropos)
})

navCatalogue.addEventListener('click',() => {
    console.log(navCatalogue)
})