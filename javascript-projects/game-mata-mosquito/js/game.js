let lifes = 3
let time = 60

const timer = setInterval(() => {
    document.getElementById("time").innerText = --time
    if (!time) {
        window.location.href = "winning.html"
    }
}, 1000)

const getFlyPosition = () => {
    return {
        x: Math.floor(Math.random() * (windowDimensions.height - 90)),
        y: Math.floor(Math.random() * (windowDimensions.width - 90))
    }
}

const getFlyLength = () => {
    const lengthClasses = [
        "flySmall",
        "flyMedium",
        "flyBig"
    ]

    const flyLength = Math.floor(Math.random() * lengthClasses.length)
    return lengthClasses[flyLength]
}

const getFlySide = () => {
    const sideClasses = [
        "leftSide",
        "rightSide"
    ]

    const flySide = Math.floor(Math.random() * sideClasses.length)
    return sideClasses[flySide]
}

const spawnFly = () => {
    if (document.getElementById("fly")){
        document.getElementById("fly").remove()

        document.getElementById("life" + lifes--).src = "images/coracao_vazio.png"
        checkEndGame()
    }

    const flyPosition = getFlyPosition()

    let fly = document.createElement("img")
    fly.src = "images/mosca.png"
    fly.className = `${getFlyLength()} ${getFlySide()}`
    fly.style.position = "absolute"
    fly.style.top = flyPosition.x + "px"
    fly.style.left = flyPosition.y + "px"
    fly.id = "fly"
    fly.onclick = () => {
        document.getElementById("fly").remove()
    }

    document.body.appendChild(fly)
}

const checkEndGame = () => {
    if (lifes === 0){
        window.location.href = "gameover.html";
    }
}

const levels = {
    "hard": 1000,
    "medium": 1500,
    "easy": 2000
}

const level = window.location.search.replace("?", "")

setInterval(spawnFly, levels[level])
