function characterHitChecker(skill){
    if(attackingCharacter === player1){
        cancelAnimationFrame(player1IdleLoop)
    } else if(attackingCharacter === player2){
        cancelAnimationFrame(player2IdleLoop)
    } else if(attackingCharacter === player3){
        cancelAnimationFrame(player3IdleLoop)
    } else if(attackingCharacter === enemy1){
        cancelAnimationFrame(enemy1IdleLoop)
    } else if(attackingCharacter === enemy2){
        cancelAnimationFrame(enemy2IdleLoop)
    } else if(attackingCharacter === enemy3){
        cancelAnimationFrame(enemy3IdleLoop)
    }
    gameFrameAttackingCharacter = 0
    frameAttackingCharacter = 0
    gameFrameTargetCharacter = 0
    frameTargetCharacter = 0
    document.getElementById("battleButtons").innerHTML = ""

    if (skill === "skill1"){
        if(attackingCharacter.skill1.type === "Attack"){
            if(targetCharacter === player1){
                isTargetPlayer1Hit = true
            } else if(targetCharacter === player2){
                isTargetPlayer2Hit = true
            } else if(targetCharacter === player3){
                isTargetPlayer3Hit = true
            } else if(targetCharacter === enemy1){
                isTargetEnemy1Hit = true
            } else if(targetCharacter === enemy2){
                isTargetEnemy2Hit = true
            } else if(targetCharacter === enemy3){
                isTargetEnemy3Hit = true
            }
        }
        attackingCharacterSkill1()
    } else if(skill === "skill2"){
        if(attackingCharacter.skill1.type === "Attack"){
            if(targetCharacter === player1){
                isTargetPlayer1Hit = true
            } else if(targetCharacter === player2){
                isTargetPlayer2Hit = true
            } else if(targetCharacter === player3){
                isTargetPlayer3Hit = true
            } else if(targetCharacter === enemy1){
                isTargetEnemy1Hit = true
            } else if(targetCharacter === enemy2){
                isTargetEnemy2Hit = true
            } else if(targetCharacter === enemy3){
                isTargetEnemy3Hit = true
            }
        }
        attackingCharacterSkill2()
    }
}

function changeAttackingCharacter(attacker){
    for(let i= 0; i < 6; i++){
        if(attacker === characters[i]){
            attackingCharacter = characters[i]
            characterPosX = characterPosXArray[i]
            characterPosY = characterPosYArray[i]
            attackingCharacterSkill1Spritesheet.src = attackingCharacter.skill1.spritesheetSrc
            attackingCharacterSkill2Spritesheet.src = attackingCharacter.skill2.spritesheetSrc
            attackingCharacterEnhanceSpritesheet.src = attackingCharacter.enhance.spritesheetSrc
            messageLogs.innerHTML = `${characters[i].name}'s turn`
            break
        }
    }
}
function changeTargetCharacter(target){
    for(let i = 0; i < 6;i++){
        if(target === characters[i]){
            targetCharacter = characters[i]
            characterHitPosX = characterPosXArray[i]
            characterHitPosY = characterPosYArray[i]
            targetCharacterHitSpritesheet.src = targetCharacter.hit.spritesheetSrc
            if(i < 3){
                characterHitChecker(currentSkill)
            } else {
                characterHitChecker(currentSkill)
            }
            break
        }
    }
}
function attackingCharacterSkill1(){
    messageLogs.innerHTML = `${attackingCharacter.name} used ${attackingCharacter.skill1.name}`
    if (attackingCharacter.skill1.type === "Attack") {
        if(gameFrameAttackingCharacter !== (attackingCharacter.skill1.frameCount * animationSpeed)){
        ctx.clearRect(characterPosX, characterPosY, gridLength, gridLength)
            ctx.drawImage(attackingCharacterSkill1Spritesheet, frameAttackingCharacter * spriteWidth, 0, spriteWidth, spriteHeight, characterPosX, characterPosY, gridLength, gridLength)
            if (gameFrameAttackingCharacter % animationSpeed === 0) {
                if (frameAttackingCharacter < attackingCharacter.skill1.frameCount) {
                    frameAttackingCharacter++
                } else {
                    (frameAttackingCharacter = 0)
                }
            }
            gameFrameAttackingCharacter++
            requestAnimationFrame(attackingCharacterSkill1)
        } else {
            targetCharacterHit()
        }
    } else if(attackingCharacter.skill1.type === "Enhancer"){
        if(gameFrameAttackingCharacter !== (13 * animationSpeed) - 4 ){
        ctx.clearRect(characterPosX, characterPosY, gridLength, gridLength)
            ctx.drawImage(attackingCharacterEnhanceSpritesheet, frameAttackingCharacter * spriteWidth, 0, spriteWidth, spriteHeight, characterPosX, characterPosY, gridLength, gridLength)
            if (gameFrameAttackingCharacter % animationSpeed === 0) {
                if (frameAttackingCharacter < 12) {
                    frameAttackingCharacter++
                } else {
                    (frameAttackingCharacter = 0)
                }
            }
            gameFrameAttackingCharacter++
            requestAnimationFrame(attackingCharacterSkill1)
        } else {
            setTimeout(() => {
                if(attackingCharacter === player1){
                    player1Idle()
                } else if(attackingCharacter === player2){
                    player2Idle()
                } else if(attackingCharacter === player3){
                    player3Idle()
                }
                deadChecker()
            }, 1000);
        }
    } else if(attackingCharacter.skill1.type === "Party Enhancer"){
            gameFramePlayer1 = 0
            gameFramePlayer2 = 0
            gameFramePlayer3 = 0
            framePlayer1 = 0
            framePlayer2 = 0
            framePlayer3 = 0
            cancelAnimationFrame(player1IdleLoop)
            cancelAnimationFrame(player2IdleLoop)
            cancelAnimationFrame(player3IdleLoop)
            if(attackingCharacter === player1 || attackingCharacter === player2 || attackingCharacter === player3){
                player1Enhance()
                player2Enhance()
                player3Enhance()
            } else {
                enemy1Enhance()
                enemy2Enhance()
                enemy3Enhance()
            }
            setTimeout(() => {
                deadChecker()
            }, 2000);
    }
}

