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
    if (document.getElementById("fly"))
        document.getElementById("fly").remove()

    const flyPosition = getFlyPosition()

    let fly = document.createElement("img")
    fly.src = "images/mosca.png"
    fly.className = `${getFlyLength()} ${getFlySide()}`
    fly.style.position = "absolute"
    fly.style.top = flyPosition.x + "px"
    fly.style.left = flyPosition.y + "px"
    fly.id = "fly"

    document.body.appendChild(fly)
}

// setInterval(spawnFly, 50)
