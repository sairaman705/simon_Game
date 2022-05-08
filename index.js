//for dice 1 :

var randomNumber1 = Math.floor(Math.random()*6)+1;      //generate random number
var randomImg = "Dice" + randomNumber1 + ".png";        //dice1.png
var randomImgSrc = "images/" + randomImg;               //dice 1 to 6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);

//for dice 2 :

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomImageSrc2 = "images/Dice" + randomnum2 + ".png";               //dice 1 to 6
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomnum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomnum2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw !!";
}