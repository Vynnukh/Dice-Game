const tPg = document.getElementById("TitlePage")
const btn = document.getElementById("DieButton")
const main = document.getElementById("primary")
const value3 = document.getElementById("dF3")
const value4 = document.getElementById("dF4")
const value5 = document.getElementById("dF5")
const value6 = document.getElementById("dF6")
const loss = document.getElementById("lose")
const victory = document.getElementById("win")
let currentRoll = Math.ceil(Math.random() * 6)
let currentScore = 0
let scoreDisplay = document.getElementById("score")

const Die = {
    "./imgs/dice_face_1.png":1,
    "./imgs/dice_face_2.png":2,
    "./imgs/dice_face_3.png":3,
    "./imgs/dice_face_4.png":4,
    "./imgs/dice_face_5.jpg":5,
    "./imgs/dice_face_6.png":6
}

btn.addEventListener("click", () => {
    currentRoll
    if(currentRoll === 1 && currentScore <= 20) {
        tPg.style.display = "none"
        loss.style.display = "flex"
    } else if (currentRoll == 2 && currentScore <= 20) {
        tPg.style.display = "none"
        main.style.display = "flex"
        return(currentScore + 2)
    } else if (currentRoll == 3 && currentScore <= 20) {
        tPg.style.display = "none"
        value3.style.display = "flex"
        return(currentScore + 3)
    } else if (currentRoll == 4 && currentScore <= 20) {
        tPg.style.display = "none"
        value4.style.display = "flex"
        return(currentScore + 4)
    } else if (currentRoll == 5 && currentScore <= 20) {
        tPg.style.display = "none"
        value5.style.display = "flex"
        return(currentScore + 5)
    } else if (currentRoll == 6 & currentScore <= 20) {
        tPg.style.display = "none"
        value6.style.display = "flex"
        return(currentScore + 6)
    } else if (currentScore >= 21) {
        tPg.style.display = "none"
        main.style.display = "none"
        victory.style.display = "flex"
    }
})