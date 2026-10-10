const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');


for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
}

for (const list of lists) {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave);
  list.addEventListener('drop', dragDrop);
}


function dragStart (e) {
  // Allows the drop location to know which element is being moved when you release it
  e.dataTransfer.setData("text/plain", this.id);
  // 👆 'this' refers to the element being dragged - so here we are setting it by it's id attribute
}


function dragOver (e) {
  // By default browsers don't allow you to drop elements on other elements
  e.preventDefault()
}


function dragEnter (e) {
  e.preventDefault();
  this.classList.add('over')
}


function dragLeave (e) {
  this.classList.remove("over");
}


function dragDrop (e) {
  // Get the data about the element being dropped
  const id = e.dataTransfer.getData("text/plain")

  const card = document.getElementById(id)
  this.appendChild(card)
  this.classList.remove('over')
}