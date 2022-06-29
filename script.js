const body = document.body;
const burgerBtn = document.querySelector(".burger-btn");
const burgerBtnImg = document.querySelector(".burger-btn-img");
const burgerMenu = document.querySelector(".header__nav-block");
const burgerClose = document.querySelector(".close");
const linkHeader = document.querySelector(".header__nav-link");
const headerBtn = document.querySelector(".header__btn");
const popap = document.querySelector(".popap");
const headerAccount = document.querySelector(".header__nav-item--account");

const popapBlockLogin = document.querySelector(".popap-block");
const popapRegistr = document.querySelector(".popap-registr");
const inputEmail = document.querySelector(".input-email");
const inputPass = document.querySelector(".input-pass");
const popapBtnSigin = document.querySelector(".popap__btn-sigin");
const popapLogRegistr = document.querySelector(".popap__span-link-a");

const stateInput = {
  email: "",
  password: "",
};

// открыть бургер
const openBurgerMenu = () => {
  burgerMenu.classList.add("open");
  burgerBtn.style.opacity = "0";
  body.classList.add("scroll");
};
// закрыть бургер
const closeBurgerMenu = () => {
  burgerMenu.classList.remove("open");
  burgerBtn.style.opacity = "1";
  body.classList.remove("scroll");
};
// открыть попап
const openPopap = () => {
  popap.classList.remove("popap-none");
  body.classList.add("scroll-popap");
};
// закрыть попап
const closePopap = () => {
  popap.classList.add("popap-none");
  body.classList.remove("scroll-popap");
  popapBlockLogin.classList.remove("popap-block-none");
  popapRegistr.classList.add("popap-registr-none");
};
// отправить данные в ALERT
const goAlert = (e) => {
  e.preventDefault();
  if (stateInput.email !== "" && stateInput.password !== "") {
    alert(`email: ${stateInput.email}, password: ${stateInput.password}`);
    inputEmail.value = "";
    inputPass.value = "";
    stateInput.email = "";
    stateInput.password = "";
  }
};
// открыть вторую форму
const openFormRegistr = () => {
  popapBlockLogin.classList.add("popap-block-none");
  popapRegistr.classList.remove("popap-registr-none");
};

body.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target === burgerBtnImg) {
    openBurgerMenu();
  } else if (e.target === burgerClose) {
    closeBurgerMenu();
  } else if (e.target !== burgerMenu) {
    // закрыть бургер по клику вне бургера
    closeBurgerMenu();
  } else if (e.target === linkHeader) {
    // закрыть бургер по клику на ссылку меню
    closeBurgerMenu();
  }
  // открытие и закрытие попапа
  if (e.target === headerBtn || e.target === headerAccount) {
    openPopap();
  } else if (e.target === popap) {
    closePopap();
  }
  // Попап
  if (e.target === popapLogRegistr) {
    openFormRegistr();
  }
});

inputEmail.addEventListener("input", (e) => {
  stateInput.email = e.target.value;
});
inputPass.addEventListener("input", (e) => {
  stateInput.password = e.target.value;
});

popapBlockLogin.addEventListener("submit", goAlert);

const swiper = new Swiper(".destinations__swiper", {
  slideToClickedSlide: true,
  slidesPerView: 1.7,
  centeredSlides: true,
  spaceBetween: 0,
  initialSlide: 1,
  speed: 1000,
  navigation: {
    nextEl: ".destinations-slider__btn-next",
    prevEl: ".destinations-slider__btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    935: {
      spaceBetween: 20,
      loop: true,
    },
    640: {
      spaceBetween: 20,
      loop: true,
    },
    500: {
      slidesPerView: 1.7,
      spaceBetween: 20,
      loop: true,
    },
    391: {
      loop: true,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    220: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

