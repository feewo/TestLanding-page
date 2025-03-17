// Имена классов для элементов
const classButtonLogin = 'nav__login';
const classModalLogin = 'modal-login';
const classOverlayModalLogin = 'modal-login__overlay';

// Имена классов для отображения модального окна и оверлея
const classModalLoginShow = `${classModalLogin}-show`;
const classOverlayModalLoginShow = `${classOverlayModalLogin}-show`;

// Выбор элементов
const buttonLogin = document.querySelector(`.${classButtonLogin}`);
const modalLogin = document.querySelector(`.${classModalLogin}`);
const overlayModalLogin = document.querySelector(`.${classOverlayModalLogin}`);

// Функция для отображения модального окна
const showModal = () => {
    modalLogin.classList.add(classModalLoginShow);
    overlayModalLogin.classList.add(classOverlayModalLoginShow);
};

// Функция для скрытия модального окна
const hideModal = () => {
    modalLogin.classList.remove(classModalLoginShow);
    overlayModalLogin.classList.remove(classOverlayModalLoginShow);
};

// Обработчик события для отображения модального окна при клике на кнопку логина
buttonLogin.addEventListener('click', showModal);

// Обработчик события для скрытия модального окна при клике на оверлей
overlayModalLogin.addEventListener('click', (e) => {
    if (e.target === overlayModalLogin) {
        hideModal();
    }
});

// Обработчик события для скрытия модального окна при нажатии клавиши Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideModal();
    }
});
