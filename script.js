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