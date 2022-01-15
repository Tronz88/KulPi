let lapuLapu = {
  health: 470,
  attack: 49,
  defense: 74,
  maxAttack: 60,
  maxDefense: 85,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Lapu-Lapu",
  class: "Frontline",
  idle: {
      spritesheetSrc: "images/spritesheets/Lapu-LapuIdle.png",
      frameCount: 9
  },
  hit: {
      spritesheetSrc: "images/spritesheets/Lapu-LapuHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Lapu-LapuEnhance.png",
  },
  skill1: {
      name: "Slash",
      type: "Attack",
      damage: 40,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Lapu-LapuSkill1.png",
      frameCount: 7
  },
  skill2: {
      name: "Battle Cry",
      type: "Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 8, 
      boosting: "Defense",
      spritesheetSrc: "images/spritesheets/Lapu-LapuSkill2.png",
      frameCount: 12
  },
  introduction: `Hailing from the proud land of Mactan, Cebu, this tribe leader equipped 
                  with only his shield and sword was able to vanquish the Spaniards led by Ferdinand Magellan. 
                  This character is able to brute force his way into the battlefield but fear not, 
                  despite his low damage output, Lapu-lapu can soak up a lot of damage for your team.`,
  speech: "This is our homeland!! I will die to protect it!"
};
let joseRizal = {
  health: 350,
  attack: 56,
  defense: 67,
  maxAttack: 65,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Jose Rizal",
  class: "Support",
  idle: {
      spritesheetSrc: "images/spritesheets/Jose RizalIdle.png",
      frameCount: 4
  },
  hit: {
      spritesheetSrc: "images/spritesheets/Jose RizalHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Jose RizalEnhance.png",
  },
  skill1: {
      name: "Stand By Me",
      type: "Party Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 5,
      boosting: "Attack",
      spritesheetSrc: "images/spritesheets/Jose RizalSkill1.png",
      frameCount: 12
  },
  skill2: {
      name: "Touch Me Not",
      type: "Attack",
      damage: 60,
      accuracy: 80,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Jose RizalSkill2.png",
      frameCount: 8
  },
  introduction: `Known as Philippines’ National Hero, Jose Rizal, equipped with his brilliant mind and 
                passion will be able to support your team in order to achieve total victory. 
                A brilliant poet and political activist, his political literatures inspired the 
                Philippine Revolution against the Spaniards.`,
  speech: "There is nothing to fear!"
};

let goyo = {
  health: 330,
  attack: 76,
  defense: 49,
  maxAttack: 88,
  maxDefense: 60,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Goyo",
  class: "Attacker",
  idle: {
    spritesheetSrc: "images/spritesheets/GoyoIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/GoyoHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/GoyoEnhance.png",
  },
  skill1: {
      name: "Precision Fire",
      type: "Attack",
      damage: 60,
      accuracy: 90,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/GoyoSkill1.png",
      frameCount: 5
  },
  skill2: {
      name: "Unleash Fire",
      type: "Attack",
      damage: 100,
      accuracy: 50,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/GoyoSkill2.png",
      frameCount: 9
  },
  introduction: `Known as one of the youngest Filipino generals, Gregorio “Goyo” Del Pilar is a deadly marksman
                 that can be able to lead your team to victory, with a high damage output, 
                 a shot from his rifle can instantly put out enemies. A virtuous and courageous brigadier 
                 who led the 60-man Filipino rear guard against more than 500 Americans during the Battle of Tirad Pass.`,
  speech: "Glory for my homeland!"
};

let ibongAdarna = {
  health: 260,
  attack: 65,
  defense: 50,
  maxAttack: 75,
  maxDefense: 60,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Ibong Adarna",
  class: "Support",
  idle: {
    spritesheetSrc: "images/spritesheets/Ibong AdarnaIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/Ibong AdarnaHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Ibong AdarnaEnhance.png",
  },
  skill1: {
      name: "Healing Hymn",
      type: "Party Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 8,
      boosting: "Health",
      spritesheetSrc: "images/spritesheets/Ibong AdarnaSkill1.png",
      frameCount: 12
  },
  skill2: {
      name: "Wing Slash",
      type: "Attack",
      damage: 40,
      accuracy: 90,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Ibong AdarnaSkill2.png",
      frameCount: 14
  },
  introduction: `Known as the “enchantress bird”. It has a very long fancy tail with numerous shiny metallic colors.  
                It knows a total of seven songs that are believed to lull anyone to sleep as well as cure any type 
                of afflictions and it changes its feathers into more colorful hues and shades after each song.  
                This support character can provide healing utilities your team needs.`,
  speech: "REEEEEEEEEEEEEE",
};

