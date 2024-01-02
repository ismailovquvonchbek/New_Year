const findElement = (selector, node = document) => {
    return node.querySelector(selector)
} 

const elButton = document.querySelector(".hdr__btn--acces")
const elModalAccec1 = document.querySelector(".modal__acces1")
const elModal1 = document.querySelector(".modal1")
const elModalBtnExit1 = document.querySelector(".modal__exit1")
const elModal2 = document.querySelector(".modal2")
const elModalExit2 = document.querySelector(".modal__exit2")
const elModalAcces2 = document.querySelector(".modal__acces2")
const elModal3 = document.querySelector(".modal3")
const elModalExit3 = document.querySelector(".modal__exit3")
const elModalForget3 = document.querySelector(".modal__forget3")
const elModal4 = document.querySelector(".modal4")
const elModalExit4 = document.querySelector(".modal__exit4")
const elModalBtn4 = document.querySelector(".modal__btn4")
const elModalExit5 = document.querySelector(".modal__exit5")
const elModal5 = document.querySelector(".modal5")
const elModalBtn5 = document.querySelector(".modal__btn5")
const elModal6 = document.querySelector(".modal6")
const elModalExit6 = document.querySelector('.modal__exit6')
const elModalAcces6 = document.querySelector(".modal__acces6")
const elModal7 = document.querySelector('.modal7')
const elModalBtn7 = document.querySelector(".modal__btn7")
const elBtnHamburger = document.querySelector(".nav__button")
const elNavber = document.querySelector('.nav__list')
const elMenu = document.querySelector(".menu")
const elExit = document.querySelector(".exit")
const elModalBtn3 = document.querySelector(".modal__btn3")

// console.log(elModal2);

elButton.addEventListener('click', () => {
    elModal1.classList.toggle('blok')
})

elModalBtnExit1.addEventListener('click', () => {
    elModal1.classList.remove('blok')
})

elModalAccec1.addEventListener('click', () => {
    elModal2.classList.toggle('blok')
})

elModalExit2.addEventListener('click', () => {
    elModal2.classList.remove('blok')
})

elModalAcces2.addEventListener('click', () => {
    elModal3.classList.toggle('blok')
    elModal2.classList.remove('blok')
    elModal1.classList.remove('blok')
})

elModalExit3.addEventListener("click", () => {
    elModal3.classList.remove('blok')
})

elModalBtn3.addEventListener('click', () => {
    elModal3.classList.remove('blok')
} ) 

elModalForget3.addEventListener('click', () => {
    elModal3.classList.remove('blok')
    elModal4.classList.toggle('blok')
})

elModalExit4.addEventListener('click', () => {
    elModal4.classList.remove('blok')
})

elModalBtn4.addEventListener('click', () => {
    elModal5.classList.toggle('blok')
    elModal4.classList.remove('blok')
})

elModalExit5.addEventListener('click', () => {
    elModal5.classList.remove('blok')
})

elModalBtn5.addEventListener('click', () => {
    elModal6.classList.toggle('blok')
    elModal5.classList.remove('blok')
})

elModalExit6.addEventListener('click', () => {
    elModal6.classList.remove('blok')
})

elModalAcces6.addEventListener('click', () => {
    elModal6.classList.remove('blok')
    elModal7.classList.toggle('blok')
})

elModalBtn7.addEventListener('click', () => {
    elModal7.classList.remove('blok')
})

elBtnHamburger.addEventListener('click', () => {
    elNavber.classList.toggle('nav__blok')
    elMenu.classList.toggle('menu-exit')
    elExit.classList.toggle('exit-menu')
})
