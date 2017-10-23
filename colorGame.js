var colors=[];
var squares=document.getElementsByClassName("square");
var pickedColor;
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1= document.querySelector("h1");
var newgame=document.querySelector("#newGame");
var mode=document.getElementsByClassName("mode");
var numofSquare=6;

init();

function init(){
    //mode button 
    setMode();
    setSquares();
    reset();

}

function setMode(){
    for(var i=0;i<mode.length;i++){
        mode[i].addEventListener("click",function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");

         //figure out how many squares to show
        //pick new colors

        //pick a new picked color
        //update page to reflect changes
        this.textContent==="EASY" ? numofSquare=3 : numofSquare=6;
        reset();   
    });
    }
}

function setSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;

        if(clickedColor === pickedColor){
            message.textContent="correct";
            changeColors(pickedColor);
            h1.style.backgroundColor=pickedColor;
            newgame.textContent="Play Again?"
        } else{
            this.style.backgroundColor="#232323";
            message.textContent="Try Again!";

        }
    });
    }
    
}

function reset(){

    colors=generateRandomColors(numofSquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i=0;i<squares.length;i++){
    //add initial colors tp squres
    if(colors[i]){
        squares[i].style.display="block";
        squares[i].style.backgroundColor=colors[i];
    }
    else{
        squares[i].style.display="none";
    }
}
    h1.style.backgroundColor="pink";
    message.textContent="";
    newgame.textContent="NEW COLORS";


}


newGame.addEventListener("click",function(){
    reset();
});


function changeColors(color){
    //loop through all squares change each color to match given color
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
        
    }
}

function pickColor(){
    var pickedNum=Math.floor(Math.random()* colors.length);
    return colors[pickedNum];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;

}
function randomColor(){
    var rgb=[];
    for(var i=0;i<3;i++){   
        rgb.push(Math.floor(Math.random()*256));
    }
    return "rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")";

}