const canvas = document.getElementbyId("canvas");
const context=canvas.getContext("2d");

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

//Text be printed on matrix animation
const texts="abcdefghijklmnopqrstuvwxy1234567890";
const Captext="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const newtext= texts+Captext;

//Set font size
const fontSize= 16;

//Divide canvas into multiple colums
const columns= canvas.width/fontSize;

//font array will be y coordinates
const font= [];
for(let x=0; x<columns;x++){
  font[x]=0;
}
//Creates our draw function
const draw= () =>{

context.fillStyle=' rgba(0,0,0,0.5)';
context.fillRect(0,0,canvas.width,canvas.height);


context.fillStyle="#0f0";
context.fillStyle= fontSize +" px monospace";
 //Sets font of canvas to 16px monospace

 //This loop iterates through the array randomly outputting chars and ints
  for(let x=0; x<columns;x++){
    const randomText= texts.charAt(Math.floor(Math.random()* texts.length));

    //Fill the text on the canvas usinf fillText function
    context.fillText(random, x * fontSize, font[x] * fontSize);

    //The fillText signature is fillText(textToFill, xCoordinate, yCoordinate);
    //As out matrix proceeds, we need to make sure that when the letters move to the bottom of the canvas ,
    // it loops to the top of the canvas and repeat all over again.
    //Hence make the y Coprdinate for the text zero.
    if(font[x]* fontSize > canvas.height && Math.random() > 0.975){
       font[x]=0;
    }
     font[x]++;
  }
}
setInterval(draw, 35);