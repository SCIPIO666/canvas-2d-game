const canvas=document.getElementById("asteroids");
const context= canvas.getContext("2d");

 context.strokeStyle ="#00ff00";
 context.lineWidth = 0.25;

 /////drawing a grid/////////
for(let x=0; x<canvas.width; x+=10){
    context.moveTo(x,0);
    context.lineTo(x, canvas.height);
}

for(let y=0; y<canvas.width; y+=10){
    context.moveTo(0,y);
    context.lineTo(canvas.width, y);
}

context.stroke();
////////////////////////////////////////

context.beginPath();
context.strokeStyle = 'red'; // Set a visible color
context.fillStyle="green"
context.lineWidth = 5;      // Set a thicker line
context.moveTo(0, 100);
context.lineTo(100, 200);
context.lineTo(10, 400);
context.stroke();
context.fill()
context.restore()


// context.beginPath()
// context.strokeStyle="yellow"
// context.fillStyle="purple"
// context.lineWidth=1
// context.moveTo(100, 200);
// context.lineTo(400, 50);
// context.lineTo(400, 400);
// context.stroke()
// context.fill()
// context.closePath()

context.beginPath()
context.strokeStyle="yellow"
context.fillStyle="purple"
context.lineWidth=1
context.moveTo(100, 200);
context.quadraticCurveTo(400, 50,400, 400);
context.quadraticCurveTo(500, 500,700,200);
context.stroke()
// context.fill()
context.closePath()
