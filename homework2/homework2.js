/*
tema - Curs 2.
   1.  Creați un progress bar folosind animatii CSS, acesta trebuie să se încarce de la 0 la 100.
   2.  Creați un cronometru, adăugați posibilitatea ca utilizatorul să îl poată reseta, opri, porni. 

*/

/* 1 */

const progressBarAction = () => {
    let element = document.getElementById('progressBar')
    let width= 0
    const fillBar = () => {
        if (width >= 100) {
            clearInterval(id)
        } else {
            width++
            element.style.width = width + '%'
            element.innerHTML = width + '%'
        }
    }
    let id = setInterval(fillBar, 50)
}

/* 2 */

let counter = 0
let id = null

const start = () => {
    let element = document.getElementById('counter')
    const startCounter = () => {
        counter++
        element.innerHTML = counter%10 ? counter/10 : `${counter/10}.0`
    }

    if (id !== null) {
        clearInterval(id)
    }
    id = setInterval( startCounter, 100)
}

const stop = () => {
    if (id !==null) {
        clearInterval(id)
    }
}

const reset = () => {
    let element = document.getElementById('counter')
    if(id !==null) {
        counter = 0
        id = null
        element.innerHTML = counter
    }
}