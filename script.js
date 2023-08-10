function createBoard(size){
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = "black";
        })
        board.insertAdjacentElement("beforeend", div);
    }
};

function getSize(){
    let input = prompt("Please select a size for the board: ");
    let message = document.querySelector("#message");
    if(input == "" || isNaN(input)){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Please provide a number between 1 and 100"
    }
    else{
        message.innerHTML = "Enjoy drawing!"
        return input;
    }
};

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    let selectButton = document.querySelector(".select-button");
    selectButton.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})