const container = document.querySelector('#container');

const btn = document.querySelector('#btn');

function createBoxes() {
    let numBoxes = prompt('number of squares per side: ', 20);

    if(numBoxes <= 100) {
        for(i = 0; i < numBoxes; i++) {
        

            for(j = 0; j < numBoxes; j++) {
                const boxes = document.createElement('div');
                boxes.classList.add('boxes');
                boxes.style.setProperty('height', `${Math.floor(1 / numBoxes * 100)}%`);
                boxes.style.setProperty("width", `${Math.floor(1 / numBoxes * 100)}%`);
                container.appendChild(boxes);
                
    
                boxes.addEventListener(
                    "mouseenter",
                    (event) => {
                        event.target.style.backgroundColor = getRandColor();
                
                        setTimeout(() => {
                            event.target.style.backgroundColor = "";
                        }, 1000);
                    },
                    false,
                );
            }
    
            
        }
    }
    else {
        alert('Please enter a number 100 or less!');
    }
    }

    

function clearBoard() {
    let board = document.getElementById('container');
    while (board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
}

function getRandColor() {
    let colors = ["orangered", "yellow", 'lime', 'aqua', 'violet'];

    let randColor = colors[Math.floor(Math.random() * colors.length)];
    
    return randColor;
}

btn.addEventListener('click', () => {
    clearBoard();
    createBoxes();
    
})


