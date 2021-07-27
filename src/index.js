

const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".modal__content--close");

const visibleModal = () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible');
}

buttonClose.addEventListener("click", ()=> {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})