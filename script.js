const words = [
    "APPLE","TABLE", "BREAD",
    "SWORD","FRUIT","WATER", 
    "HAPPY", "PLANT", "STARS", 
    "SMILE", "MOUSE", "FLOOR",
    "CHAIR", "LIGHT", "MUSIC",
    "GRASS","HEART","ROCKS",
    "SKYPE", "FIRED",'SOCKS'
];
const refeshbtn = document.querySelector('.refresh')
const checkbtn = document.querySelector('.check')
const UserInput = document.querySelector('.input-box')
const shuffle = document.querySelector('.shuffled-word')
const feedback = document.querySelector('.feedback')
let shuffledWord 
let word
let a
let b
let timeIN


refeshbtn.addEventListener('click', (e) =>{
    e.target.textContent = 'Refresh'
    timing()
    refeshWord()
})

const timer = document.querySelector('.timer')
timeValue = 30

function timing(){
      clearInterval(timeIN) 
     timeIN = setInterval(() =>{
         timeValue--
         if(timeValue < 0){
            refeshWord()
         }
         timer.textContent = `Time left: ${timeValue}s`
    },1000)
}


function refeshWord(){
    timeValue = 30
    timing()

    shuffle.textContent = ''
    UserInput.value = ''
    a = []
    b = []

    let ran = Math.floor(Math.random() * words.length)
    word = words[ran]
    for(let i = 0; i < word.length; i++){
        a.push(word[i])
    }

    for(let i = 0; i < a.length; i++){                    // ['']
        b.splice(Math.floor(Math.random() * words.length), 0, a[i]) //['c','a','t']
    }

    shuffledWord = b.join('')

   if(shuffledWord == word){
     refeshWord()
   }
   shuffle.textContent = shuffledWord
}


checkbtn.addEventListener('click', () =>{
    if(UserInput.value == '')
       enterWord()
    else checkRes()
})
function checkRes(){
    clearInterval(timeIN)
    let userIN = (UserInput.value).toUpperCase()
    
    document.querySelector(".result").style.display  = 'block'
    if(userIN == word){
        document.querySelector(".material-symbols-outlined").textContent = 'check'
        feedback.textContent = 'YOU WIN'
    }else{
        document.querySelector(".material-symbols-outlined").textContent = 'close'
        feedback.textContent = 'YOU LOST'
    }
}


UserInput.addEventListener('keydown', (event) =>{
    if(event.key == 'Enter'){
        if(UserInput.value !== '')
           checkRes()
    else enterWord()
    }
})


document.addEventListener('click', (e) =>{
    if(e.target === document.querySelector('body') || e.target === document.querySelector('.container')){
        document.querySelector(".result").style.display  = 'none'
        refeshWord()
    }
})


let invalid = document.querySelector('.invalid')
function enterWord(){
    let line = document.querySelector('.line')
    invalid.style.right = '6px'
    line.classList.add('active')
    
    let widthValue = parseInt(getComputedStyle(line).width);
         
    /* if(widthValue === 20){
       console.log('Joy fool waa')
    } */
    while(widthValue == 2){
        console.log('joy fool waa')
    }
}

let closer = document.querySelector('.close')

closer.addEventListener('click', () =>{
  invalid.style.right = '-100%'
})