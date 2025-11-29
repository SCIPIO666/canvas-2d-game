const canvas=document.getElementById("asteroids");
const context= canvas.getContext("2d");

 context.strokeStyle ="#00ff00";
 context.fillStyle="grey"
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

//draw 3 circles

context.beginPath()
context.strokeStyle="blue"
context.fillStyle="red"
context.moveTo(400,150)
context.arc(400,150,50,Math.PI*0.2,Math.PI*1.8)
context.lineTo(400,150)
context.fill()