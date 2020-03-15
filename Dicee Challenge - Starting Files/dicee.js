//random # between 1-6 for dice
var randomNumber1 = Math.floor(Math.random() * (5) + 1);
var randomNumber2 = Math.floor(Math.random() * (5) + 1);


//Changes the random image value of the image
document.querySelector(".container .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
//For second dice
document.querySelector(".container .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//declare winner

if(randomNumber1 > randomNumber2)
{
    //change heading
    document.querySelector("h1").innerHTML = "Player 1 Wins!"; 

}
else if( randomNumber2 == randomNumber1)
{
    document.querySelector("h1").innerHTML = "Draw!"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}