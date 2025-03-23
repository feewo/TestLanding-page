const initModal = () => {
    const classButtonLogin = 'nav__login';
    const classModalLogin = 'modal-login';
    const classModalThanks = 'modal-thanks';
    const classOverlayModal = 'modal__overlay';
    const classModalLoginSubmit = 'modal-login__form';
    const classCrossModalLogin = 'modal__close_login';
    const classCrossModalThanks = 'modal__close_thanks';
    const classModalLoginShow = `${classModalLogin}-show`;
    const classModalThanksShow = `${classModalLogin}-show`;
    const classOverlayModalShow = `${classOverlayModal}-show`;
    const buttonLogin = document.querySelector(`.${classButtonLogin}`);
    const modalLogin = document.querySelector(`.${classModalLogin}`);
    const modalThanks = document.querySelector(`.${classModalThanks}`);
    const overlayModal = document.querySelector(`.${classOverlayModal}`);
    const modalLoginForm = document.querySelector(`.${classModalLoginSubmit}`);
    const crossModalLogin = document.querySelector(`.${classCrossModalLogin}`);
    const crossModalThanks = document.querySelector(`.${classCrossModalThanks}`);

    const showModal = (modal, classModalShow) => {
        modal.classList.add(classModalShow);
        overlayModal.classList.add(classOverlayModalShow);
        document.body.classList.add('no-scroll');
    };

    const hideModal = (modal, classModalShow) => {
        modal.classList.remove(classModalShow);
        overlayModal.classList.remove(classOverlayModalShow);
        document.body.classList.remove('no-scroll');
    };

    buttonLogin.addEventListener('click', () =>{
        showModal(
            modalLogin, 
            classModalLoginShow
        )
    });

    crossModalLogin.addEventListener('click', () =>{
        hideModal(
            modalLogin, 
            classModalLoginShow
        );
    });

    crossModalThanks.addEventListener('click', () =>{
        hideModal(
            modalThanks, 
            classModalThanksShow
        );
    });

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
            classModalLoginShow,
        );
        showModal(
            modalThanks, 
            classModalThanksShow
        );

        modalLoginForm.reset();
    });
}

const initBurger = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav');
    const burgerImage = document.querySelector('.nav__burger-image');
    burger.addEventListener('click', () => {
        burgerImage.classList.toggle('nav__burger-active');
        nav.classList.toggle('nav__burger_open');
    })
}

const initVideoControl = () => {
    const videos = document.querySelectorAll('.visually__video');
    videos.forEach(video => {
        video.addEventListener('click', () => {
            video.setAttribute('controls','controls');
            video.play();
        })
    });
    

}

document.addEventListener("DOMContentLoaded", () => {
    initModal();
    initBurger();
    initVideoControl();
});
