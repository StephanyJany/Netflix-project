const openPartyModal = document.querySelectorAll(".cards__card");
const partyModal = document.querySelector("#partyModal");
const fade = document.querySelector("#fade");
const closeBtn = document.querySelector("#partyModalCloseBtn")
const togglers = document.querySelectorAll(".cards__card, #fade", closeBtn);

const toggleFunction = () => {
  partyModal.classList.toggle("hidden");
  fade.classList.toggle("hidden");
};

function ComponentModal(movie, title, description, first_user, second_user, third_user) {
  return `
    <a href="#" class="partyModal__modal">
      <button id="partyModalCloseBtn">X</button>
      <div class="modal__top">
        <img
        src="${movie}"
        alt="Miniatura do Filme"
        class="top__movieCover"
        id="movieCover"
        />
      </div> 
      <div class="modal__bottom">
        <div class="bottom__description bottom__description--modal">
          <h2 class="description__title modal__title">${title}</h2>
          <p class="description__text modal__description">
          ${description}
          </p>
        </div>
          <picture class="bottom__watchTogether">
          <img
            src="${first_user}"
            alt="Usuario1"
            class="watchTogether__watcher watchTogether__watcher-1 modalWatcher"
          />
          <img
            src="${second_user}"
            alt="Usuario2"
            class="watchTogether__watcher watchTogether__watcher-2 modalWatcher"
          />
          <img
            src="${third_user}"
            alt="Usuario3"
            class="watchTogether__watcher watchTogether__watcher-3 modalWatcher"
          />
        </picture>
      </div>
    </a>
  `
}

openPartyModal.forEach((opener) => {
  opener.addEventListener("click", () => {
    const movie = opener.querySelector(".top__movieCover").getAttribute("src")
    const title = opener.querySelector(".bottom__title").innerHTML
    const description = opener.querySelector(".bottom__description").innerHTML
    const first_user = opener.querySelector(".watchTogether__watcher-1").getAttribute("src")
    const second_user = opener.querySelector(".watchTogether__watcher-2").getAttribute("src")
    const third_user = opener.querySelector(".watchTogether__watcher-3").getAttribute("src")


    partyModal.innerHTML = ComponentModal(movie, title, description, first_user, second_user, third_user);
    const closeBtn = document.querySelector("#partyModalCloseBtn")
    closeBtn.addEventListener("click", (e) => toggleFunction())
  });
});

togglers.forEach((toggler) => {
  toggler.addEventListener("click", () => toggleFunction());
});






