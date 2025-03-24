const initModal = () => {
    const classButtonLogin = 'nav__login';
    const classModalLogin = 'modal-login';
    const classModalThanks = 'modal-thanks';
    const classOverlayModal = 'modal__overlay';
    const classModalLoginSubmit = 'modal-login__form';
    const classCrossModalLogin = 'modal__close_login';
    const classCrossModalThanks = 'modal__close_thanks';
    const classBurgerMenu = 'nav__burger-image';
    const classNav = 'nav';
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
    const burgerMenu = document.querySelector(`.${classBurgerMenu}`);
    const nav = document.querySelector(`.${classNav}`);

    const showModal = (modal, classModalShow) => {
        burgerMenu.classList.remove('nav__burger-active');
        nav.classList.remove('nav__burger_open');
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

function initMaskPhone(selector, masked = '+7 (___) ___-__-__') {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		console.log(template);
		let i = 0,
			newValue = template.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
			});
		i = newValue.indexOf("_");
		if (i !== -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}";
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
			this.value = newValue;
		}
		if (event.type === "blur" && this.value.length < 5) {
			this.value = "";
		}

	}

	for (const elem of elems) {
		elem.addEventListener("input", mask);
		elem.addEventListener("focus", mask);
		elem.addEventListener("blur", mask);
	}
	
}

document.addEventListener("DOMContentLoaded", () => {
    initModal();
    initBurger();
    initVideoControl();
    initMaskPhone('#phone');
});