let babaylan = {
  health: 460,
  attack: 57,
  defense: 72,
  maxAttack: 65,
  maxDefense: 85,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Babaylan",
  class: "Frontline",
  idle: {
    spritesheetSrc: "images/spritesheets/BabaylanIdle.png",
    frameCount: 7
  },
  hit: {
    spritesheetSrc: "images/spritesheets/BabaylanHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/BabaylanEnhance.png",
  },
  skill1: {
      name: "Ritual Curse",
      type: "Attack",
      damage: 55,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/BabaylanSkill1.png",
      frameCount: 5
  },
  skill2: {
      name: "Ritual Chant",
      type: "Party Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 5,
      boosting: "Defense",
      spritesheetSrc: "images/spritesheets/BabaylanSkill2.png",
      frameCount: 9
  },
  introduction: `The pre-colonial Philippine tradition of female mystical healers whose spiritual 
                  connectedness was a source of political and social power. Babaylan women serve as 
                  intermediaries between spiritual and material worlds in their communities. 
                  This frontline character can either curse the enemies or provide magical buffs for your team.`,
  speech: "Whom shall I curse?",
};

let sirena = {
  health: 340,
  attack: 76,
  defense: 43,
  maxAttack: 88,
  maxDefense: 55,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Sirena",
  class: "Attacker",
  idle: {
    spritesheetSrc: "images/spritesheets/SirenaIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/SirenaHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/SirenaEnhance.png",
  },
  skill1: {
      name: "Wrath of the Ocean",
      type: "Attack",
      damage: 55,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/SirenaSkill1.png",
      frameCount: 10
  },
  skill2: {
      name: "Siren's Rage",
      type: "Attack",
      damage: 120,
      accuracy: 30,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/SirenaSkill2.png",
      frameCount: 12
  },
  introduction: `The Sirena is a mythological sea creature from Filipino culture. In some regions of the Philippines,
                 particularly Bicol and Visayas, Sirenas are known as Magindara and portrayed as vicious mermaids. 
                 The Sirena is an “engkanto” known as the “bantay-tubig” or the mythical guardians of the water. 
                 Equip your team with her magical water prowess and cruise through enemies.`,
  speech: "All these beautiful bodies, shattered by the ocean waves.",
};

let philippineEagle = {
  health: 280,
  attack: 83,
  defense: 40,
  maxAttack: 93,
  maxDefense: 50,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Philippine Eagle",
  class: "Attacker",
  idle: {
    spritesheetSrc: "images/spritesheets/Philippine EagleIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/Philippine EagleHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Philippine EagleEnhance.png",
  },
  skill1: {
      name: "Wild Charge",
      type: "Attack",
      damage: 80,
      accuracy: 80,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Philippine EagleSkill1.png",
      frameCount: 19
  },
  skill2: {
      name: "Peck",
      type: "Attack",
      damage: 60,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Philippine EagleSkill2.png",
      frameCount: 5
  },
  introduction: `The Philippine Eagle is one of the world’s largest, most powerful birds of prey,
                 it could be argued that the Philippine Eagle is also one of the most striking. 
                 One vicious strike from this deadly attacker could either critically damage enemies.`,
  speech: "*SKREEEKKK*",
};

let tamaraw = {
  health: 450,
  attack: 53,
  defense: 62,
  maxAttack: 65,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Tamaraw",
  class: "Frontline",
  idle: {
    spritesheetSrc: "images/spritesheets/TamarawIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/TamarawHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/TamarawEnhance.png",
  },
  skill1: {
      name: "Stomp",
      type: "Attack",
      damage: 40,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/TamarawSkill1.png",
      frameCount: 3
  },
  skill2: {
      name: "Bulk Up",
      type: "Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 5,
      boosting: "Attack and Defense",
      spritesheetSrc: "images/spritesheets/TamarawSkill2.png",
      frameCount: 12
  },
  introduction: `Found in the land of Mindoro, Philippines, the Tamaraw is known for its slightly hairier skin, 
                light markings on its face, shorter V shaped horns and the fact that it does not live in a herd. 
                Build your team around this strong frontline since Tamaraws symbolizes strength, 
                power and bravery according to some Filipinos.`,
  speech: "MOOOOOOOOOO",
};

let tarsier = {
  health: 300,
  attack: 32,
  defense: 47,
  maxAttack: 42,
  maxDefense: 60,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Tarsier",
  class: "Support",
  idle: {
    spritesheetSrc: "images/spritesheets/TarsierIdle.png",
    frameCount: 7
  },
  hit: {
    spritesheetSrc: "images/spritesheets/TarsierHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/TarsierEnhance.png",
  },
  skill1: {
      name: "Heightened Focus",
      type: "Party Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 5,
      boosting: "Party Attack and Defense",
      spritesheetSrc: "images/spritesheets/TarsierSkill1.png",
      frameCount: 9
  },
  skill2: {
      name: "Slap",
      type: "Attack",
      damage: 50,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/TarsierSkill2.png",
      frameCount: 9
  },
  introduction: `The Tarsier is one of the most unique primates on the planet and they are also known 
                to have the largest eyes of any mammal in relation to their body size. 
                The pride of Bohol, Philippines, this support character could boost your team’s attack and defense.`,
  speech: "*squeaks*",
};

