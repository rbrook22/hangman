var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var phrases = ["Early bird gets the worm", "Read between the lines", "I can eat a horse", "Twenty-four seven", "Cat got your tounge", "One in one million", "I beg to differ", "Easier said than done", "Add insult to injury", "Don't cry over spilled milk", "Curiosity killed the cat", "Two peas in a pod", "That's the last straw", "Piece of cake", "Speak of the devil", "Go the whole nine yards", "An eye for an eye", "Hit the hay", "Stab someone in the back", "Quit cold turkey", "Cut to the chase", "Best of both worlds", "Kill two birds with one stone", "Break a leg", "Hit the nail on the head", "Kick the bucket"];     
var movies = ["Frankly, my dear, I don't give a damn", "May the Force be with you", "Titanic", "After all this time? Always.", "Life is like a box of chocolates", "To infinity and beyond", "I'll be back", "Wax on, wax off", "I'm going to make him an offer he can't refuse", "Want to know how I got these scars?", "Citizen Kane", "Team Edward", "No, I am your father", "Do or do not. There is no try.", "Do you want to build a snowman?", "Hakuna Matata", "Go ahead, make my day", "Bond. James Bond.", "You're going to need a bigger boat", "You talkin' to me?", "Here's Johnny!", "The hills are alive!", "Toto, I have a feeling we're not in Kansas anymore", "Welcome to Jurassic Park", "Say hello to my little friend!", "Run Forest Run!"];
var songs = ["I came in like a wrecking ball", "Yesterday all my troubles seemed so far away", "Work, work, work, work, work", "Just a small town girl", "I still haven't found what I'm looking for", "Annie are you OK?", "Nah nah nah nah nah nah nah, nah nah nah nah, hey Jude", "Is this the real life? Is this just fantasy?", "We don't need no education", "Have you ever seen the rain?", "She's got eyes of the bluest skys", "So close, no matter how far", "I don't want to miss a thing", "Take my hand, we'll make it, I swear", "That's me in the corner", "A mulatto, an albino, a mosquito, my libido", "You've been thunderstruck", "Another one bites the dust", "Eye of the tiger", "B-B-B-Bennie and the Jets", "Sing us a song you're the piano man", "Hello darkness my old friend", "Somewhere over the rainbow blue birds fly", "Don't worry about a thing", "Imagine there's no heaven", "Can you feel the love tonight?"];
var challenges = ["A"];

function sp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}

function mp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('multiPage').style.display = "block";
}

function phrase(){
    rand = Math.floor(Math.random()*phrases.length);
    word = phrases[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Phrases";
    hangman();
}

function movie(){
    rand = Math.floor(Math.random()*movies.length);
    word = movies[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Movies and movie quotes";
    hangman();
}

function song(){
    rand = Math.floor(Math.random()*songs.length);
    word = songs[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Song titles and lyrics";
    hangman();
}

function challenge(){
    rand = Math.floor(Math.random()*challenges.length);
    word = challenges[rand];
    numChar = 1;
    var letter = word.substring(0,1);
        document.getElementById('letter1').innerHTML = letter;
        document.getElementById('letter1').style.visibility = "hidden";
        document.getElementById('underline1').style.display = "block";            
        document.getElementById('underline1').style.borderBottom = "3px solid black";
    document.getElementById('singlePage').style.display = "none";    
    document.getElementById('gamePage').style.display = "block";
    document.getElementById('categoryName').innerHTML = "Guess every letter other than the correct one to win!";
    document.getElementById('categoryName').style.width = "100%";
    if(document.getElementById('underline1').offsetWidth == 50){
        document.getElementById('categoryName').style.fontSize = "45px";
    }
    if(document.getElementById('underline1').offsetWidth == 28){
        document.getElementById('categoryName').style.fontSize = "30px";
    }
    if(document.getElementById('underline1').offsetWidth == 18){
        document.getElementById('categoryName').style.fontSize = "20px";
    }
    document.getElementById('letterBank').style.display = "none";
    document.getElementById('challengeBank').style.display = "block";
    phraseLength = 1;
    draw();
}

function challengeGuess(){
    var target = event.target || event.srcElement;
    target.style.visibility = "hidden";
    var lower = target.id;
    var upper = document.getElementById(lower).getAttribute('value');
    var results = document.getElementById('results');
    if(document.getElementById('letter1').innerHTML === upper){
        document.getElementById('letter1').style.visibility = "visible";
        numRight++;
    }
    if(numRight==0){
        numWrong++;
        hang();
    }
    if(numRight==1){
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "You lose!";        
        if(document.getElementById('underline1').offsetWidth == 50){
            results.style.fontSize = "200px";
            results.style.height = "200px";
            results.style.lineHeight = "200px";
        }
        if(document.getElementById('underline1').offsetWidth == 28){
            results.style.marginTop = "20px";
            results.style.fontSize = "100px";
            results.style.height = "100px";
            results.style.lineHeight = "100px";
        }
        if(document.getElementById('underline1').offsetWidth == 18){
            results.style.marginTop = "15px";
            results.style.fontSize = "75px";
            results.style.height = "75px";
            results.style.lineHeight = "75px";
        }
        document.getElementById('challengeBank').style.display = "none";
        document.getElementById('vidSent').style.display = "block";
        document.getElementById('again').style.display = "block";
        document.getElementById('home').style.display = "block";
    }
    if(numWrong==25){
        results.style.visibility = "visible";
        results.style.color = "#00b100";
        results.innerHTML = "You win!";        
        if(document.getElementById('underline1').offsetWidth == 50){
            results.style.fontSize = "200px";
            results.style.height = "200px";
            results.style.lineHeight = "200px";
        }
        if(document.getElementById('underline1').offsetWidth == 28){
            results.style.marginTop = "20px";
            results.style.fontSize = "100px";
            results.style.height = "100px";
            results.style.lineHeight = "100px";
        }
        if(document.getElementById('underline1').offsetWidth == 18){
            results.style.marginTop = "15px";
            results.style.fontSize = "75px";
            results.style.height = "75px";
            results.style.lineHeight = "75px";
        }
        document.getElementById('challengeBank').style.display = "none";
        document.getElementById('vidSent').style.display = "block";
        document.getElementById('again').style.display = "block";
        document.getElementById('home').style.display = "block";
        document.getElementById('letter1').style.visibility = "visible";
    }
}

function countChars(countfrom,displayto) {
    var len = document.getElementById(countfrom).value.length;
    document.getElementById(displayto).innerHTML = len;
}