const tPg = document.getElementById("TitlePage")
const main = document.getElementById("primaryGame")
const value3 = document.getElementById("dF3")
const value4 = document.getElementById("dF4")
const value5 = document.getElementById("dF5")
const value6 = document.getElementById("dF6")
const loss = document.getElementById("lose")
const victory = document.getElementById("win")
let tPgBtn = document.getElementById("TitleButton")
let Btn2 = document.getElementById("PrimaryButton")
let Btn3 = document.getElementById("DiceButton3")
let Btn4 = document.getElementById("DiceButton4")
let Btn5 = document.getElementById("DiceButton5")
let Btn6 = document.getElementById("DiceButton6")
let currentRoll = Math.ceil(Math.random() * 6)
let currentScore = 0
let scoreDisplay = document.getElementsByClassName("score")
// let btn = document.getElementsByid("DieButton")
let dDsply = document.getElementById("Die_Display")

const Die = {
    "./imgs/dice_face_1.png":1,
    "./imgs/dice_face_2.png":2,
    "./imgs/dice_face_3.png":3,
    "./imgs/dice_face_4.png":4,
    "./imgs/dice_face_5.jpg":5,
    "./imgs/dice_face_6.png":6
}

// ^ Still figuring out how this array can be implemented properly
let DiceBtnB = () => {
    if(currentRoll === 1 && currentScore <= 20) {
        loss.style.display = "flex"
        loss.style.justifyContent = "space-evenly"
        tPg.style.display = "none"
    } else if (currentScore <= 20) {
        main.style.display = "flex"
        tPg.style.display = "none"
        dDsply.style.display = "flex"
        dDsply.src = Die[currentRoll-1]
        return(currentRoll)
    } else if (currentScore >= 21) {
        victory.style.display = "flex"
        tPg.style.display = "none"
        main.style.display = "none"
    } else {
        alert("This Game Is Broken")
    }
}
let DiceBtn = () => {
    if(currentRoll === 1 && currentScore <= 20) {
        loss.style.display = "flex"
        loss.style.justifyContent = "space-evenly"
        tPg.style.display = "none"
        // main.style.display = "none"
        // value3.style.display = "none"
        // value4.style.display = "none"
        // value5.style.display = "none"
        // value6.style.display = "none"
        scoreDisplay.innerHTML = "<h2>" + `${currentScore}` + "</h2>"
        
    } else if (currentRoll == 2 && currentScore <= 20) {
        main.style.display = "flex"
        tPg.style.display = "none"
        // loss.style.display = "none"
        // value3.style.display = "none"
        // value4.style.display = "none"
        // value5.style.display = "none"
        // value6.style.display = "none"
        scoreDisplay.innerHTML = "<h2>" + `${currentScore}` + "</h2>"
        return(currentScore + 2)
    } else if (currentRoll == 3 && currentScore <= 20) {
        value3.style.display = "flex"
        value3.style.justifyContent = "space-evenly"
        tPg.style.display = "none"
        // main.style.display = "none"
        // loss.style.display = "none"
        // value4.style.display = "none"
        // value5.style.display = "none"
        // value6.style.display = "none"
        scoreDisplay.innerHTML = "<h2>" + `${currentScore}` + "</h2>"
        
        return(currentScore + 3)
    } else if (currentRoll == 4 && currentScore <= 20) {
        value4.style.display = "flex"
        value4.style.justifyContent = "space-evenly"
        tPg.style.display = "none"
        // main.style.display = "none"
        // value3.style.display = "none"
        // loss.style.display = "none"
        // value5.style.display = "none"
        // value6.style.display = "none"
        scoreDisplay.innerHTML = "<h2>" + `${currentScore}` + "</h2>"
        
        return(currentScore + 4)
    } else if (currentRoll == 5 && currentScore <= 20) {
        value5.style.display = "flex"
        value5.style.justifyContent = "space-evenly"
        tPg.style.display = "none"
        // main.style.display = "none"
        // value3.style.display = "none"
        // value4.style.display = "none"
        // loss.style.display = "none"
        // value6.style.display = "none"
        scoreDisplay.innerHTML = "<h2>" + `${currentScore}` + "</h2>"
        
        return(currentScore + 5)
    } else if (currentRoll == 6 & currentScore <= 20) {
        value6.style.display = "flex"
        value6.style.justifyContent = "space-evenly"
        tPg.style.display = "none"
        // main.style.display = "none"
        // value3.style.display = "none"
        // value4.style.display = "none"
        // value5.style.display = "none"
        // loss.style.display = "none"
        scoreDisplay.innerHTML = "<h2>" + `${currentScore}` + "</h2>"
        
        return(currentScore + 6)
    } else if (currentScore >= 21) {
        victory.style.display = "flex"
        tPg.style.display = "none"
        main.style.display = "none"
        scoreDisplay.innerHTML = "<h2>" + `${currentScore}` + "</h2>"

        return(currentScore)
    } else {
        alert("This Game Is Broken")
    }
}

// ^ Had to comment out some of this because when I had the buttons working a bit they broke when this was inputted

tPgBtn.addEventListener("click", () => {
    currentRoll
    alert("???")
    DiceBtn()
})

Btn2.addEventListener("click", () => {
    currentRoll
    alert("???")
    DiceBtn()
})

Btn3.addEventListener("click", () => {
    currentRoll
    alert("???")
    DiceBtn()
})

Btn4.addEventListener("click", () => {
    currentRoll
    alert("???")
    DiceBtn()
})

Btn5.addEventListener("click", () => {
    currentRoll
    alert("???")
    DiceBtn()
})

Btn6.addEventListener("click", () => {
    currentRoll
    alert("???")
    DiceBtn()
})