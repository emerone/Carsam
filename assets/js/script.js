const navAccueil = document.querySelector('a[href="#Accueil"]');
const bodyAccueil = document.querySelector('main.accueil');

const navCatalogue = document.querySelector('a[href="#Catalogue"]');
const bodyCatalogue = document.querySelector('main.catalogue');

const navApropos = document.querySelector('a[href="#À-propos"]');  
const bodyApropos = document.querySelector('main.a-propos');  
const body = document.querySelector('body');

navAccueil.addEventListener('click',() => {
    console.log(window.location.href)
})

navAccueil.addEventListener('click',() => {
    if(body.className == "b"){
        console.log(body.className)
        bodyCatalogue.classList.add('to-right-end')
        bodyAccueil.classList.add("from-left-start")

        bodyCatalogue.addEventListener("animationend", () => {
            bodyCatalogue.classList.remove('to-right-end')
            body.setAttribute("class", "a")
        }, {once:true})
    }

    if(body.className == "c"){
        bodyApropos.classList.add('to-right-end')
        bodyAccueil.classList.add("from-left-start")
        
        bodyApropos.addEventListener("animationend", () => {
            bodyApropos.classList.remove('to-right-end')
            body.setAttribute("class", "a")
        }, {once:true})
    }
})

navCatalogue.addEventListener('click',() => {
    
    if (body.classList == 'a'){

        bodyCatalogue.classList.remove('from-left-start')
        bodyAccueil.classList.add('to-left-end')
        bodyCatalogue.classList.add('from-right-start')

        bodyAccueil.addEventListener("animationend", () => {
            bodyAccueil.classList.remove('to-left-end')
            body.setAttribute("class", "b")
        },{once:true})
    }
    
    if (body.classList == 'c'){

        bodyCatalogue.classList.remove('from-right-start')
        bodyApropos.classList.add('to-right-end')
        bodyCatalogue.classList.add('from-left-start')

        bodyApropos.addEventListener("animationend", () => {
            bodyApropos.classList.remove('to-right-end')
            body.setAttribute("class", "b")
        },{once:true})
    }
})

navApropos.addEventListener('click',() => {
    if(body.className == "a"){
        bodyAccueil.classList.add('to-left-end')
        bodyApropos.classList.add('from-right-start')
        
        bodyAccueil.addEventListener('animationend', () => {
            bodyAccueil.classList.remove('to-left-end')
            body.setAttribute("class", "c")
        }, {once:true})
    }    

    if(body.className == "b"){
        bodyCatalogue.classList.add('to-left-end')
        bodyApropos.classList.add('from-right-start')
        
        bodyCatalogue.addEventListener('animationend', () => {
            bodyCatalogue.classList.remove('to-left-end')
            body.setAttribute("class", "c")
        }, {once:true})
    }    
})

// 1 = ajouter une animation avec les class 
// en fonction de la possition du main
// 2 = changer la class recomencer  
// 3 = class pour le milieu 