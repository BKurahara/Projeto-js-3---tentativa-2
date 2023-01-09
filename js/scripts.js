// const color1 = document.querySelector("#green");
// const color2 = document.querySelector("#silver");
// const color3 = document.querySelector("#golden");
// const color4 = document.querySelector("#grafite");
// const color5 = document.querySelector("#blue");
// const allColor = document.querySelector(".color");
// //const buttons = [color1, color2, color3, color4, color5];

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#image-phone");

const classSelector = document.querySelector(".selected");

//Funções básicas

function colorSelectedRemove() {
  buttons.forEach((colorButton) => {
    colorButton.querySelector(".color").classList.remove("selected");
  });
}
function colorSelectedAdd(evento) {
  evento.querySelector(".color").classList.add("selected");
}

//Eventos
buttons.forEach((colorButton) => {
  colorButton.addEventListener("click", (e) => {
    console.log(e);

    colorSelectedRemove();

    const button = e.target;

    const colorId = button.getAttribute("id");
    colorSelectedAdd(button);

    image.classList.add("changing");

    image.setAttribute("src", `img/iphone_${colorId}.jpg`);
    setTimeout(() => {
      image.classList.remove("changing");
    }, 200);
  });
});

//tentativa de Modo escuro

const btnDark = document.querySelector(".btn-dark-mode");
const menu = document.querySelector("#main-contender");
const fixedHeader = document.querySelector(".fixed-header");
const ribbon = document.querySelector(".ribbon");

btnDark.addEventListener("click", () => {
  menu.classList.toggle("dark-mode");
  fixedHeader.classList.toggle("dark-header-mode");
  ribbon.classList.toggle("ribbon-dark");

  return;
});
