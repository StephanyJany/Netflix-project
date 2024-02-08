export function handleChangeBanner() {
  const btns = document.querySelectorAll(".footer__list .imgs__img");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let banner = document.querySelector("#banner");
      let title = document.querySelector(".title__movie");
      const img = btn.getAttribute("src");
      const text = btn.getAttribute("alt");
      banner.style.backgroundImage = `url(${img})`;
      title.textContent = text;
    });
  });
}
