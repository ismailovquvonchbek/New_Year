const elList = document.querySelector('.kate__list');
const elTemplate = document.querySelector('#kate__template').content;

const renderKategoriya = () => {
    kategoriya.forEach((render) =>  {
        const RenderTemplate = elTemplate.cloneNode(true)

        RenderTemplate.querySelector(".kate__img").src = render.Art;
        RenderTemplate.querySelector(".kate__img").alt = render.UserName;
        RenderTemplate.querySelector(".kate__text").textContent = render.UserName;

        elList.append(RenderTemplate)
    })
}

renderKategoriya(kategoriya)