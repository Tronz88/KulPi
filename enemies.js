
function enemy1Idle(){
    if(isTargetHit[3] === false){
        ctx.clearRect(gridLength, gridLength * 2.5, gridLength, gridLength)
        ctx.drawImage(enemy1IdleSpritesheet, frameEnemy1 * spriteWidth, 0, spriteWidth, spriteHeight, gridLength, gridLength * 2.5, gridLength, gridLength)
        if (gameFrameEnemy1 % animationSpeed === 0) {
            if (frameEnemy1 < enemy1.idle.frameCount) {
                frameEnemy1++
            } else {
                (frameEnemy1 = 0)
            }
        }
        gameFrameEnemy1++
        enemy1IdleLoop = requestAnimationFrame(enemy1Idle)
    }
}
function enemy2Idle(){
    if(isTargetHit[4] === false){
        ctx.clearRect(0, gridLength * 2, gridLength, gridLength)
        ctx.drawImage(enemy2IdleSpritesheet, frameEnemy2 * spriteWidth, 0, spriteWidth, spriteHeight, 0, gridLength * 2, gridLength, gridLength)
        if (gameFrameEnemy2 % animationSpeed === 0) {
            if (frameEnemy2 < enemy2.idle.frameCount) {
                frameEnemy2++
            } else {
                (frameEnemy2 = 0)
            }
        }
        gameFrameEnemy2++
        enemy2IdleLoop = requestAnimationFrame(enemy2Idle)
    }
}
function enemy3Idle(){
    if(isTargetHit[5] === false){
        ctx.clearRect(0, gridLength * 3, gridLength, gridLength)
        ctx.drawImage(enemy3IdleSpritesheet, frameEnemy3 * spriteWidth, 0, spriteWidth, spriteHeight, 0, gridLength * 3, gridLength, gridLength)
        if (gameFrameEnemy3 % animationSpeed === 0) {
            if (frameEnemy3 < enemy3.idle.frameCount) {
                frameEnemy3++
            } else {
                (frameEnemy3 = 0)
            }
        }
        gameFrameEnemy3++
        enemy3IdleLoop = requestAnimationFrame(enemy3Idle)
    }
}
function enemy1Enhance(){
    if(isDead[3] === false){
        if(gameFrameEnemy1 !== (13 * animationSpeed) - 4 ){
            ctx.clearRect(gridLength, gridLength * 2.5, gridLength, gridLength)
                ctx.drawImage(enemy1EnhanceSpritesheet, frameEnemy1 * spriteWidth, 0, spriteWidth, spriteHeight, gridLength, gridLength * 2.5, gridLength, gridLength)
                if (gameFrameEnemy1 % animationSpeed === 0) {
                    if (frameEnemy1 < 12) {
                        frameEnemy1++
                    } else {
                        (frameEnemy1 = 0)
                    }
                }
                gameFrameEnemy1++
                requestAnimationFrame(enemy1Enhance)
            } else {
                enemy1Idle()
            }
    }
}
function enemy2Enhance(){
    if(isDead[4] === false){
        if(gameFrameEnemy2 !== (13 * animationSpeed) - 4 ){
            ctx.clearRect(0, gridLength * 2, gridLength, gridLength)
                ctx.drawImage(enemy2EnhanceSpritesheet, frameEnemy2 * spriteWidth, 0, spriteWidth, spriteHeight, 0, gridLength * 2, gridLength, gridLength)
                if (gameFrameEnemy2 % animationSpeed === 0) {
                    if (frameEnemy2 < 12) {
                        frameEnemy2++
                    } else {
                        (frameEnemy2 = 0)
                    }
                }
                gameFrameEnemy2++
                requestAnimationFrame(enemy2Enhance)
            } else {
                enemy2Idle()
            }
    }
}
function enemy3Enhance(){
    if(isDead[5] === false){
        if(gameFrameEnemy3 !== (13 * animationSpeed) - 4 ){
            ctx.clearRect(0, gridLength * 3, gridLength, gridLength)
                ctx.drawImage(enemy3EnhanceSpritesheet, frameEnemy3 * spriteWidth, 0, spriteWidth, spriteHeight, 0, gridLength * 3, gridLength, gridLength)
                if (gameFrameEnemy3 % animationSpeed === 0) {
                    if (frameEnemy3 < 12) {
                        frameEnemy3++
                    } else {
                        (frameEnemy3 = 0)
                    }
                }
                gameFrameEnemy3++
                requestAnimationFrame(enemy3Enhance)
            } else {
                enemy3Idle()
            }
    }
}

function healthBar() {
    let healthBarXPos = [gridLength * 3 - 25, gridLength * 3 - 5, gridLength * 3 - 5, 20, 5, 5]
    let healthBarYPos = [gridLength / 2 - 5, 5, gridLength - 15, gridLength / 2 - 5, 5, gridLength - 15]

    for(let i = 0; i < 6; i++){
        let healthPercentage = Math.round(characters[i].currentHealth / characters[i].health * 100);
        if(healthPercentage <= 0){
            ctx.clearRect(healthBarXPos[i], healthBarYPos[i], gridLength * 2, gridLength / 4)
            ctx.fillStyle = "gray"
            ctx.fillRect(healthBarXPos[i], healthBarYPos[i], gridLength * 2, gridLength / 4);
            ctx.strokeRect(healthBarXPos[i], healthBarYPos[i], gridLength * 2, gridLength / 4);
        } else {

        ctx.clearRect(healthBarXPos[i], healthBarYPos[i], gridLength * 2, gridLength / 4)

        ctx.fillStyle = "gray"
        ctx.fillRect(healthBarXPos[i], healthBarYPos[i], gridLength * 2, gridLength / 4);
        ctx.fillStyle = "green"
        ctx.strokeStyle = "white"
        ctx.fillRect(healthBarXPos[i], healthBarYPos[i], gridLength * healthPercentage / 100 * 2, gridLength / 4)
        ctx.strokeRect(healthBarXPos[i], healthBarYPos[i], gridLength * 2, gridLength / 4);
        }
    }
}