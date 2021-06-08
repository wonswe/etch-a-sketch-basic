const body = document.querySelector('body');
const container = document.querySelector('.container');

// Generate Blocks (Divs) //
function addBlock() {
  const block = document.createElement('div');
  block.classList.add('block');
  container.appendChild(block);
}

function addBlocks(dimension) {
  document.documentElement.style.setProperty("--column", dimension);
  const numBlocks = Math.pow(dimension, 2);
  for (let i = 1; i < numBlocks + 1; i++) {
    addBlock();
  }
}

addBlocks(24);

// mouseover event //
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => block.addEventListener('mouseover', function(e) {
  e.target.style.backgroundColor = "white";
}));

