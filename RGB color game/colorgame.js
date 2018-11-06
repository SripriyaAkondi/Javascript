window.onload=function(){
var number_of_squares=6;
var colors=generateRandomColor(6);
var pickedColor=pickColor();
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var newColors=document.querySelector("#newColors");
var easyLevel=document.querySelector("#easy");
var hardLevel=document.querySelector("#hard");
var h1=document.querySelector("h1");
var rgb_actualColor=document.querySelector("#question");
rgb_actualColor.textContent=pickedColor;


//When New colors or Play Again? is clicked
newColors.addEventListener("click",generateNewColors);

//When Easy level is clicked

easyLevel.addEventListener("click",generateEasyColors);

//When hard level is clicked
hardLevel.addEventListener("click",generateHardColors);




function generateEasyColors(){
	
	easyLevel.classList.add("selected");
	hardLevel.classList.remove("selected");
	message.textContent="";
	number_of_squares=3;
	//generate new colors
	colors=generateRandomColor(number_of_squares);
	//pick a random color from array
	pickedColor=pickColor();
	//change the main color that is to be found
	rgb_actualColor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		//display colors for the squares
		squares[i].style.backgroundColor=colors[i];
		
		}
		else{
			//to hide 3 squares
			squares[i].style.display="none";
		}
	}

	
	//change the background color of header
	h1.style.background="steelblue";
	

}

function generateHardColors(){
	easyLevel.classList.remove("selected");
	hardLevel.classList.add("selected");
	message.textContent="";
	number_of_squares=6;
	colors=generateRandomColor(number_of_squares);
	pickedColor=pickColor();
	rgb_actualColor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
		
	}
	
	h1.style.background="steelblue";

	
}

function generateNewColors(){
	//generate new colors
	colors=generateRandomColor(number_of_squares);
	//pick a random color from array
	pickedColor=pickColor();
	//change the main color that is to be found
	rgb_actualColor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		//display colors for the squares
		squares[i].style.backgroundColor=colors[i];	
	}
	
	//change the background color of header
	h1.style.background="steelblue";
	//change from play again to new colors
	newColors.textContent="New Colors";
	
	message.textContent="";
}

function colorPicker(){
		clickedColor=this.style.backgroundColor;
		if(clickedColor==pickedColor){
			
			for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor=pickedColor;
			}
			message.textContent="Correct!";
			h1.style.background=pickedColor;
			newColors.textContent="Play Again?";
		}
		
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again!";
		
		}
	
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}



function generateRandomColor(num){
	var arr=[];
	for(var i=0; i<num;i++){
		//generate a random color and push that into the array.
		arr.push(randomColor());
	}
	
	return arr;
}

function randomColor(){
	// to pick red from 0-255
	var r=Math.floor(Math.random()* 256);
	// to pick green from 0-255
	var g=Math.floor(Math.random()* 256);
	// to pick blue from 0-255
	var b=Math.floor(Math.random()* 256);
	//format should be in rgb(255, 0, 255)form
	return "rgb(" + r + ", " + g + ", " + b +")";
}

for(var i=0; i<squares.length; i++){
	//display colors for the squares
	squares[i].style.backgroundColor=colors[i];
	//add events to all the squares
	squares[i].addEventListener("click", colorPicker);
}


}