let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let btnFechar = document.querySelector('.btn-fechar')
let overlay = document.getElementById('overlay-menu')
let opcoesMenu = document.querySelectorAll('.menu-opcoes')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

btnFechar.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

opcoesMenu.forEach((opcoes) => {
    opcoes.addEventListener('click', ()=>{
        menu.classList.remove('abrir-menu')
    })
})