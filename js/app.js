let mySelect = document.getElementById("mySelect");

mySelect.onchange = function () {
  console.log(Math.floor(Math.random()) * Math.floor(100));
};
console.log(mySelect.options);
