const navAccueil = document.querySelector('a[href="#Accueil"]');
const bodyAccueil = document.querySelector('main.accueil');

const navCatalogue = document.querySelector('a[href="#Catalogue"]');
const navsCatalogue = document.querySelectorAll('a[href="#Catalogue"]');
const bodyCatalogue = document.querySelector('main.catalogue');

const navApropos = document.querySelector('a[href="#À-propos"]');  
const navsApropos = document.querySelectorAll('a[href="#À-propos"]');  
const bodyApropos = document.querySelector('main.a-propos');  
const body = document.querySelector('body');

const btns = document.querySelectorAll('main.catalogue > div > div > button')
const imgs = document.querySelectorAll('main.catalogue > div > div > img')

const btnsOpinion = document.querySelectorAll('span > i')
const containerOpinion = document.querySelector('main.accueil > div:nth-of-type(4) > div > div')

console.log(containerOpinion)

if ( window.location.hash == "#Catalogue"){

    // !        loading with animation

    // bClass = setTimeout(() => {
    //     if (body.classList == 'a'){
    //         bodyCatalogue.classList.remove('from-left-start')
    //         bodyAccueil.classList.add('to-left-end')
    //         bodyCatalogue.classList.add('from-right-start')
    
    //         bodyAccueil.addEventListener("animationend", () => {
    //             bodyAccueil.classList.remove('to-left-end')
    //             body.setAttribute("class", "b")
    //         },{once:true})
    //     }
        
    //     if (body.classList == 'c'){
    //         bodyCatalogue.classList.remove('from-right-start')
    //         bodyApropos.classList.add('to-right-end')
    //         bodyCatalogue.classList.add('from-left-start')
    
    //         bodyApropos.addEventListener("animationend", () => {
    //             bodyApropos.classList.remove('to-right-end')
    //             body.setAttribute("class", "b")
    //         },{once:true})
    //     }
    // }, 1000)

    // !        loading without animation 

    body.setAttribute("class", "b")

}

if ( window.location.hash == "#%C3%80-propos"){

    // !        loading with animation

    // cClass = setTimeout(() => {
    //     if(body.className == "a"){
    //         bodyAccueil.classList.add('to-left-end')
    //         bodyApropos.classList.add('from-right-start')
            
    //         bodyAccueil.addEventListener('animationend', () => {
    //             bodyAccueil.classList.remove('to-left-end')
    //             body.setAttribute("class", "c")
    //         }, {once:true})
    //     }    
    
    //     if(body.className == "b"){
    //         bodyCatalogue.classList.add('to-left-end')
    //         bodyApropos.classList.add('from-right-start')
            
    //         bodyCatalogue.addEventListener('animationend', () => {
    //             bodyCatalogue.classList.remove('to-left-end')
    //             body.setAttribute("class", "c")
    //         }, {once:true})
    //     }   
    // },1000)

    // !        loading without animation 

    body.setAttribute("class", "c")

}

navAccueil.addEventListener('click',() => {
    console.log(window.location.hash)
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

for(let i = 0; i<navsCatalogue.length; i++){
    navsCatalogue[i].addEventListener('click',() => {
        
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
}

for(let i=0;i<navsApropos.length; i++){
    navsApropos[i].addEventListener('click',() => {
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
}

let i = 0
const classes = "abcdefg"

console.log(classes.length - 1)

btnsOpinion[0].addEventListener("click", () => {
    if(i == 0){
        i = classes.length - 1
        containerOpinion.setAttribute("class", classes[i])
    }
    else{
        i--
            containerOpinion.setAttribute("class", classes[i])
    }
})

btnsOpinion[1].addEventListener("click", () => {
    if(i == classes.length - 1){
        i = 0
        containerOpinion.setAttribute("class", classes[i])
    }
    else{
        i++
        containerOpinion.setAttribute("class", classes[i])
    }
})