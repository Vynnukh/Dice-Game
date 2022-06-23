const tPg = document.getElementById("TitlePage")
const btn = document.getElementById("DieButton")
const main = document.getElementById("primary")
const loss = document.getElementById("lose")
const victory = document.getElementById("win")
let currentRoll = Math.ceil(Math.random() * 6)
let currentScore = document.getElementById("score")

const Die = [
    "./imgs/dice_face_1.png",
    "./imgs/dice_face_2.png",
    "./imgs/dice_face_3.png",
    "./imgs/dice_face_4.png",
    "./imgs/dice_face_5.jpg",
    "./imgs/dice_face_6.png"
]

btn.addEventListener("click", () => {
    if(currentRoll === 1) {
        tPg.style.display = "none"
        loss.style.display = "flex"
    } else if (currentRoll === 2 && currentScore >= 20) {
        tPg.style.display = "none"
        main.style.display = "flex"
        return(currentScore + 2)
    } else if (currentRoll === 3 && currentScore >= 20) {
        tPg.style.display = "none"
        main.style.display = "flex"
        return(currentScore + 3)
    } else if (currentRoll === 4 && currentScore >= 20) {
        tPg.style.display = "none"
        main.style.display = "flex"
        return(currentScore + 4)
    } else if (currentRoll === 5 && currentScore >= 20) {
        tPg.style.display = "none"
        main.style.display = "flex"
        return(currentScore + 5)
    } else if (currentRoll === 6 & currentScore >= 20) {
        tPg.style.display = "none"
        main.style.display = "flex"
        return(currentScore + 6)
    } else {
        tPg.style.display = "none"
        main.style.display = "none"
        victory.style.display = "flex"
        
    }
})