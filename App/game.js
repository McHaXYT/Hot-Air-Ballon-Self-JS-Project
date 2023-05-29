const userPlayer = document.getElementById('userPlayer');
const backgroundCanvas = document.getElementById('canvas');
const body = document.getElementById('body');
const displayScore = document.getElementById('score');
const displayEndedScore = document.getElementById('score-ge')
const displayGameEnded = document.getElementById('game-ended');
const tryAgainBtn = document.getElementById('again-btn');
const musicBtn = document.getElementById('music-btn');

var gameMusic = document.getElementById('game-music');
var musicPlaying = false;
let screenWidth = window.innerWidth;
let score = 0

function startGame() {
    score = 0
    displayScore.innerText = score
    displayEndedScore.innerText = score
    displayGameEnded.classList.add('display-none');
    userPlayer.classList.remove('display-none')
    setInterval('generateRock()', 800);
    setInterval('deleteRock()', 10);
    setInterval('isCollide()', 100);
    setInterval('Score()', 1000); 
}

document.addEventListener("touchmove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    userPlayer.style.left = -90 + x + "px";
    userPlayer.style.top =  -30 + y + "px";    
});

function generateRock() {
    const rock = document.createElement('img');
    const randomImage = Math.floor(Math.random() * 2) + 1
    rock.setAttribute('src', `Img/rock-${randomImage}.png`)
    rock.setAttribute('alt', 'rock')
    rock.id = 'obstical-rock';
    rock.classList.add('rocks');
    const randomGenerator = Math.floor(Math.random() * (screenWidth - 100)) + 1
    rock.style.left = randomGenerator + "px";
    body.appendChild(rock)
} 

function deleteRock() {
    if (document.getElementById('obstical-rock').y >= window.innerHeight) {
        body.removeChild(document.getElementById('obstical-rock'))
    } else {

    }
}

function Score() {
    score++
    displayScore.innerText = score
    displayEndedScore.innerText = score
}

function ClearAllIntervals() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

function isCollide() {
    if (userPlayer.x < document.getElementById('obstical-rock').x + document.getElementById('obstical-rock').width && userPlayer.x + userPlayer.width > document.getElementById('obstical-rock').x && userPlayer.y < document.getElementById('obstical-rock').y + document.getElementById('obstical-rock').height && userPlayer.height + userPlayer.y > document.getElementById('obstical-rock').y) {
        console.log('collided');
        ClearAllIntervals()
        setInterval('deleteRock(), 10');
        displayGameEnded.classList.remove('display-none');
        userPlayer.classList.add('display-none')
    } else {

    }
}

musicBtn.addEventListener('click', function() {
    if (musicPlaying === false) {
        gameMusic.play()
        musicPlaying = true
        musicBtn.classList.toggle('red')
    } else {
        gameMusic.pause()
        musicPlaying = false
        musicBtn.classList.toggle('red')
    }
});

tryAgainBtn.addEventListener('click', function() {
    startGame()
})

startGame()














