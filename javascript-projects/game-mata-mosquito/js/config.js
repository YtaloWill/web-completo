let windowDimensions = {
    width: 0,
    height: 0
}

const getDimensions = () => {
    windowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

getDimensions()


const startGame = () => {
    const level = document.getElementById("level").value

    if(level) window.location.href = "game.html?" + level
    
    alert("Selecione um nivel")
}