$(document).ready(function() {

//SET UP GAME
var greenSound = document.createElement('audio');
greenSound.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var redSound = document.createElement('audio');
redSound.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowSound = document.createElement('audio');
yellowSound.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var blueSound = document.createElement('audio');
blueSound.setAttribute('src','https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var pattern = [];
var userPattern = [];
var streak = 0;

function playPattern (choice) {
    switch (choice) {
        case 0:
            $('.green').delay(1000).queue(function(next) {$('.green').css('background', 'radial-gradient(white,green)');greenSound.play();next()}).delay(500).queue(function(next) {$('.green').css('background', 'green');next();});
            break;
        case 1:
            $('.red').delay(1000).queue(function(next) {$('.red').css('background', 'radial-gradient(white,red)');redSound.play();next()}).delay(500).queue(function(next) {$('.red').css('background', 'red');next();});
            break;
        case 2:
            $('.yellow').delay(1000).queue(function(next) {$('.yellow').css('background', 'radial-gradient(white,yellow)');yellowSound.play();next()}).delay(500).queue(function(next) {$('.yellow').css('background', 'yellow');next();});
            break;
        case 3:
            $('.blue').delay(1000).queue(function(next) {$('.blue').css('background', 'radial-gradient(white,blue)');blueSound.play();next()}).delay(500).queue(function(next) {$('.blue').css('background', 'blue');next();});
            break;
    };
}

function makeUnclickable() {
    $('.green').attr('unclickable','unclickable');
    $('.red').attr('unclickable','unclickable');
    $('.yellow').attr('unclickable','unclickable');
    $('.blue').attr('unclickable','unclickable');
}

function makeClickable() {
    $('.green').removeAttr('unclickable');
    $('.red').removeAttr('unclickable');
    $('.yellow').removeAttr('unclickable');
    $('.blue').removeAttr('unclickable');
}



$('.start-button').click(function() {

    //initialize
    makeUnclickable();
    $('.counter').queue(function(next) {$(this).text('--'); next();}).delay(500).queue(function(next) {$(this).text('01');next();});
    pattern = [];
    userPattern = [];
    streak = 0;
    pattern.push(Math.floor(Math.random()*4));
    console.log(pattern);

    pattern.forEach(function(p) {
        playPattern(p);
    });

    setTimeout(function() {
        makeClickable();
    }, 1500*pattern.length);
})


//GREEN BUTTON SETUP
$(".green").mousedown(function() {
    if(!$(this).is('[unclickable]')) {
        $(this).css('background', 'radial-gradient(white,green)');
        greenSound.play();
    }
})
$(".green").mouseout(function() {
    $(this).css("background", "green");
})
$(".green").mouseup(function() {
    $(this).css("background", "green");
})

//RED BUTTON SETUP
$(".red").mousedown(function() {
    if(!$(this).is('[unclickable]')) {
        $(this).css('background', 'radial-gradient(white,red)');
        redSound.play();
    }
})
$(".red").mouseout(function() {
    $(this).css("background", "red");
})
$(".red").mouseup(function() {
    $(this).css("background", "red");
})

//YELLOW BUTTON SETUP
$(".yellow").mousedown(function() {
    if(!$(this).is('[unclickable]')) {
        $(this).css('background', 'radial-gradient(white,yellow)');
        yellowSound.play();
    }
})
$(".yellow").mouseout(function() {
    $(this).css("background", "yellow");
})
$(".yellow").mouseup(function() {
    $(this).css("background", "yellow");
})

//BLUE BUTTON SETUP
$(".blue").mousedown(function() {
    if(!$(this).is('[unclickable]')) {
        $(this).css('background', 'radial-gradient(white,blue)');
        blueSound.play();
    }
})
$(".blue").mouseout(function() {
    $(this).css("background", "blue");
})
$(".blue").mouseup(function() {
    $(this).css("background", "blue");
})

})             