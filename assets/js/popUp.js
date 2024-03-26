const body = document.querySelector("body");
const activePopUps = [];

const summonPopUp = (template, fixer) => {
  const popUpName = template.slice(1);
  const templateContent = document
    .querySelector(`#${popUpName}`)
    .content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  const closeButtons = popup.querySelectorAll(".popUp__close");

  activePopUps.push(popup);

  if (fixer === true) {
    body.classList.add("popUp__body-fixer");

    popup.querySelector(".popUp__overlay").addEventListener("click", () => {
      popup.remove();
      activePopUps.pop();
      body.classList.remove("popUp__body-fixer");
    });
  }

  if (closeButtons.length > 0) {
    closeButtons.forEach((close) => {
      close.addEventListener("click", () => {
        popup.remove();
        activePopUps.pop();
        if (fixer === true) {
          body.classList.remove("popUp__body-fixer");
        }
      });
    });
  }

  body.append(templateContent);
};

const removePopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`);

  if (fixer === true) {
    body.classList.remove("popUp__body-fixer");
  }

  templateContent.remove();
};

/// вызовы попапов

document.addEventListener("keydown", (evt) => {
  if (evt.code === "Escape") {
    const lastActivePopUp = activePopUps.pop();
    if (lastActivePopUp !== undefined) {
      lastActivePopUp.remove();
      body.classList.remove("popUp__body-fixer");
    }
  }
});

const dateOfBirthMask = new Inputmask("99.99.9999");

document.querySelector(".nav__register").addEventListener("click", () => {
  summonPopUp("#registration", true);
  validateForm("#registration__form");
  maskPhone("#registration__form");
  maskNumber("#registration__form", 7);
  initAgreeCheckbox("#registration__form");
  dateOfBirthMask.mask(document.querySelector(".registration__dateOfBirth"));

  const select = document.querySelector(".registration__gender");
  console.log(select);

  const choices = new Choices(select, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: "",
    shouldSort: false,
    classNames: {
      containerOuter: "choices registration__choices",
    },
  });

  document
    .querySelector("#registration__form")
    .addEventListener("bouncerFormValid", () => {
      summonPopUp("#request", false);
      setTimeout(() => {
        removePopUp(".request", false);
      }, 3000);
    });
});
