const section = document.querySelector('section');

const playerLivesCount = document.querySelector('span');
const playerLives = 10;

//link text
playerLivesCount.textContent = playerLives;

//Generate the data
// [{imgSrc: './images/Clemens.jpg'}]

const getData = () => [
    {imgSrc: './images/Clemens.jpg', name: 'Mr. Clemens'},
    {imgSrc: './images/Hodek.jpg', name: 'Ms. Houdek'},
    {imgSrc: './images/Medina.jpg', name: 'Ms. Medina'},
    {imgSrc: './images/Clemens.jpg', name: 'Mr. Clemens'},
    {imgSrc: './images/Hodek.jpg', name: 'Ms. Houdek'},
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
    console.log(cardData)
};

randomize()