import { handleChangeBanner } from "../../assets/js/banner.js";
import { closeModal } from "../../utils/closeModal.js";
import { openModal } from "../../utils/openModal.js";

const banner = document.querySelector("#banner");
const data = [];

banner.addEventListener("click", (e) => {
  const btn = e.target.getAttribute("class");
  const modal = banner.querySelector(".modalBanner__newBanner");
  if (btn == "button__text") {
    openModal(banner, ComponentModal, submitFormOfBanner);
  }
  if (btn == "newBanner__close") {
    closeModal(modal);
    handleChangeBanner();
  }
  if (btn == "form__submitBanner") {
    closeModal(modal);
  }
});

document.addEventListener("click", (e) => {
  const modal = banner.querySelector(".modalBanner__newBanner");
  if (modal && modal.contains && !modal.contains(e.target) && e.target.getAttribute("class") !== "button__text") {
    closeModal(modal);
    handleChangeBanner();
  }
});

function ComponentModal() {
  return `
    <div class="modalBanner">
      <div class="modalBanner__newBanner">
        <button class="newBanner__close">X</button>
        <div class="newBanner__movie">
          <form class="movie__form">
            <label class="form__input">
              <input class="input__img" type="text" name="urlBanner" id="urlBanner" placeholder="Enter URL Movie" required />
              <input class="input__name" type="text" name="name" id="name" placeholder="Name Of Movie" required />
            </label>
            <button class="form__submitBanner" type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function ComponentBanner(urlBanner, name) {
  return `
    <li class="list__imgs">
      <img
      class="imgs__img imgs__img--border"
      src="${urlBanner}"
      alt="${name}"
    />
  `;
}

function submitFormOfBanner() {
  const modal = document.querySelector(".modalBanner");
  const formBanner = document.querySelector(".form__submitBanner");
  formBanner.addEventListener("click", (e) => {
    e.preventDefault();
    const urlBanner = modal.querySelector("#urlBanner").value;
    const name = modal.querySelector("#name").value;
    data.push({ urlBanner, name });
    if (urlBanner === "" || name === "") {
      alert("add a valid value");
      data.pop();
      return;
    }
    data.forEach((post) => {
      const banner = document.querySelector(".footer__list");
      banner.innerHTML += ComponentBanner(post.urlBanner, post.name);
      handleChangeBanner();
    });
    data.pop();
  });
}