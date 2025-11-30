
const canvas=document.getElementById("asteroids");
const context= canvas.getContext("2d");

const stroke="#00FF00";
const fill="#009900"; 

function drawGrid(ctx, minorSize, majorSize, stroke, fill) {
    const minor = minorSize || 10;
    const major = majorSize || minor * 5;

    const strokeStyle = stroke || "#00FF00";
    const fillStyle = fill || "#009900"; 
    
 
    ctx.save();
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.font = '10px Arial';

    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    
    for(let x = 0; x < width; x += minor) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25;
        ctx.stroke();
        
        if(x % major == 0 && x !== 0) { 
            ctx.fillText(x, x + 2, 10); 
        }
    }
    
    for(let y = 0; y < height; y += minor) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25;
        ctx.stroke();
        
        if(y % major == 0 && y !== 0) { 
            ctx.fillText(y, 2, y + 10); 
        }
    }
    ctx.restore();
}

drawGrid(context, 10, 50, "#00FF00", "#009900");
////////////////////////////////////////



//draw pacman

function drawCircle(context,centrePointX,centrePointY,radius,beginAngle,EndAngle,stroke, fill){

    const strokeStyle = stroke || "#00FF00";
    const fillStyle = fill || "#009900";

    const x = centrePointX || 100;
    const y = centrePointY || 100;
    const circleRadius = radius || 30;
    const startAngle = (beginAngle !== undefined) ? beginAngle * Math.PI : 0;
    const endAngle = (EndAngle !== undefined) ? EndAngle * Math.PI : 2 * Math.PI;


    context.save();

    context.beginPath()
    context.strokeStyle=strokeStyle;
    context.fillStyle=fillStyle;

    context.moveTo(x,y);
    context.arc(x,y,circleRadius,startAngle, endAngle);
    context.lineTo(x,y);
    context.stroke()
    context.fill();
    context.restore();


}

// Example call to draw a Pac-Man shape
drawCircle(context, 300, 300, 30, 0.25, 1.75, "blue", "yellow"); 

// Example call for a full red circle
drawCircle(context, 100, 100, 30, 0, 2, "black", "red");

// drawCircle(context, 400, 200, 50,Math.random() ,Math.random(),"black", "red");
// drawCircle(context, 400, 400, 20,Math.random() ,Math.random(),"black", "red");
// drawCircle(context, 400, 600, 30,Math.random() ,Math.random(),"black", "red");
