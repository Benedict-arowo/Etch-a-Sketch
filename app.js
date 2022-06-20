const board = document.getElementById("board");
const boxSize = document.getElementById("boxSize");
const updateBtn = document.getElementById("updateBtn");
let pixel = document.querySelectorAll(".pixels");

updateBtn.addEventListener("click", (e) => {
    let newSize = boxSize
    if (newSize.value >= 100){
        alert("Input Value is too high!")
    }
    else if (newSize.value <= 2) {
        alert("Input Value is too low!")
    }
    else {
        updateBoard(newSize.value)
        updatePixel()
    }    
})

const updateBoard = (size) => {
    clearBoard()
    board.style.cssText = `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`
    makePixels(size)
}

const clearBoard = () => {
    let currentBoardSize = board.children.length;
    for (let i = 0; i < currentBoardSize; i++) {
        board.children[0].remove()
    }
}

const makePixels = (pixelCount) => {
    for (let i = 0; i < (pixelCount * pixelCount); i++){
        let div = document.createElement("div");
        div.classList.add("pixels")
        board.appendChild(div)
    }
}

const updatePixel = () => {
    pixel = document.querySelectorAll(".pixels");
    
    pixel.forEach(pixels => {
        pixels.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "#" + hexColor();
        })
    })
}

const hexColor = () => {
    let color = "";
    let colorList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    
    for (let i = 0; i < 6; i++){
        let ranNum = Math.floor(Math.random() * colorList.length)
        color += colorList[ranNum]
    }
    return color;
    
}

updateBoard(16)
updatePixel()