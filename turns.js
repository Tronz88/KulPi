function skillSelector(character){
    if(character === "player"){
        document.getElementById("battleButtons").innerHTML = ""
        document.getElementById("battleButtons").innerHTML += `
        <button onclick="skillTypeChecker('enemy', 'skill1')" id="skill1Button">${attackingCharacter.skill1.name}</button>`

        document.getElementById("battleButtons").innerHTML += `
        <button onclick="skillTypeChecker('enemy', 'skill2')" id="skill2Button">${attackingCharacter.skill2.name}</button>`
    } else if(character === "enemy"){
        randomNumber = Math.ceil(Math.random() * 100)
        if(randomNumber  <= 75){
            skillTypeChecker('player', 'skill1')
        } else {
            skillTypeChecker('player', 'skill2')
        }
    }
}
function targetSelector(character){
    document.getElementById("battleButtons").innerHTML = ""
    if(character === "enemy"){
        buttonSound.play()
        if(isDead[3] === false){
            document.getElementById("battleButtons").innerHTML = `
            <button onclick="changeTargetCharacter(enemy1)">Enemy 1 Target</button>`
        } if(isDead[4] === false){
            document.getElementById("battleButtons").innerHTML += `
            <button onclick="changeTargetCharacter(enemy2)">Enemy 2 Target</button>`
        } if(isDead[5] === false){
            document.getElementById("battleButtons").innerHTML += `
            <button onclick="changeTargetCharacter(enemy3)">Enemy 3 Target</button>`
        }
    } else if (character === "player"){
        for(let i = 1; i <= 3; i++){
            randomNumber  = Math.ceil(Math.random() * 3)
            if(randomNumber === 1){
                if(isDead[0] === false){
                    changeTargetCharacter(player1)
                    break
                }
            } else if (randomNumber === 2){
                if(isDead[1] === false){
                    changeTargetCharacter(player2)
                    break
                }
            } else {
                if(isDead[2] === false){
                    changeTargetCharacter(player3)
                    break
                }
            }
        }
    }
}
function skillTypeChecker(character, skill){
    if(skill === "skill1"){
        currentSkill = "skill1"
    } else if(skill === "skill2"){
        currentSkill = "skill2"
    }
    if(attackingCharacter[currentSkill]["type"] === "Attack"){
        targetSelector(character)
    } else {
        characterHitChecker()
    }
}
function skillSounds() {
    if(attackingCharacter[currentSkill]["name"] === "Slash" || 
       attackingCharacter[currentSkill]["name"] === "Slice" || 
       attackingCharacter[currentSkill]["name"] === "Chop" ||
       attackingCharacter[currentSkill]["name"] === "Pierce"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Slash.ogg"
        skillSound.play()
    }
    if(attackingCharacter[currentSkill]["name"] === "Touch Me Not" || 
       attackingCharacter[currentSkill]["name"] === "Unfair Judgement"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Touch Me Not.ogg"
        skillSound.play()
    }
    if(attackingCharacter[currentSkill]["name"] === "Precision Fire" ||
       attackingCharacter[currentSkill]["name"] === "Brutality"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Precision Fire.ogg"
        skillSound.play()
    } else if(attackingCharacter[currentSkill]["name"] === "Unleash Fire"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Unleash Fire.ogg"
        skillSound.play()
    }
    if(attackingCharacter[currentSkill]["name"] === "Ritual Curse"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Ritual Curse.ogg"
        skillSound.play()
    }
    if(attackingCharacter[currentSkill]["name"] === "Wing Slash"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Wing Slash.ogg"
        skillSound.play()
    } 
    if(attackingCharacter[currentSkill]["name"] === "Siren's Rage"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Siren's Rage.ogg"
        skillSound.play()
    } else if(attackingCharacter[currentSkill]["name"] === "Wrath of the Ocean"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Wrath of the Ocean.ogg"
        skillSound.play()
    }
    if(attackingCharacter[currentSkill]["name"] === "Slap"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Slap.ogg"
        skillSound.play()
    }
    if(attackingCharacter[currentSkill]["name"] === "Peck"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Peck.ogg"
        skillSound.play()
    } else if(attackingCharacter[currentSkill]["name"] === "Wild Charge"){
        let skillSound = new Audio();
        skillSound.src = "sound effects/Wild Charge.ogg"
        skillSound.play()
    }
}
/* 
let isEnemy1Selected = false
canvas.addEventListener('click', (event) => {
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    console.log("x: " + x +" and y: " + y)
    clickEnemy1(x, y)
})
function clickEnemy1(xMouse, yMouse){
    if (xMouse >= gridLength && xMouse <= gridLength * 2 && yMouse >= gridLength * 2.5 && yMouse <= gridLength * 3.5){
        ctx.strokeRect(gridLength, gridLength * 2.5, gridLength, gridLength)
        ctx.lineWidth = "5px"
    }
}
*/
