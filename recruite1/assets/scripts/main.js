// ハンバーガーメニュー
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".js-hamburger");
  const body = document.querySelector("body");
  const nav = document.querySelector(".p-nav");
  const navBody = document.querySelector(".p-nav__body");
  const navButton = document.querySelector(".p-nav__button");
  const buttonSquare = document.querySelector(".c-button-square");
  const headerLogo = document.querySelector('.header-logo');

  // メニューの開閉をトグルする関数
  const toggleMenu = () => {
    body.classList.toggle("is-open");
    nav.classList.toggle("is-open");
    navBody.classList.toggle("is-open");
    navButton.classList.toggle("is-open");
    buttonSquare.classList.toggle("is-open");
  };

  // ハンバーガーボタンのクリックイベント
  hamburger.addEventListener("click", toggleMenu);

  // body内のクリックイベント
  document.addEventListener("click", (e) => {
    // メニューが開いており、クリックされた要素がハンバーガーメニューやその子要素ではない場合に閉じる
    if (body.classList.contains("is-open") && !hamburger.contains(e.target)) {
      toggleMenu();
    }
  });
});

