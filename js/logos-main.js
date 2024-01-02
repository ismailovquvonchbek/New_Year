const elHumanTemplate = document.querySelector("#human__temp").content;
const elHumanList = document.querySelector(".human__list");
const elManuelList = document.querySelector(".manuel__list")
const elManuelTemp = document.querySelector("#manuel__template").content


const renderLogos = (array) => {

    array.forEach((element) => {
        const humantemplate = elHumanTemplate.cloneNode(true);

        humantemplate.querySelector('.human__img').src = element.magic;

        elHumanList.appendChild(humantemplate)
    });
}

renderLogos(logos)



const renderManuel = (item) => {

    item.forEach(element => {
        const manuelTemplate = elManuelTemp.cloneNode(true);

        manuelTemplate.querySelector(".manuel__img").src = element.Lorem;

        elManuelList.appendChild(manuelTemplate)
    });
}

renderManuel(brends)
