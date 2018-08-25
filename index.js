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

function readText(){
    word = document.getElementById('input').value;
    hangman();
}

function hangman(){
    var x = word.length;
        if(x==0){
            alert("Please enter something into the text box.");
            return;
        }
    var y = x-1;
    var spaces = 0;
    var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "?", "!", ",", ".", "-", "'");
    for(z = 0; z < word.length; z++){
        var letter = word.substring(y,x);
        if(validChar.indexOf(letter) > -1){
            x--;
            y--;
        }
        else{
            alert("Please remove any special characters.");
            return;
        }
    }
    x = word.length;
    y = x-1;
    while (x>0){
        numChar++;
        var letter = word.substring(y,x);
        if(letter === " "){
            document.getElementById('letter'+x).innerHTML = "&nbsp;";
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('letter'+x).style.display = "block";
            document.getElementById('underline'+x).style.display = "block";
            spaces++;
        }
        else if(letter === "?" || letter === "!" || letter === "," || letter === "." || letter === "-" || letter === "'"){
            document.getElementById('letter'+x).innerHTML = letter;
            document.getElementById('letter'+x).style.display = "block";
            document.getElementById('underline'+x).style.display = "block";
            spaces++;
        }
        else{
            document.getElementById('letter'+x).innerHTML = letter;
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('underline'+x).style.display = "block";            
            document.getElementById('underline'+x).style.borderBottom = "3px solid black";
        }
        x--;
        y--;
    }
    phraseLength = word.length - spaces;
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('gamePage').style.display = "block";
    splitWords();
    document.getElementById('challengeBank').style.display = "none";
    draw();
}

function draw(){
    var ctx = document.getElementById("hangman").getContext('2d');
        ctx.fillStyle = "white";
        ctx.lineWidth=3;
        ctx.fillRect(0, 0, 300, 300);
        ctx.beginPath(); //vertical bar
            ctx.moveTo(50,270);
            ctx.lineTo(50,25);
            ctx.stroke();
        ctx.beginPath(); //vertical bar long piece
            ctx.moveTo(65,270);
            ctx.lineTo(65,85);
            ctx.stroke();
        ctx.beginPath(); //vertical bar short piece
            ctx.moveTo(65,64);
            ctx.lineTo(65,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar
            ctx.moveTo(49,25);
            ctx.lineTo(175,25);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar short piece
            ctx.moveTo(49,40);
            ctx.lineTo(86,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar long piece
            ctx.moveTo(106,40);
            ctx.lineTo(175,40);
            ctx.stroke();
        ctx.beginPath(); //small vertical bar
            ctx.moveTo(173,25);
            ctx.lineTo(173,40);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(100,25);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(60,90);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(60,90);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(100,25);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
        ctx.beginPath(); //noose
            ctx.moveTo(150,40);
            ctx.lineTo(150,80);
            ctx.stroke();
    var cntx = document.getElementById("homeHangman").getContext('2d');
        cntx.fillStyle = "white";
        cntx.lineWidth=3;
        cntx.fillRect(0, 0, 300, 300);
        cntx.beginPath(); //vertical bar
            cntx.moveTo(50,270);
            cntx.lineTo(50,25);
            cntx.stroke();
        cntx.beginPath(); //vertical bar long piece
            cntx.moveTo(65,270);
            cntx.lineTo(65,85);
            cntx.stroke();
        cntx.beginPath(); //vertical bar short piece
            cntx.moveTo(65,64);
            cntx.lineTo(65,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar
            cntx.moveTo(49,25);
            cntx.lineTo(175,25);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar short piece
            cntx.moveTo(49,40);
            cntx.lineTo(86,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar long piece
            cntx.moveTo(106,40);
            cntx.lineTo(175,40);
            cntx.stroke();
        cntx.beginPath(); //small vertical bar
            cntx.moveTo(173,25);
            cntx.lineTo(173,40);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(100,25);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(60,90);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(60,90);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(100,25);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //ground
            cntx.moveTo(35,270);
            cntx.lineTo(265,270);
            cntx.stroke();
        cntx.beginPath(); //noose
            cntx.moveTo(150,40);
            cntx.lineTo(150,80);
            cntx.stroke();
}