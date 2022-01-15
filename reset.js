let damage
function checkAccuracy(){
    randomNumber = Math.ceil(Math.random() * 100)
    if (randomNumber <= attackingCharacter[currentSkill]["accuracy"]){
        hitSound.play()
        targetCharacterHit()
    }else{
        missSound.play()
        messageLogs.innerHTML = "Attack Missed"
        setTimeout(() => {
            //statUpdate()
            deadChecker()
        }, 2000);
    }
    setTimeout(() => {
        for(let i = 0; i < 6; i++){
            isTargetHit[i] = false
        }
    
        for(let i = 0; i < 6; i++){
            if(targetCharacter === characters[i]){
                idleFunctions[i]()
                break
            }
        }
        for(let i = 0; i < 6; i++){
            if(attackingCharacter === characters[i]){
                idleFunctions[i]()
                break
            }
        }
    }, 1000);
}
    
function damageCalculation(){
    damage = Math.ceil(attackingCharacter[currentSkill]["damage"] * (attackingCharacter.currentAttack / targetCharacter.currentDefense))
    targetCharacter.currentHealth -= damage
    messageLogs.innerHTML = `${targetCharacter.name} received ${damage} damage`

    for(let i = 0; i < 6; i++){
        if(targetCharacter === characters[i]){
            index = i
            break
        }
    }
    if (targetCharacter.currentHealth <= 0){
        isDead[index] = true
        messageLogs.innerHTML = `${targetCharacter.name} died.`
    }
    //statUpdate()
    healthBar()
    setTimeout(() => {
        deadChecker()
    }, 2000);
}

