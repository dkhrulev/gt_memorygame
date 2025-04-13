const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
const timerCount = document.querySelector('.timerCount'); 

let playerLives = 10;
let timer = 0;
let timerInterval;
//link text
playerLivesCount.textContent = playerLives;

//timer
function clearTimer() {
    timer = 0;
    timerCount.textContent = timer;
};


function startTimer() {
    timerInterval = setInterval(() => {
      timer++;
      timerCount.textContent = timer;
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
  };


//Generate the data
// [{imgSrc: './images/Clemens.jpg'}]
const loadingScreen = document.getElementById("loading-screen");

window.addEventListener("load", () => {
  loadingScreen.style.display = "none";
});

const getData = () => [
    {imgSrc: './images/Clemens.jpg', name: 'Mr. Clemens'},
    {imgSrc: './images/Houdek.jpg', name: 'Ms. Houdek'},
    {imgSrc: './images/Medina.jpg', name: 'Ms. Medina'},
    {imgSrc: './images/Clemens.jpg', name: 'Mr. Clemens'},
    {imgSrc: './images/Houdek.jpg', name: 'Ms. Houdek'},
    {imgSrc: './images/Medina.jpg', name: 'Ms. Medina'},
    {imgSrc: './images/Abby.jpg', name: 'Coach Abby'},
    {imgSrc: './images/Mallernee.jpg', name: 'Coach Mallernee'},
    {imgSrc: './images/Rodriguez.jpg', name: 'Coach Rodriguez'},
    {imgSrc: './images/Abby.jpg', name: 'Coach Abby'},
    {imgSrc: './images/Mallernee.jpg', name: 'Coach Mallernee'},
    {imgSrc: './images/Rodriguez.jpg', name: 'Coach Rodriguez'},
    
];

//const data = getData();
//RANDOMIZE
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
    return cardData
};

//cardGenerator

const cardGenerator = () => {
    const cardData = randomize();

    const cards = document.querySelectorAll('.card')

    cardData.forEach(item => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        
        face.src = item.imgSrc;
        // cards [index].setAttribute('name', item.name)
        card.setAttribute('name', item.name)
        

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back)

        card.addEventListener('click', (e) => { 
            
            card.classList.toggle('toggleCard')
            checkCards(e)
        })
    })
}

const checkCards = (e) => {
    if (timer === 0) startTimer();
    const clickedCard = e.target
    clickedCard.classList.add('flipped')
    const flipedCards = document.querySelectorAll('.flipped')
    const toggleCards = document.querySelectorAll('.toggleCard')

    if(flipedCards.length === 2) {
        if(flipedCards[0].getAttribute('name') === 
        flipedCards[1].getAttribute('name')
     ) {
            console.log('match')
            flipedCards.forEach(card => {
                card.classList.remove('flipped')
                card.style.pointerEvents = 'none'
            })
        } else { console.log('wrong')
                flipedCards.forEach(card => {
                    card.classList.remove('flipped')
                    setTimeout(() => card.classList.remove('toggleCard'), 1000 )
                })
                setTimeout(() => {
                    playerLives--;
                    playerLivesCount.textContent = playerLives;
                    if (playerLives === 0) {
                        restart('😭😧😶‍🌫️ YOU LOST');
                        stopTimer();                        
                    };
                }, 1000 )
                
        }
    }
    console.log('toggleCards.length',toggleCards.length)
    if(toggleCards.length === 12){
        stopTimer();
        setTimeout(() => restart('👌😁😎 YOU WON'), 1000 );
    }
};

//restart
const restart = (text)  => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none'
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');

        
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all'
            faces[index].src = item.imgSrc
            cards[index].setAttribute('name', item.name)
            section.style.pointerEvents = 'all'
        }, 1000)
    });
    playerLives = 10;
    playerLivesCount.textContent = playerLives
    clearTimer();
    setTimeout(() => window.alert(text), 100);
}

cardGenerator();