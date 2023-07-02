// generation of random value
var y = Math.floor(Math.random()*10+1);
var guess = 1;
// count of attempts
// until hit
  
// function for the number sent by the user
function submit(){
 
}
 
var x = document.getElementById("guessField").ariaValueMax;

if (x==y)
{
    alert("Congratulations"+playername+"You Guessed It Right IN"+guess+"Guess");
    guess=1;
}
else if(x>y){
    guess++;
    alert("Oops Sorry! Try a smaller number");

}
else{
    guess++;
    alert("Oops Sorry! Try a greater number");


}
function playAgain(){
    y = Math.floor(Math.random()*10+1);
}