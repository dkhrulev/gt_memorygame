const section = document.querySelector('section');

const playerLivesCount = document.querySelector('span');
const playerLives = 10;

//link text
playerLivesCount.textContent = playerLives;

//Generate the data
// [{imgSrc: './images/Clemens.jpg'}]

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
    const clickedCard = e.target
    clickedCard.classList.add('flipped')
    const flipedCards = document.querySelectorAll('.flipped')
    

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
        }
    }
};

cardGenerator();