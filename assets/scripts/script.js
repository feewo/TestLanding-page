// Имена классов для элементов
const classButtonLogin = 'nav__login';
const classModalLogin = 'modal-login';
const classModalThanks = 'modal-thanks';
const classOverlayModal = 'modal__overlay';

const classModalLoginSubmit = 'modal-login__form';


// Имена классов для отображения модального окна и оверлея
const classModalLoginShow = `${classModalLogin}-show`;
const classModalThanksShow = `${classModalLogin}-show`;
const classOverlayModalShow = `${classOverlayModal}-show`;

// Выбор элементов
const buttonLogin = document.querySelector(`.${classButtonLogin}`);
const modalLogin = document.querySelector(`.${classModalLogin}`);
const modalThanks = document.querySelector(`.${classModalThanks}`);
const overlayModal = document.querySelector(`.${classOverlayModal}`);
const modalLoginForm = document.querySelector(`.${classModalLoginSubmit}`);

// Функция для отображения модального окна
const showModal = (modal, classModalShow) => {
    modal.classList.add(classModalShow);
    overlayModal.classList.add(classOverlayModalShow);
};

// Функция для скрытия модального окна
const hideModal = (modal, classModalShow) => {
    modal.classList.remove(classModalShow);
    overlayModal.classList.remove(classOverlayModalShow);
};

// Обработчик события для отображения модального окна при клике на кнопку логина
buttonLogin.addEventListener('click', (e) =>{
    showModal(
        modalLogin, 
        classModalLoginShow
    )
});

// Обработчик события для скрытия модального окна при клике на оверлей
overlayModal.addEventListener('click', (e) => {
    if (e.target === overlayModal) {
        hideModal(
            modalLogin, 
            classModalLoginShow
        );
        hideModal(
            modalThanks, 
            classModalThanksShow
        );
    }
});

// Обработчик события для скрытия модального окна при нажатии клавиши Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideModal(
            modalLogin, 
            classModalLoginShow
        );
    }
});

modalLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    hideModal(
        modalLogin, 
        classModalLoginShow
    );
    showModal(
        modalThanks, 
        classModalThanksShow
    )
})