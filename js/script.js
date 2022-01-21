getText("../portfolio.json");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("test").innerHTML = myText;
}