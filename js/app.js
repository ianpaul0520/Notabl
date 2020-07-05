let classesObject = {
  isActive: "is-active",
};

let activateButton = document.getElementById("activate-button");
let myModal = document.getElementById("my-modal");
let modalBackground = document.getElementById("modal-background");
let modalClose = document.getElementById("modal-close");

activateButton.addEventListener("click", function () {
  myModal.classList.add(classesObject.isActive);
});

modalBackground.addEventListener("click", function () {
  myModal.classList.remove(classesObject.isActive);
});

function addClassFn(classname, element) {
  element.classList.add(classname);
}

function removeClassFn(classname, element) {
  element.classList.remove(classname);
}
