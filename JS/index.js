'use strict'
console.log("JS Working");

function startGame(){

let count = 0;

let root = document.getElementById('root');
let point = document.getElementById('points');
let startButton = document.getElementById('start');
let congrats = document.getElementById('congrats');


let bombIndexes=randomNumberGenerator();
let visited = [];

console.log(bombIndexes);
let gameover = false;

// Creating Game UI (9*9) grid

for(let i=0;i<9;i++){

	let row = document.createElement("div");
	row.style.height = "55px";
	row.style.width = "550px";
	row.style.background="grey";
	//row.style.border = "3px solid ";


	for(let j=0;j<9;j++)
	{
		let currentindex = 9*i + j;
		let cell = document.createElement("div");
		cell.style.height = "50px";
		cell.style.width = "50px";
		cell.innerHTML = "";
		cell.style.display = "inline-block";
		cell.style.verticalAlign= "bottom";
		cell.style.border = "3px solid black";
		cell.style.background="white";
		
		cell.setAttribute("id",currentindex);
		cell.addEventListener("click", ()=>{

			{
				if(gameover === false && !bombIndexes.includes(currentindex) && !visited.includes(currentindex)){
				visited.push(currentindex);
				cell.style.background ="green";
				count++;
				if(count===72){
					startButton.style.display ='block';
					congrats.style.display = 'block';
				}
				point.innerHTML = "Points : " + count;
				cell.innerHTML="1";

			}

			else{
				for(let k=0;k<10;k++){
					
					
					let bombNode = document.getElementById(bombIndexes[k]);
					bombNode.style.background = "red";
					//bombNode.innerHTML = "B";
					
				}
				gameover = true;
				startButton.style.display ='block'; 
				//cell.innerHTML="🔥";
				console.log(count);
			}

			}
		})
		row.appendChild(cell);
	}

	root.appendChild(row);

}

startButton.addEventListener("click",()=>{
	location.reload();
})

// Generate 10 bomb positions

function randomNumberGenerator(){

	let bombIndexes=[];

while(bombIndexes.length!=10){
	let x = Math.floor(Math.random()*81);
	if(!bombIndexes.includes(x)){
		bombIndexes.push(x);
	}
}

return bombIndexes;

}

}

// Function to Start game by creating UI again

startGame();


