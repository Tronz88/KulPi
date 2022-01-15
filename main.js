let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
let gridDivisor = 9
let gridLength = window.innerWidth/gridDivisor

let players = [lapuLapu, joseRizal, goyo, babaylan, ibongAdarna, sirena, tamaraw, tarsier, philippineEagle]
let player1
let player2
let player3
let enemy1
let enemy2
let enemy3

let framePlayer1 = 0   
let framePlayer2 = 0  
let framePlayer3 = 0  
let frameEnemy1 = 0   
let frameEnemy2 = 0  
let frameEnemy3 = 0  
let gameFramePlayer1 = 0
let gameFramePlayer2 = 0
let gameFramePlayer3 = 0
let gameFrameEnemy1 = 0
let gameFrameEnemy2 = 0
let gameFrameEnemy3 = 0

let characters
let characterPosXArray
let characterPosYArray
let characterHitPosX
let characterHitPosY

let player1IdleSpritesheet = new Image();
let player2IdleSpritesheet = new Image();
let player3IdleSpritesheet = new Image();
let enemy1IdleSpritesheet = new Image();
let enemy2IdleSpritesheet = new Image();
let enemy3IdleSpritesheet = new Image();

let player1EnhanceSpritesheet = new Image();
let player2EnhanceSpritesheet = new Image();
let player3EnhanceSpritesheet = new Image();
let enemy1EnhanceSpritesheet = new Image();
let enemy2EnhanceSpritesheet = new Image();
let enemy3EnhanceSpritesheet = new Image();

let targetCharacterHitSpritesheet = new Image();
let attackingCharacterSkillSpritesheet = new Image();
let attackingCharacterEnhanceSpritesheet = new Image();

let characterSelectMusic = new Audio();
let battleMusic1 = new Audio();
let battleMusic2 = new Audio();
let miniBossMusic = new Audio();
let finalBossMusic = new Audio();
let gameCompleteMusic = new Audio();
let gameOverMusic = new Audio();

let hitSound = new Audio();
let enhanceSound = new Audio();
let missSound = new Audio();
let healthSound = new Audio();
let buttonSound = new Audio();
let buttonSound2 = new Audio();
let playerVoice = new Audio();

characterSelectMusic.loop = true
characterSelectMusic.volume = 0.5
battleMusic1.loop = true
battleMusic1.volume = 0.5
battleMusic2.loop = true
battleMusic2.volume = 0.5
miniBossMusic.loop = true
miniBossMusic.volume = 0.5
finalBossMusic.loop = true
finalBossMusic.volume = 0.5
gameCompleteMusic.loop = true
gameCompleteMusic.volume = 0.5
gameOverMusic.loop = true
gameOverMusic.volume = 0.5

characterSelectMusic.src = "music/characterSelectMusic.ogg"
battleMusic1.src = "music/battleMusic1.ogg"
battleMusic2.src = "music/battleMusic2.ogg"
miniBossMusic.src = "music/miniBoss.ogg"
finalBossMusic.src = "music/finalBoss.ogg"
gameCompleteMusic.src = "music/gameComplete.ogg"
gameOverMusic.src = "music/gameOver.ogg"

hitSound.src = "sound effects/hit.ogg"
enhanceSound.src = "sound effects/Stat Raise.ogg"
missSound.src = "sound effects/miss.ogg"
healthSound.src = "sound effects/health.ogg"
buttonSound.src = "sound effects/button.ogg"
buttonSound2.src = "sound effects/button2.ogg"

let gameFrameAttackingCharacter = 0
let frameAttackingCharacter = 0
let gameFrameTargetCharacter = 0
let frameTargetCharacter = 0

let player1IdleLoop
let player2IdleLoop
let player3IdleLoop

let enemy1IdleLoop
let enemy2IdleLoop
let enemy3IdleLoop

let healthBoost1
let healthBoost2
let healthBoost3
let attackBoost1
let attackBoost2
let attackBoost3
let defenseBoost1
let defenseBoost2
let defenseBoost3
let healthBoost = [healthBoost1, healthBoost2, healthBoost3]
let defenseBoost = [defenseBoost1, defenseBoost2, defenseBoost3]
let attackBoost = [attackBoost1, attackBoost2, attackBoost3]

let spriteWidth = 192
let spriteHeight = 192
let animationSpeed = 5 //30Hz = 3, 60Hz = 5
let hitGameFrameLimit = 50 //30Hz = 50, 60Hz = 100

let isDead
let isEnchancing
let isTargetHit
let currentSkill
let nextRound
let nextLevel
let randomNumber
let messageLogs = document.getElementById("tdMessageLogs")

function preBattle(){
    if(player1 !== undefined && player2 !== undefined && player3 !== undefined){
        document.getElementById("characterSelect").innerHTML = ""
        document.getElementById("resizeButtons").innerHTML = `
        <a onclick="resizeCanvas('increase')" style = "color: whitesmoke">▲</a>
        <a onclick="resizeCanvas('decrease')" style = "color: whitesmoke">▼</a><br>
        <a onclick="resetRound(1, 1)" style = "color: whitesmoke">Done</a>`
    
        canvas.style.border = "1px solid black"
        canvas.width = gridLength * 5
        canvas.height = gridLength * 4
        canvas.style.borderRadius = "5px"
        canvas.style.outline = "3px solid #ECDBBA"
        canvas.style.backgroundImage = "url(images/backgrounds/forest.png)"
        canvas.style.backgroundSize = "100% 100%"
    
        messageLogs.style.border = "3px solid #ECDBBA"
        messageLogs.style.borderRadius = "5px"
        messageLogs.width = canvas.width
        }
}
function resizeCanvas(size){
    if (size === "increase") {
        gridDivisor--
        gridLength = window.innerWidth/gridDivisor
    } else if (size = "decrease") {
        gridDivisor++
        gridLength = window.innerWidth/gridDivisor
    }
    preBattle()
}
function startBattle(){
    document.getElementById("resizeButtons").innerHTML = ""
    characters = [player1, player2, player3, enemy1, enemy2, enemy3]
    characterPosXArray = [gridLength * 3, gridLength * 4, gridLength * 4, gridLength, 0, 0]
    characterPosYArray = [gridLength * 2.5, gridLength * 2, gridLength * 3, gridLength * 2.5, gridLength * 2, gridLength * 3]
    isDead = [false, false, false, false, false, false]
    isTargetHit = [false, false, false, false, false, false]
    isEnchancing = [false, false, false, false, false, false]
    changeAttackingCharacter(player1)
    if(nextLevel === 1 && nextRound === 2){
        setTimeout(() => {
            skillSelector("player")
        }, 10500);
    } else {
        setTimeout(() => {
            skillSelector("player")
        }, 3800);
    }
    enemy1Idle()
    enemy2Idle()
    enemy3Idle()

    player1Idle()
    player2Idle()
    player3Idle()
    healthBar()
    //statUpdate()
}