function attackingCharacterSkill2(){
    messageLogs.innerHTML = `${attackingCharacter.name} used ${attackingCharacter.skill2.name}`
    if (attackingCharacter.skill2.type === "Attack") {
        if(gameFrameAttackingCharacter !== (attackingCharacter.skill2.frameCount * animationSpeed)){
        ctx.clearRect(characterPosX, characterPosY, gridLength, gridLength)
            ctx.drawImage(attackingCharacterSkill2Spritesheet, frameAttackingCharacter * spriteWidth, 0, spriteWidth, spriteHeight, characterPosX, characterPosY, gridLength, gridLength)
            if (gameFrameAttackingCharacter % animationSpeed === 0) {
                if (frameAttackingCharacter < attackingCharacter.skill2.frameCount) {
                    frameAttackingCharacter++
                } else {
                    (frameAttackingCharacter = 0)
                }
            }
            gameFrameAttackingCharacter++
            requestAnimationFrame(attackingCharacterSkill2)
        } else {
            targetCharacterHit()
        }
    } else if(attackingCharacter.skill2.type === "Enhancer"){
            if(gameFrameAttackingCharacter !== (13 * animationSpeed) - 4 ){
            ctx.clearRect(characterPosX, characterPosY, gridLength, gridLength)
                ctx.drawImage(attackingCharacterEnhanceSpritesheet, frameAttackingCharacter * spriteWidth, 0, spriteWidth, spriteHeight, characterPosX, characterPosY, gridLength, gridLength)
                if (gameFrameAttackingCharacter % animationSpeed === 0) {
                    if (frameAttackingCharacter < 12) {
                        frameAttackingCharacter++
                    } else {
                        (frameAttackingCharacter = 0)
                    }
                }
                gameFrameAttackingCharacter++
                requestAnimationFrame(attackingCharacterSkill2)
            } else {
                setTimeout(() => {
                    if(attackingCharacter === player1){
                        player1Idle()
                    } else if(attackingCharacter === player2){
                        player2Idle()
                    } else if(attackingCharacter === player3){
                        player3Idle()
                    }
                    deadChecker()
                }, 1000);
            }
        } else if(attackingCharacter.skill2.type === "Party Enhancer"){
        gameFramePlayer1 = 0
        gameFramePlayer2 = 0
        gameFramePlayer3 = 0
        framePlayer1 = 0
        framePlayer2 = 0
        framePlayer3 = 0
        cancelAnimationFrame(player1IdleLoop)
        cancelAnimationFrame(player2IdleLoop)
        cancelAnimationFrame(player3IdleLoop)
        player1Enhance()
        player2Enhance()
        player3Enhance()
        setTimeout(() => {
            deadChecker()
        }, 1000);
    }
}
function targetCharacterHit(){
    if(gameFrameTargetCharacter !== hitGameFrameLimit){
    ctx.clearRect(characterHitPosX, characterHitPosY, gridLength, gridLength)
        ctx.drawImage(targetCharacterHitSpritesheet, frameTargetCharacter * spriteWidth, 0, spriteWidth, spriteHeight, characterHitPosX, characterHitPosY, gridLength, gridLength)
        if (gameFrameTargetCharacter % animationSpeed === 0) {
            if (frameTargetCharacter < 1) {
                frameTargetCharacter++
            } else {
                (frameTargetCharacter = 0)
            }
        }
        gameFrameTargetCharacter++
        requestAnimationFrame(targetCharacterHit)
    } else {
        isTargetPlayer1Hit = false
        isTargetPlayer2Hit = false
        isTargetPlayer3Hit = false
        isTargetEnemy1Hit = false
        isTargetEnemy2Hit = false
        isTargetEnemy3Hit = false

        if(targetCharacter === player1){
            player1Idle()
        }else if(targetCharacter === player2){
            player2Idle()
        } else if(targetCharacter === player3) {
            player3Idle()
        } else if(targetCharacter === enemy1){
            enemy1Idle()
        }else if(targetCharacter === enemy2){
            enemy2Idle()
        } else if(targetCharacter === enemy3) {
            enemy3Idle()
        }

        if(attackingCharacter === player1){
            player1Idle()
        } else if(attackingCharacter === player2){
            player2Idle()
        } else if(attackingCharacter === player3){
            player3Idle()
        } else if(attackingCharacter === enemy1){
            enemy1Idle()
        } else if(attackingCharacter === enemy2){
            enemy2Idle()
        } else if(attackingCharacter === enemy3){
            enemy3Idle()
        }
        randomDeath()
    }
}