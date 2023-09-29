let menu = document.querySelector('.mobile-menu')
let collapse = document.querySelector('.close')

menu.addEventListener('click', hamburger) 
collapse.addEventListener('click', close) 

function hamburger() {
    document.querySelector('.mobile-menu').classList.add('hide')
    document.querySelector('.close').classList.add('hide1')
    document.querySelector('.navigate').classList.add('navigation')
    document.querySelector('.mobile-menu').classList.add('change')
}

function close() {
    document.querySelector('.mobile-menu').classList.remove('hide')
    document.querySelector('.close').classList.remove('hide1')
    document.querySelector('.navigate').classList.remove('navigation')
    // document.querySelector('.mobile-menu').classList.remove('change')

}

let drop = document.querySelector('.drop')

drop.addEventListener('click', show);

function show() {
    document.querySelector('.service').classList.toggle('hide1')
    // document.querySelector('.services').classList.toggle('hide1')
}

let drops = document.querySelector('.drops')

drops.addEventListener('click', shows);

function shows() {
    document.querySelector('.services').classList.toggle('hide1')
}