const tPg = document.getElementById("TitlePage")
const main = document.getElementById("primaryGame")
const value2 = document.getElementById("dF2")
const value3 = document.getElementById("dF3")
const value4 = document.getElementById("dF4")
const value5 = document.getElementById("dF5")
const value6 = document.getElementById("dF6")
const loss = document.getElementById("lose")
const victory = document.getElementById("win")
let tPgBtn = document.getElementById("TitleButton")
let BtnMain = document.getElementById("PrimaryButton")
let Btn1 = document.getElementById("LossButton")
let Btn2 = document.getElementById("DiceButton2")
let Btn3 = document.getElementById("DiceButton3")
let Btn4 = document.getElementById("DiceButton4")
let Btn5 = document.getElementById("DiceButton5")
let Btn6 = document.getElementById("DiceButton6")
let currentRoll = Math.ceil(Math.random() * 6)
let rollScore = () => {
    return(currentRoll)
}
let currentScore = 0
let scoreDisplay = document.getElementsByClassName("score")
// let btn = document.getElementsByid("DieButton")
let dDsply = document.getElementById("Die_Display")


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
        scoreDisplay.innerHTML = "<p>" + `${currentScore}` + "</p>"
        
    } else if (currentRoll == 2 && currentScore <= 20) {
        value2.style.display = "flex"
        tPg.style.display = "none"
        // loss.style.display = "none"
        // value3.style.display = "none"
        // value4.style.display = "none"
        // value5.style.display = "none"
        // value6.style.display = "none"
        scoreDisplay.innerHTML = "<p>" + `${currentScore}` + "</p>"
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
        scoreDisplay.innerHTML = "<p>" + `${currentScore}` + "</p>"
        
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
        scoreDisplay.innerHTML = "<p>" + `${currentScore}` + "</p>"
        
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
        scoreDisplay.innerHTML = "<p>" + `${currentScore}` + "</p>"
        
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
        scoreDisplay.innerHTML = "<p>" + `${currentScore}` + "</p>"
        
        return(currentScore + 6)
    } else if (currentScore >= 21) {
        victory.style.display = "flex"
        tPg.style.display = "none"
        main.style.display = "none"
        scoreDisplay.innerHTML = "<p>" + `${currentScore}` + "</p>"

        return(currentScore)
    } else {
        alert("This Game Is Broken")
    }
}

// ^ Had to comment out some of this because when I had the buttons working a bit they broke when this was inputted. This is supposed to be an if else statement to be called by various buttons so that the game can be played.

tPgBtn.addEventListener("click", () => {
    currentRoll
    alert(`Score : ${currentScore}`)
    DiceBtn()
    rollScore()
    return(currentScore) 
})

// ^ This is the Title page button of which is clicked to begin a new game.

BtnMain.addEventListener("click", () => {
    main.style.display = "none"
    currentRoll
    alert(`Score : ${currentScore}`)
    DiceBtn()
    rollScore()
})

// ^ I designed this button to try and link the other buttons together but I am now doubting this was the issue in the first place.

Btn1.addEventListener("click", () => {
    tPg.style.display = "flex"
    loss.style.display = "none"
})

// ^ This is the button of which is displayed if the player rolls a 1 (This actually works!)

Btn2.addEventListener("click", () => {
    
    
    currentRoll
    alert(`Score : ${currentScore}`)
    DiceBtn()
    rollScore()
    main.style.display = "flex"
    value2.style.display = "none"
    return(currentScore)
})

Btn3.addEventListener("click", () => {
    
    
    currentRoll
    alert(`Score : ${currentScore}`)
    DiceBtn()
    rollScore()
    main.style.display = "flex"
    value3.style.display = "none"
    return(currentScore)
})

Btn4.addEventListener("click", () => {
    main.style.display = "flex"
    value4.style.display = "none"
    
    currentRoll
    alert(`Score : ${currentScore}`)
    DiceBtn()
    rollScore()
    return(currentScore)
})

Btn5.addEventListener("click", () => {
    main.style.display = "flex"
    value5.style.display = "none"
    
    currentRoll
    alert(`Score : ${currentScore}`)
    DiceBtn()
    rollScore()
    return(currentScore)
})

Btn6.addEventListener("click", () => {
    
    currentRoll
    alert(`Score : ${currentScore}`)
    DiceBtn()
    rollScore()
    main.style.display = "flex"
    value6.style.display = "none"
    return(currentScore)
})

// ^ Buttons 2 - 6 don't work, and I cannot figure out why. These are supposed to come up whenever their value is met, then allow the player to move onto the next Dice Roll.