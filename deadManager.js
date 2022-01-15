function deadRemover(){
    for(let i = 0; i <6; i++){
        if(isDead[i] === true){
            ctx.clearRect(characterPosXArray[i], characterPosYArray[i], gridLength, gridLength)
        }
    }
    if (isDead[0] === true){
        cancelAnimationFrame(player1IdleLoop)
    } if(isDead[1] === true){
        cancelAnimationFrame(player2IdleLoop)
    } if(isDead[2] === true){
        cancelAnimationFrame(player3IdleLoop)
    } if(isDead[3] === true){
        cancelAnimationFrame(enemy1IdleLoop)
    } if(isDead[4] === true){
        cancelAnimationFrame(enemy2IdleLoop)
    } if(isDead[5] === true){
        cancelAnimationFrame(enemy3IdleLoop)
    }
}

let index
function deadChecker(){
    if(isDead[0] === true && isDead[1] === true && isDead[2] === true){
        cancelAnimationFrame(enemy1IdleLoop)
        cancelAnimationFrame(enemy2IdleLoop)
        cancelAnimationFrame(enemy3IdleLoop)
        cancelAnimationFrame(player1IdleLoop)
        cancelAnimationFrame(player2IdleLoop)
        cancelAnimationFrame(player3IdleLoop)

        battleMusic1.pause()
        battleMusic2.pause()
        miniBossMusic.pause()
        finalBossMusic.pause()
        gameOverMusic.play()
        ctx.fillStyle = "#070707"
        ctx.fillRect(0, 0, gridLength * 5, gridLength * 4)
        ctx.fillStyle = "#ECDBBA"
        ctx.textAlign = "center"
        ctx.font = `50px verdana`
        ctx.fillText("Game Over", gridLength*2.5, gridLength * 2)
        messageLogs.innerHTML = ""

    } else if (isDead[3] === true && isDead[4] === true && isDead[5] === true){
        cancelAnimationFrame(player1IdleLoop)
        cancelAnimationFrame(player2IdleLoop)
        cancelAnimationFrame(player3IdleLoop)
        cancelAnimationFrame(enemy1IdleLoop)
        cancelAnimationFrame(enemy2IdleLoop)
        cancelAnimationFrame(enemy3IdleLoop)

        if(nextLevel !== 0){
            ctx.clearRect(0, 0, gridLength * 5, gridLength * 4)
            ctx.fillStyle = "#070707"
            ctx.fillRect(0, 0, gridLength * 5, gridLength * 4)
            ctx.fillStyle = "#ECDBBA"
            ctx.textAlign = "center"
            ctx.font = `50px verdana`
            ctx.fillText(`Level ${nextLevel}: Round ${nextRound}`, gridLength*2.5, gridLength * 2)
            messageLogs.innerHTML = ""
            setTimeout(() => {
                setTimeout(() => {
                    resetRound(nextRound, nextLevel)
                }, 1);
            }, 3000);
        } else {
            finalBossMusic.pause()
            finalBossMusic.currentTime = 0
            gameCompleteMusic.play()
            ctx.fillStyle = "#070707"
            ctx.fillRect(0, 0, gridLength * 5, gridLength * 4)
            ctx.fillStyle = "#ECDBBA"
            ctx.textAlign = "center"
            ctx.font = `50px verdana`
            ctx.fillText("Game Complete", gridLength*2.5, gridLength * 2)
            messageLogs.innerHTML = ""
        }
    } else {
        for(let i = 0; i < 6; i++){
            if(attackingCharacter === characters[i]){
                index = i
                break
            }
        }
        if(isDead.includes(true)){
            for (let i = index; i < 6; i++){
                if (i !== 5){
                    if(isDead[i+1] === false){
                        changeAttackingCharacter(characters[i+1])
                            if((i+1) < 3){
                                skillSelector("player")
                            } else {
                                skillSelector("enemy")
                            }
                            break
                    }
                } else {
                    if(isDead[0] === false){
                        changeAttackingCharacter(characters[0])
                        skillSelector("player")
                    } else {
                        i = 0
                        if(isDead[i+1] === false){
                            changeAttackingCharacter(characters[i+1])
                            if((i+1) < 3){
                                skillSelector("player")
                            } else {
                                skillSelector("enemy")
                            }
                            break
                        }
                    }
                }
            }
        } else {
            if (attackingCharacter === player1){
                changeAttackingCharacter(player2)
                skillSelector("player")
            } else if (attackingCharacter === player2){
                changeAttackingCharacter(player3)
                skillSelector("player")
            } else if (attackingCharacter === player3){
                changeAttackingCharacter(enemy1)
                skillSelector("enemy")
            } else if (attackingCharacter === enemy1){
                changeAttackingCharacter(enemy2)
                skillSelector("enemy")
            } else if (attackingCharacter === enemy2){
                changeAttackingCharacter(enemy3)
                skillSelector("enemy")
            } else if (attackingCharacter === enemy3){
                changeAttackingCharacter(player1)
                skillSelector("player")
            } 
        }
        deadRemover()
    }
}
