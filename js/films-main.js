const elAboutTemplate = document.querySelector("#about__template").content
const elAboutList = document.querySelector('.about__list');
const elForm = document.querySelector(".input__flex")
const elInput = document.querySelector(".header__input")

const renderFilms = (item) => {
    item.forEach((FilmsRender) => {
        const aboutRender = elAboutTemplate.cloneNode(true)

        aboutRender.querySelector('.about__img').src = FilmsRender.poster;
        aboutRender.querySelector('.about__img').alt = FilmsRender.title;
        aboutRender.querySelector('.about__heading').textContent = FilmsRender.title;

        elAboutList.appendChild(aboutRender)
    })
}

renderFilms(films, elAboutList)

elForm.addEventListener("submit", (evt) => {

    evt.preventDefault()

    const inputValue = elInput.value.trim()

    elAboutList.innerHTML = null

    const filterTitle = films.filter((film) => film.title.includes(inputValue),);

    const regex = new RegExp(inputValue, 'gi');
    const filterBysearch = filterTitle.filter((film) => film.title.match(regex),);

    renderFilms(filterBysearch, elAboutList)
    
})




