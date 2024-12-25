let gridSize = 16;
const containerSize = 500; 

function createGrid(size) {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";

  
  const squareSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.style.width = `${squareSize}px`;
    gridItem.style.height = `${squareSize}px`;
    gridItem.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridItem);
  }
}

function changeColor(e) {
  const item = e.target;

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function changeGridSize() {
  let newSize = parseInt(
    prompt("Enter the number of squares per side (max 100):")
  );
  if (newSize <= 100 && newSize > 0) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert("Please enter a valid number between 2 and 100.");
  }
}

function resetGrid() {
  createGrid(gridSize);
}

document
  .getElementById("changeGridSize")
  .addEventListener("click", changeGridSize);

document.getElementById("resetGrid").addEventListener("click", resetGrid);

createGrid(gridSize);
