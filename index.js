var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomnumber2+".png";
var imagesource="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource);
if(randomNumber1<randomnumber2){
  document.querySelector("h1").innerHTML="💥💥Player 2 Wins.💥💥"
}
else if(randomNumber1>randomnumber2){
  document.querySelector("h1").innerHTML="💥💥Player 1 Wins.💥💥"
}
else{
    document.querySelector("h1").innerHTML="Draw!🎊"
}
