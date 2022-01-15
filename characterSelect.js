
let portraitsDiv = document.getElementById("portraitsList")
let characterDescriptionDiv = document.getElementById("characterDescription")
let characterCloseUpDiv = document.getElementById("characterCloseUp")
let characterIntroductionDiv = document.getElementById("characterIntroduction")
let player1SelectionP = document.getElementById("player1Selection")
let player2SelectionP = document.getElementById("player2Selection")
let player3SelectionP = document.getElementById("player3Selection")
let selectedPlayer

function backgroundMusic() {
    characterSelectMusic.play()
    document.getElementById("backgroundMusic").innerHTML = ""
}
function playerList(playerNumber){
    buttonSound.play()
    if(playerNumber === "player1"){
        selectedPlayer = "player1"
        document.querySelector("h2").innerHTML = "Selecting Player 1..."
    } else if(playerNumber === "player2"){
        selectedPlayer = "player2"
        document.querySelector("h2").innerHTML = "Selecting Player 2..."
    } else if(playerNumber === "player3"){
        selectedPlayer = "player3"
        document.querySelector("h2").innerHTML = "Selecting Player 3..."
    }
        portraitsDiv.innerHTML = `
        <img src="images/Portraits/Lapu-Lapu.png" alt="Lapu-Lapu" id="portraits" onclick="setPlayer(players[0], selectedPlayer)"/>
        <img src="images/Portraits/Jose Rizal.png" alt="Jose Rizal" id="portraits" onclick="setPlayer(players[1], selectedPlayer)"/>
        <img src="images/Portraits/Goyo.png" alt="Goyo" id="portraits" onclick="setPlayer(players[2], selectedPlayer)"/>
        <br>
        <img src="images/Portraits/babaylan.png" alt="Babaylan" id="portraits" onclick="setPlayer(players[3], selectedPlayer)"/>
        <img src="images/Portraits/Ibong Adarna.png" alt="Ibong Adarna" id="portraits" onclick="setPlayer(players[4], selectedPlayer)"/>
        <img src="images/Portraits/Sirena.png" alt="Sirena" id="portraits" onclick="setPlayer(players[5], selectedPlayer)"/>
            <br>
        <img src="images/Portraits/Tamaraw.png" alt="Tamaraw" id="portraits" onclick="setPlayer(players[6], selectedPlayer)"/>
        <img src="images/Portraits/Tarsier.png" alt="Tarsier" id="portraits" onclick="setPlayer(players[7], selectedPlayer)"/>
        <img src="images/Portraits/Philippine Eagle.png" alt="Philippine Eagle" id="portraits" onclick="setPlayer(players[8], selectedPlayer)"/>
        `
}
function setPlayer(player, playerNumber){
    if(playerNumber === "player1"){
        for(let i = 0; i < 9; i++){
            if(player === players[i]){
                player1 = players[i]
                break
            }
        }
        document.querySelector("h2").innerHTML = `Selecting Player 1</b>...`
        characterDescriptionBox(player1)
        player1SelectionP.innerHTML = `<button onclick="playerList('player1')">Player 1</button>: ${player1.name}`
        player1IdleSpritesheet.src = player1.idle.spritesheetSrc
        player1EnhanceSpritesheet.src = player1.enhance.spritesheetSrc
    } else if(playerNumber === "player2"){
        for(let i = 0; i < 9; i++){
            if(player === players[i]){
                player2 = players[i]
                if(player3 === player2 || player1 === player3 || player2 === player1){
                    alert('No character duplication! Select another character')
                }
                break
            }
        }
        document.querySelector("h2").innerHTML = `Selecting Player 2</b>...`
        characterDescriptionBox(player2)
        player2SelectionP.innerHTML = `<button onclick="playerList('player2')">Player 2</button>: ${player2.name}`
        player2IdleSpritesheet.src = player2.idle.spritesheetSrc
        player2EnhanceSpritesheet.src = player2.enhance.spritesheetSrc
    } else if(playerNumber === "player3"){
        for(let i = 0; i < 9; i++){
            if(player === players[i]){
                player3 = players[i]
            if(player3 === player2 || player3 === player1 || player2 === player1){
                    alert('No character duplication! Select another character')
                }
                break
            }
        }
        document.querySelector("h2").innerHTML = `Selecting Player 3</b>...`
        characterDescriptionBox(player3)
        player3SelectionP.innerHTML = `<button onclick="playerList('player3')">Player 3</button>: ${player3.name}`
        player3IdleSpritesheet.src = player3.idle.spritesheetSrc
        player3EnhanceSpritesheet.src = player3.enhance.spritesheetSrc
    }
    buttonSound2.play()
}
function characterDescriptionBox(selectedCharacter){
    for(let i = 0; i < 9; i++){
        if(selectedCharacter === players[i]){
            selectedCharacter = players[i]
            break
        }
    }
    playerVoice.src = `sound effects/${selectedCharacter.name}.ogg`
    playerVoice.pause()
    playerVoice.currentTime = 0
    playerVoice.play()

    characterDescriptionDiv.style.border = "3px solid #ECDBBA"
    characterCloseUpDiv.style.border = "3px solid #ECDBBA"
    characterCloseUpDiv.innerHTML = `<img id="closeUp" src="images/Portraits/${selectedCharacter.name}.png"/>`
    characterDescriptionDiv.innerHTML = `
        <h2 id="characterName">${selectedCharacter.name}</h2>
        <h2 id="characterClass">${selectedCharacter.class}</h2>
        <h3>Skill 1</h3>
        <b>${selectedCharacter.skill1.name}</b><br>
        Type: ${selectedCharacter.skill1.type}<br>
        Damage: ${selectedCharacter.skill1.damage}<br>
        Accuracy: ${selectedCharacter.skill1.accuracy}%<br>
        Value: ${selectedCharacter.skill1.value}%<br>
        Boosting: ${selectedCharacter.skill1.boosting}
        <br>
        <h3>Skill 2</h3>
        <b>${selectedCharacter.skill2.name}</b><br>
        Type: ${selectedCharacter.skill2.type}<br>
        Damage: ${selectedCharacter.skill2.damage}<br>
        Accuracy: ${selectedCharacter.skill2.accuracy}%<br>
        Value: ${selectedCharacter.skill2.value}%<br>
        Boosting: ${selectedCharacter.skill2.boosting}<br><br>
    `
    characterIntroductionDiv.innerHTML = `${selectedCharacter.introduction}`
}

