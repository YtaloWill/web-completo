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
