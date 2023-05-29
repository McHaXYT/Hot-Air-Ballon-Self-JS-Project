const backBtns = document.querySelectorAll('#back-btn');
const aboutUsContainer = document.getElementById('about-us-main-container');
const rateUsContainer = document.getElementById('rate-us-main-container');
const aboutBtn = document.getElementById('about-us');
const rateBtn = document.getElementById('rate-us');
const star1 = document.getElementById('star-1');
const star2 = document.getElementById('star-2');
const star3 = document.getElementById('star-3');
const star4 = document.getElementById('star-4');
const star5 = document.getElementById('star-5');
const removeFeedbackBtn = document.getElementById('remove-feedback-btn');
const feedbackText = document.getElementById('feedbacks');
const musicBtn = document.getElementById('music-btn');
var gameMusic = document.getElementById('game-music');

var musicPlaying = false;

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

aboutBtn.addEventListener('click', function() {
    aboutUsContainer.classList.remove('display-none');
});

backBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        this.parentElement.classList.add('display-none');
    });
});

rateBtn.addEventListener('click', function() {
    rateUsContainer.classList.remove('display-none');
});

removeFeedbackBtn.addEventListener('click', function() {
    star1.classList.remove('yellow')
    star2.classList.remove('yellow')
    star3.classList.remove('yellow')
    star4.classList.remove('yellow')
    star5.classList.remove('yellow')
    feedbackText.innerText = ''
});

star1.addEventListener('click', function() {
    feedbackText.classList.remove('display-none');
    feedbackText.innerText = 'Garbage !'
    if (star1.classList.contains('yellow')) {
        
    } else {
        star1.classList.add('yellow')
    }
    if (star2.classList.contains('yellow') || star3.classList.contains('yellow') || star4.classList.contains('yellow') || star5.classList.contains('yellow')) {
        star4.classList.remove('yellow')
        star3.classList.remove('yellow')
        star2.classList.remove('yellow')
        star5.classList.remove('yellow')
    } else {
        star1.classList.add('yellow')
    }

});

star2.addEventListener('click', function() {
    feedbackText.classList.remove('display-none');
    feedbackText.innerText = 'meh !'
    if (star1.classList.contains('yellow')) {

    } else {
        star1.classList.add('yellow')
    }
    if (star2.classList.contains('yellow')) {

    } else {
        star2.classList.add('yellow')
    }
    if (star1.classList.contains('yellow') && star2.classList.contains('yellow')) {
        
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
    }
    if (star3.classList.contains('yellow') || star4.classList.contains('yellow') || star5.classList.contains('yellow')) {
        star4.classList.remove('yellow')
        star3.classList.remove('yellow')
        star5.classList.remove('yellow')
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
    }
});

star3.addEventListener('click', function() {
    feedbackText.classList.remove('display-none');
    feedbackText.innerText = 'just fine !'
    if (star1.classList.contains('yellow')) {

    } else {
        star1.classList.add('yellow')
    }
    if (star2.classList.contains('yellow')) {

    } else {
        star2.classList.add('yellow')
    }
    if (star3.classList.contains('yellow')) {

    } else {
        star3.classList.add('yellow')
    }
    if (star1.classList.contains('yellow') && star2.classList.contains('yellow')) {
        
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
    }
    if (star1.classList.contains('yellow') && star2.classList.contains('yellow') && star3.classList.contains('yellow')) {
        
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
        star3.classList.add('yellow')
    }
    if (star4.classList.contains('yellow') || star5.classList.contains('yellow')) {
        star4.classList.remove('yellow')
        star5.classList.remove('yellow')
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
        star3.classList.add('yellow')
    }
});

star4.addEventListener('click', function() {
    feedbackText.classList.remove('display-none');
    feedbackText.innerText = 'good !'
    if (star1.classList.contains('yellow')) {

    } else {
        star1.classList.add('yellow')
    }
    if (star2.classList.contains('yellow')) {

    } else {
        star2.classList.add('yellow')
    }
    if (star3.classList.contains('yellow')) {

    } else {
        star3.classList.add('yellow')
    }
    if (star4.classList.contains('yellow')) {

    } else {
        star4.classList.add('yellow')
    }
    if (star1.classList.contains('yellow') && star2.classList.contains('yellow') && star3.classList.contains('yellow') && star4.classList.contains('yellow')) {
        
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
        star3.classList.add('yellow')
        star4.classList.add('yellow')
    }
    if (star5.classList.contains('yellow')) {
        star5.classList.remove('yellow')
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
        star4.classList.add('yellow')
        star3.classList.add('yellow')
    }
});

star5.addEventListener('click', function() {
    feedbackText.classList.remove('display-none');
    feedbackText.innerText = "couldn't get much better than that !"
    if (star1.classList.contains('yellow')) {

    } else {
        star1.classList.add('yellow')
    }
    if (star2.classList.contains('yellow')) {

    } else {
        star2.classList.add('yellow')
    }
    if (star3.classList.contains('yellow')) {

    } else {
        star3.classList.add('yellow')
    }
    if (star4.classList.contains('yellow')) {

    } else {
        star4.classList.add('yellow')
    }
    if (star5.classList.contains('yellow')) {

    } else {
        star5.classList.add('yellow')
    }

    if (star1.classList.contains('yellow') && star2.classList.contains('yellow') && star3.classList.contains('yellow') && star4.classList.contains('yellow') && star5.classList.contains('yellow')) {
        
    } else {
        star1.classList.add('yellow')
        star2.classList.add('yellow')
        star3.classList.add('yellow')
        star4.classList.add('yellow')
        star5.classList.add('yellow')
    }
})