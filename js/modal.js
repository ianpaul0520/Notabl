// Activation of Modal
// Declairing Select Element.
let mySelect = document.getElementById("mySelect");

function createTaskForm(parent) {}

function cardContainer(child) {
  let column = document.getElementById("container");

  let card = document.createElement("DIV");
  let cardContent = document.createElement("DIV");
  let para = document.createElement("p");
  let textNode = document.createTextNode("Hello World");
  cardContent.classList.add("card-content");
  para = para.innerHTML = textNode;
  cardContent = cardContent.appendChild(para);
  card = card.appendChild(cardContent);

  column.appendChild(card);
  console.log(card);
}
function createNoteForm(parent) {}

cardContainer();
function createInput(element, times) {
  if (element == undefined) {
    console.log("Element argument is undefined/Not Exist.");
  }
  if (times == undefined) {
    let myElement = document.createElement(element.toUpperCase());
    myElement.classList.add("input");
  }
}