function checkEnchancing(){
    if(attackingCharacter[currentSkill]["type"] === "Enhancer"){
        for(let i = 0; i < 6; i++){
            if(isEnchancing[i] === true){
                if(attackingCharacter[currentSkill]["boosting"] === "Attack"){
                    attackBoost1 = Math.ceil(attackingCharacter.currentAttack * (attackingCharacter[currentSkill]["value"] / 100))
                    if(attackingCharacter.currentAttack + attackBoost1 > attackingCharacter.maxAttack){
                        attackingCharacter.currentAttack = attackingCharacter.maxAttack
                        messageLogs.innerHTML = `Attack maxed`
                    } else {
                        attackingCharacter.currentAttack += attackBoost1
                        messageLogs.innerHTML = `Attack increased`
                    }
                    isEnchancing[i] = false
                    break
                }if(attackingCharacter[currentSkill]["boosting"] === "Defense"){
                    defenseBoost1 = Math.ceil(attackingCharacter.currentDefense * (attackingCharacter[currentSkill]["value"] / 100))
                    if(attackingCharacter.currentDefense + defenseBoost1 > attackingCharacter.maxDefense){
                        attackingCharacter.currentDefense = attackingCharacter.maxDefense
                        messageLogs.innerHTML = `Defense maxed`
                    } else {
                        attackingCharacter.currentDefense += defenseBoost1
                        messageLogs.innerHTML = `Defense increased`
                    }
                    isEnchancing[i] = false
                    break
                }if(attackingCharacter[currentSkill]["boosting"] === "Health"){
                    healthBoost[0] = Math.ceil(attackingCharacter.health * (attackingCharacter[currentSkill]["value"] / 100))
                    if(attackingCharacter.currentHealth + healthBoost[0] > attackingCharacter.health){
                        attackingCharacter.currentHealth = attackingCharacter.health
                        messageLogs.innerHTML = `Health Full`
                    } else {
                        attackingCharacter.currentHealth += healthBoost[0]
                        messageLogs.innerHTML = `Health increased`
                    }
                    healthSound.play()
                    isEnchancing[i] = false
                    break
                }
            }
        }
    } else if(attackingCharacter[currentSkill]["type"] === "Party Enhancer"){
        if(attackingCharacter === player1 || attackingCharacter === player2 || attackingCharacter === player3){
            if(attackingCharacter[currentSkill]["boosting"] === "Attack"){
                for(let i = 0; i < 3; i++){
                    attackBoost[i] = Math.ceil(characters[i]["currentAttack"] * (attackingCharacter[currentSkill]["value"] / 100))
                    if(characters[i]["currentAttack"] + attackBoost[i] > characters[i]["maxAttack"]){
                        characters[i]["currentAttack"] = characters[i]["maxAttack"]
                        setTimeout(() => {
                            messageLogs.innerHTML = `Attack maxed`
                        }, 1000);
                    } else {
                        characters[i]["currentAttack"] += attackBoost[i]
                        setTimeout(() => {
                            messageLogs.innerHTML = `Attack increased`
                        }, 1000);
                    }isEnchancing[i] = false
                }
            } else if(attackingCharacter[currentSkill]["boosting"] === "Defense"){
                for(let i = 0; i < 3; i++){
                    defenseBoost[i] = Math.ceil(characters[i]["currentDefense"] * (attackingCharacter[currentSkill]["value"] / 100))
                    if(characters[i]["currentDefense"] + defenseBoost[i] > characters[i]["maxDefense"]){
                        characters[i]["currentDefense"] = characters[i]["maxDefense"]
                        setTimeout(() => {
                            messageLogs.innerHTML = `Defense maxed`
                        }, 1000);
                    } else {
                        characters[i]["currentDefense"] += defenseBoost[i]
                        setTimeout(() => {
                            messageLogs.innerHTML = `Defense increased`
                        }, 1000);
                    }
                    isEnchancing[i] = false
                }
            } else if(attackingCharacter[currentSkill]["boosting"] === "Health"){
                for(let i = 0; i < 3; i++){
                    healthBoost[i] = Math.ceil(characters[i]["health"] * (attackingCharacter[currentSkill]["value"] / 100))
                    if(characters[i]["currentHealth"] + healthBoost[i] > characters[i]["health"]){
                        characters[i]["currentHealth"] = characters[i]["health"]
                    } else {
                        characters[i]["currentHealth"] += healthBoost[i]
                    }
                    healthSound.play()
                    isEnchancing[i] = false
                }
                messageLogs.innerHTML = `Party Health increased`
            }
        } else if(attackingCharacter === enemy1 || attackingCharacter === enemy2 || attackingCharacter === enemy3){
            if(attackingCharacter[currentSkill]["boosting"] === "Attack"){
                for(let i = 3; i < 6; i++){
                    characters[i]["currentAttack"] += Math.ceil(characters[i]["currentAttack"] * (attackingCharacter[currentSkill]["value"] / 100))
                    isEnchancing[i] = false
                }
            } else if(attackingCharacter[currentSkill]["boosting"] === "Defense"){
                for(let i = 3; i < 6; i++){
                    characters[i]["currentDefense"] += Math.ceil(characters[i]["currentDefense"] * (attackingCharacter[currentSkill]["value"] / 100))
                    isEnchancing[i] = false
                }
            } else if(attackingCharacter[currentSkill]["boosting"] === "Health"){
                for(let i = 3; i < 6; i++){
                    healthBoost[i] = Math.ceil(characters[i]["health"] * (attackingCharacter[currentSkill]["value"] / 100))
                    if(characters[i]["currentHealth"] + healthBoost[i] > characters[i]["health"]){
                        characters[i]["currentHealth"] = characters[i]["health"]
                    } else {
                        characters[i]["currentHealth"] += healthBoost[i]
                    }
                    healthSound.play()
                    isEnchancing[i] = false
                }
            }
        }
    }
    //statUpdate()
    healthBar()
    setTimeout(() => {
        deadChecker()
    }, 2000);
}
/*
function statUpdate() {
 document.getElementById("playerStats").innerHTML = `
                        Player 1 Current Health: ${player1.currentHealth}<br>
                        Player 1 Current Attack: ${player1.currentAttack}<br>
                        Player 1 Current Defense: ${player1.currentDefense}<br>
                        
                        Player 2 Current Health: ${player2.currentHealth}<br>
                        Player 2 Current Attack: ${player2.currentAttack}<br>
                        Player 2 Current Defense: ${player2.currentDefense}<br>
                        
                        Player 3 Current Health: ${player3.currentHealth}<br>
                        Player 3 Current Attack: ${player3.currentAttack}<br>
                        Player 3 Current Defense: ${player3.currentDefense}`

document.getElementById("enemyStats").innerHTML = `
                        Enemy 1 Current Health: ${enemy1.currentHealth}<br>
                        Enemy 1 Current Attack: ${enemy1.currentAttack}<br>
                        Enemy 1 Current Defense: ${enemy1.currentDefense}<br>
                        
                        Enemy 2 Current Health: ${enemy2.currentHealth}<br>
                        Enemy 2 Current Attack: ${enemy2.currentAttack}<br>
                        Enemy 2 Current Defense: ${enemy2.currentDefense}<br>
                        
                        Enemy 3 Current Health: ${enemy3.currentHealth}<br>
                        Enemy 3 Current Attack: ${enemy3.currentAttack}<br>
                        Enemy 3 Current Defense: ${enemy3.currentDefense}`
}
*/
function resetRound(round, level){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.style.backgroundSize = "100% 100%"
    if(level === 1){
        canvas.style.backgroundImage = "url(images/backgrounds/forest.png)"
        if(round === 1){
            enemy1 = duwende1
            enemy2 = duwende2
            enemy3 = duwende3
            nextRound = 2
            nextLevel = 1
            characterSelectMusic.pause()
            characterSelectMusic.currentTime = 0
            battleMusic1.play()
            setTimeout(() => {
                intro()
            }, 1000);
        } else if(round === 2){
            enemy1 = kapre
            enemy2 = duwende1
            enemy3 = duwende2
            nextRound = 1
            nextLevel = 2
            battleMusic1.currentTime = 0
        }
    } else if(level === 2){
        canvas.style.backgroundImage = "url(images/backgrounds/spanish.png)"
        if(round === 1){
            enemy1 = spanishSoldier1
            enemy2 = spanishSoldier2
            enemy3 = spanishSoldier3
            nextRound = 2
            nextLevel = 2
            battleMusic1.pause()
            battleMusic1.currentTime = 0
            battleMusic2.play()
        } else if(round === 2){
            enemy1 = duwende1
            enemy2 = spanishSoldier1
            enemy3 = spanishSoldier2
            nextRound = 3
            nextLevel = 2
            battleMusic2.play()
        } else if(round === 3){
            enemy1 = magellan
            enemy2 = spanishSoldier1
            enemy3 = spanishSoldier2
            nextRound = 1
            nextLevel = 3
            battleMusic2.pause()
            battleMusic2.currentTime = 0
            miniBossMusic.play()
            setTimeout(() => {
                intro()
            }, 1000);
        }
    } else if(level === 3){
        canvas.style.backgroundImage = "url(images/backgrounds/streets.png)"
        if(round === 1){
            enemy1 = spanishSoldier1
            enemy2 = duwende1
            enemy3 = duwende2
            nextRound = 2
            nextLevel = 3
            miniBossMusic.pause()
            miniBossMusic.currentTime = 0
            battleMusic2.play()
        } else if(round === 2){
            enemy1 = corruptPolice1
            enemy2 = spanishSoldier1
            enemy3 = duwende1
            nextRound = 3
            nextLevel = 3
            battleMusic2.play()
        } else if(round === 3){
            enemy1 = corruptPolice3
            enemy2 = spanishSoldier1
            enemy3 = spanishSoldier2
            nextRound = 4
            nextLevel = 3
            battleMusic2.play()
        } else if(round === 4){
            enemy1 = corruptPolice1
            enemy2 = corruptPolice2
            enemy3 = kapre
            nextRound = 5
            nextLevel = 3
            battleMusic2.play()
        } else if(round === 5){
            enemy1 = corruptPolitician
            enemy2 = corruptPolice1
            enemy3 = kapre
            nextLevel = 0
            battleMusic2.pause()
            battleMusic2.currentTime = 0
            finalBossMusic.play()
            setTimeout(() => {
                intro()
            }, 1000);
        }
    }
    enemy1IdleSpritesheet.src = enemy1.idle.spritesheetSrc
    enemy2IdleSpritesheet.src = enemy2.idle.spritesheetSrc
    enemy3IdleSpritesheet.src = enemy3.idle.spritesheetSrc
    enemy1EnhanceSpritesheet.src = enemy1.enhance.spritesheetSrc
    enemy2EnhanceSpritesheet.src = enemy2.enhance.spritesheetSrc
    enemy3EnhanceSpritesheet.src = enemy3.enhance.spritesheetSrc

    player1.currentHealth = player1.health
    player1.currentAttack = player1.attack
    player1.currentDefense = player1.defense

    player2.currentHealth = player2.health
    player2.currentAttack = player2.attack
    player2.currentDefense = player2.defense

    player3.currentHealth = player3.health
    player3.currentAttack = player3.attack
    player3.currentDefense = player3.defense

    enemy1.currentHealth = enemy1.health
    enemy1.currentAttack = enemy1.attack
    enemy1.currentDefense = enemy1.defense

    enemy2.currentHealth = enemy2.health
    enemy2.currentAttack = enemy2.attack
    enemy2.currentDefense = enemy2.defense

    enemy3.currentHealth = enemy3.health
    enemy3.currentAttack = enemy3.attack
    enemy3.currentDefense = enemy3.defense

    setTimeout(() => {
        startBattle()
    }, 500);
}
let introCounter = 0
let introLoop
let playerIntro = new Image();
let bubble = new Image();
function intro() {
    if(nextLevel === 1 && nextRound === 2){
        bubble.src = "images/Portraits/textBubble1.png"
        ctx.drawImage(bubble, 0, 0, gridLength * 5, gridLength * 1.5)
        ctx.textAlign = "center"
        ctx.font = `20px Verdana`
        if(introCounter < 600){
            if(introCounter <= 200){
                playerIntro.src = `images/Portraits/${player1.name}_nobg.png`
                ctx.fillText(player1.speech, gridLength * 2.5, gridLength / 2)
            } else if(introCounter <= 400){
                playerIntro.src = `images/Portraits/${player2.name}_nobg.png`
                ctx.fillText(player2.speech, gridLength * 2.5, gridLength / 2)
            } else if(introCounter <= 600){
                playerIntro.src = `images/Portraits/${player3.name}_nobg.png`
                ctx.fillText(player3.speech, gridLength * 2.5, gridLength / 2)
            }
            ctx.clearRect(gridLength * 2.5, gridLength * 1.5, gridLength * 2.5, gridLength * 2.5)
            ctx.drawImage(playerIntro, gridLength * 2.5, gridLength * 1.5, gridLength * 2.5, gridLength * 2.5)
            introCounter++
            introLoop = requestAnimationFrame(intro)
        } else {
            ctx.clearRect(0, 0, gridLength * 5, gridLength * 4)
            healthBar()
            introCounter = 0
            cancelAnimationFrame(introLoop)
        }
    }  else {
        bubble.src = "images/Portraits/textBubble2.png"
        ctx.drawImage(bubble, 0, 0, gridLength * 5, gridLength * 1.5)
        ctx.textAlign = "center"
        ctx.fillStyle = "black"
        ctx.font = `20px Verdana`
        if(introCounter < 200){
            playerIntro.src = `images/Portraits/${enemy1.name}_nobg.png`
            ctx.fillText(enemy1.speech, gridLength * 2.5, gridLength / 2)
            ctx.clearRect(0, gridLength * 1.5, gridLength * 2.5, gridLength * 2.5)
            ctx.drawImage(playerIntro, 0, gridLength * 1.5, gridLength * 2.5, gridLength * 2.5)
            introCounter++
            introLoop = requestAnimationFrame(intro)
        } else {
            ctx.clearRect(0, 0, gridLength * 5, gridLength * 4)
            healthBar()
            introCounter = 0
            cancelAnimationFrame(introLoop)
        }
    }
}