let spanishSoldier1 = {
  health: 320,
  attack: 60,
  defense: 50,
  maxAttack: 75,
  maxDefense: 65,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Spanish Soldier",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierIdle.png",
    frameCount: 4
  },
  hit: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierEnhance.png",
  },
  skill1: {
      name: "Slice",
      type: "Attack",
      damage: 50,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Spanish SoldierSkill1.png",
      frameCount: 5
  },
  skill2: {
    name: "Outcry",
    type: "Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 8,
    boosting: "Attack",
    spritesheetSrc: "images/spritesheets/Spanish SoldierSkill2.png",
    frameCount: 5
  }
};
let spanishSoldier2 = {
  health: 320,
  attack: 60,
  defense: 50,
  maxAttack: 75,
  maxDefense: 65,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Spanish Soldier",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierIdle.png",
    frameCount: 4
  },
  hit: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierEnhance.png",
  },
  skill1: {
      name: "Slice",
      type: "Attack",
      damage: 50,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Spanish SoldierSkill1.png",
      frameCount: 5
  },
  skill2: {
    name: "Outcry",
    type: "Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 8,
    boosting: "Attack",
    spritesheetSrc: "images/spritesheets/Spanish SoldierSkill2.png",
    frameCount: 5
  }
};
let spanishSoldier3 = {
  health: 320,
  attack: 60,
  defense: 50,
  maxAttack: 75,
  maxDefense: 65,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Spanish Soldier",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierIdle.png",
    frameCount: 4
  },
  hit: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Spanish SoldierEnhance.png",
  },
  skill1: {
      name: "Slice",
      type: "Attack",
      damage: 50,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Spanish SoldierSkill1.png",
      frameCount: 5
  },
  skill2: {
    name: "Outcry",
    type: "Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 8,
    boosting: "Attack",
    spritesheetSrc: "images/spritesheets/Spanish SoldierSkill2.png",
    frameCount: 5
  }
};
let magellan = {
  health: 650,
  attack: 65,
  defense: 65,
  maxAttack: 85,
  maxDefense: 80,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Magellan",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/MagellanIdle.png",
    frameCount: 6
  },
  hit: {
    spritesheetSrc: "images/spritesheets/MagellanHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/MagellanEnhance.png",
  },
  skill1: {
      name: "Pierce",
      type: "Attack",
      damage: 60,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/MagellanSkill1.png",
      frameCount: 8
  },
  skill2: {
    name: "Sword Polish",
    type: "Party Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 5,
    boosting: "Attack",
    spritesheetSrc: "images/spritesheets/MagellanSkill2.png",
    frameCount: 5
},
  speech: "I will take all the Gold in Mactan!"
};
let corruptPolice1 = {
  health: 260,
  attack: 51,
  defense: 60,
  maxAttack: 65,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Corrupt Police",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/PoliceIdle.png",
    frameCount: 5
  },
  hit: {
    spritesheetSrc: "images/spritesheets/PoliceHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/PoliceEnhance.png",
  },
  skill1: {
      name: "Brutality",
      type: "Attack",
      damage: 60,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/PoliceSkill1.png",
      frameCount: 7
  }, 
  skill2: {
    name: "False Arrest",
    type: "Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 5,
    boosting: "Attack",
    spritesheetSrc: "images/spritesheets/PoliceSkill2.png",
    frameCount: 12
}
};
let corruptPolice2 = {
  health: 260,
  attack: 51,
  defense: 60,
  maxAttack: 65,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Corrupt Police",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/PoliceIdle.png",
    frameCount: 5
  },
  hit: {
    spritesheetSrc: "images/spritesheets/PoliceHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/PoliceEnhance.png",
  },
  skill1: {
      name: "Brutality",
      type: "Attack",
      damage: 60,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/PoliceSkill1.png",
      frameCount: 7
  }, 
  skill2: {
    name: "False Arrest",
    type: "Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 5,
    boosting: "Attack",
    spritesheetSrc: "images/spritesheets/PoliceSkill2.png",
    frameCount: 12
}
};
let corruptPolice3 = {
  health: 260,
  attack: 51,
  defense: 60,
  maxAttack: 65,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Corrupt Police",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/PoliceIdle.png",
    frameCount: 5
  },
  hit: {
    spritesheetSrc: "images/spritesheets/PoliceHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/PoliceEnhance.png",
  },
  skill1: {
      name: "Brutality",
      type: "Attack",
      damage: 60,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/PoliceSkill1.png",
      frameCount: 7
  }, 
  skill2: {
    name: "False Arrest",
    type: "Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 5,
    boosting: "Attack",
    spritesheetSrc: "images/spritesheets/PoliceSkill2.png",
    frameCount: 12
}
};
let corruptPolitician = {
  health: 840,
  attack: 70,
  defense: 65,
  maxAttack: 85,
  maxDefense: 80,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Corrupt Politician",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/Corrupt PoliticianIdle.png",
    frameCount: 5
  },
  hit: {
    spritesheetSrc: "images/spritesheets/Corrupt PoliticianHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/Corrupt PoliticianEnhance.png",
  },
  skill1: {
      name: "Unfair Judgement",
      type: "Attack",
      damage: 60,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/Corrupt PoliticianSkill1.png",
      frameCount: 11
  }, 
  skill2: {
    name: "Corrupted Mindset",
    type: "Enhancer",
    damage: "N/A",
    accuracy: 100,
    value: 5,
    boosting: "Defense",
    spritesheetSrc: "images/spritesheets/Corrupt PoliticianSkill2.png",
    frameCount: 11
},
  speech: "Di ako kurakot! .... hehe"
};
let kapre = {
  health: 340,
  attack: 53,
  defense: 68,
  maxAttack: 65,
  maxDefense: 80,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Kapre",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/KapreIdle.png",
    frameCount: 9
  },
  hit: {
    spritesheetSrc: "images/spritesheets/KapreHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/KapreEnhance.png",
  },
  skill1: {
      name: "Jab",
      type: "Attack",
      damage: 45,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/KapreSkill1.png",
      frameCount: 3
  },
  skill2: {
      name: "Uproar",
      type: "Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 8,
      boosting: "Defense",
      spritesheetSrc: "images/spritesheets/KapreSkill2.png",
      frameCount: 12
  }
};
let manananggal = {
  health: 230,
  attack: 60,
  defense: 55,
  maxAttack: 70,
  maxDefense: 65,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Manananggal",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/ManananggalIdle.png",
    frameCount: 7
  },
  hit: {
    spritesheetSrc: "images/spritesheets/ManananggalHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/ManananggalEnhance.png",
  },
  skill1: {
      name: "Scratch",
      type: "Attack",
      damage: 55,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/ManananggalSkill1.png",
      frameCount: 5
  },
  skill2: {
      name: "Rage",
      type: "Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 8,
      boosting: "Attack",
      spritesheetSrc: "images/spritesheets/ManananggalSkill2.png",
      frameCount: 9
  }
};
let duwende1 = {
  health: 290,
  attack: 42,
  defense: 66,
  maxAttack: 55,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Duwende",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/DuwendeIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/DuwendeHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/DuwendeEnhance.png",
  },
  skill1: {
      name: "Chop",
      type: "Attack",
      damage: 40,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/DuwendeSkill1.png",
      frameCount: 4
  },
  skill2: {
      name: "Chant",
      type: "Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 8,
      boosting: "Health",
      spritesheetSrc: "images/spritesheets/DuwendeSkill2.png",
      frameCount: 12
  }
};
let duwende2 = {
  health: 290,
  attack: 42,
  defense: 66,
  maxAttack: 55,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Duwende",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/DuwendeIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/DuwendeHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/DuwendeEnhance.png",
  },
  skill1: {
      name: "Chop",
      type: "Attack",
      damage: 40,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/DuwendeSkill1.png",
      frameCount: 4
  },
  skill2: {
      name: "Chant",
      type: "Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 8,
      boosting: "Health",
      spritesheetSrc: "images/spritesheets/DuwendeSkill2.png",
      frameCount: 12
  }
};
let duwende3 = {
  health: 290,
  attack: 42,
  defense: 66,
  maxAttack: 55,
  maxDefense: 75,
  currentHealth: undefined,
  currentAttack: undefined,
  currentDefense: undefined,
  name: "Duwende",
  class: undefined,
  idle: {
    spritesheetSrc: "images/spritesheets/DuwendeIdle.png",
    frameCount: 3
  },
  hit: {
    spritesheetSrc: "images/spritesheets/DuwendeHit.png",
  },
  enhance: {
    spritesheetSrc: "images/spritesheets/DuwendeEnhance.png",
  },
  skill1: {
      name: "Chop",
      type: "Attack",
      damage: 40,
      accuracy: 100,
      value: "N/A",
      boosting: "N/A",
      spritesheetSrc: "images/spritesheets/DuwendeSkill1.png",
      frameCount: 4
  },
  skill2: {
      name: "Chant",
      type: "Enhancer",
      damage: "N/A",
      accuracy: 100,
      value: 8,
      boosting: "Health",
      spritesheetSrc: "images/spritesheets/DuwendeSkill2.png",
      frameCount: 12
  }
};