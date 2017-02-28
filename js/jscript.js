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
var start = false;
var i = 0;

function playPattern (choice) {
    console.log('i: '+choice);
    switch (choice) {
        case 0:
            $('.green').delay(000).queue(function(next) {$('.green').css('background', 'radial-gradient(white,green)');greenSound.play();next()}).delay(500).queue(function(next) {$('.green').css('background', 'green');next();});
            break;
        case 1:
            $('.red').delay(000).queue(function(next) {$('.red').css('background', 'radial-gradient(white,red)');redSound.play();next()}).delay(500).queue(function(next) {$('.red').css('background', 'red');next();});
            break;
        case 2:
            $('.yellow').delay(000).queue(function(next) {$('.yellow').css('background', 'radial-gradient(white,yellow)');yellowSound.play();next()}).delay(500).queue(function(next) {$('.yellow').css('background', 'yellow');next();});
            break;
        case 3:
            $('.blue').delay(000).queue(function(next) {$('.blue').css('background', 'radial-gradient(white,blue)');blueSound.play();next()}).delay(500).queue(function(next) {$('.blue').css('background', 'blue');next();});
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

function checkChoice(a,b) {
    if(a==b) {
        userPattern.push(a);
        console.log(pattern);
        console.log(userPattern);
        return true;
    } else {
        console.log(pattern);
        console.log(userPattern);
        reset();
        return false;
    }
}

function reset(asdf) {
    pattern = [];
    userPattern = [];
    streak = 0;
    if(asdf == 1) {
        $('.counter').queue(function(next) {$(this).text('WIN'); next();}).delay(5000).queue(function(next) {$(this).text('--'); next();}).delay(500).queue(function(next) {$(this).text('00');next();});
    } else {
        $('.counter').queue(function(next) {$(this).text('NO'); next();}).delay(2000).queue(function(next) {$(this).text('--'); next();}).delay(500).queue(function(next) {$(this).text('00');next();});
    }
    start = false;
}

function addPattern() {
        pattern.push(Math.floor(Math.random()*4));
        streak++;
        if(streak<10) {
            $('.counter').delay(500).queue(function(next) {$(this).text('0'+streak);next();});
        } else {
            $('.counter').delay(500).queue(function(next) {$(this).text(streak);next();});
        }
}


$('.start-button').click(function() {

    //initialize
    makeUnclickable();
    $('.counter').queue(function(next) {$(this).text('--'); next();}).delay(500).queue(function(next) {$(this).text('01');next();});
    pattern = [];
    userPattern = [];
    streak = 1;
    start = true;
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
        if(start && checkChoice(0,pattern[i])) {
            i++;
            if(i == pattern.length) {
                if(i == 20) {
                    reset(1);
                }
                addPattern();
                makeUnclickable();
                setTimeout(function() {
                    pattern.forEach(function(p, j) {
                        setTimeout(function() {
                            playPattern(p);
                        },1000*j);
                    });
                },1000);
            i = 0;
            userPattern = [];
            }
        }
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
        if(start && checkChoice(1,pattern[i])) {
            i++;
            if(i ==pattern.length) {
                if(i == 20) {
                    reset(1);
                }
                addPattern();
                setTimeout(function() {
                    pattern.forEach(function(p, j) {
                        setTimeout(function() {
                            playPattern(p);
                        },1000*j);
                    });
                },1000);
            i = 0;
            userPattern = [];
            }
        }
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
        if(start && checkChoice(2,pattern[i])) {
            i++;
            if(i==pattern.length) {
                if(i == 20) {
                    reset(1);
                }
                addPattern();
                setTimeout(function() {
                    pattern.forEach(function(p, j) {
                        setTimeout(function() {
                            playPattern(p);
                        },1000*j);
                    });
                },1000);
                i = 0;
                userPattern = [];
            }
        }
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
        if(start && checkChoice(3,pattern[i])) {
            i++;
            if(i==pattern.length) {
                if(i==20) {
                    reset(1);
                }
                addPattern();
                setTimeout(function() {
                    pattern.forEach(function(p, j) {
                        setTimeout(function() {
                            playPattern(p);
                        },1000*j);
                    });
                },1000);
            i = 0;
            userPattern = [];
            }
        }
    }
})
$(".blue").mouseout(function() {
    $(this).css("background", "blue");
})
$(".blue").mouseup(function() {
    $(this).css("background", "blue");
})

})             