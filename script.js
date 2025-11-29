
const canvas=document.getElementById("asteroids");
const context= canvas.getContext("2d");

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

function drawCircle(context,centrePoint,radius,beginAngle,EndAngle,stroke, fill){

    const strokeStyle = stroke || "#00FF00";
    const fillStyle = fill || "#009900"; 

    const midpoint= centrePoint || "100,150";
    const circleRadius= radius || 50;
    const arcStartPoint=beginAngle ||  0;
    const arcEndPoint=EndAngle || 2;

context.beginPath()
context.strokeStyle=strokeStyle;
context.fillStyle=fillStyle;
context.moveTo(midpoint);
context.arc(`${midpoint,circleRadius,Math.PI*arcStartPoint,Math.PI*arcEndPoint}`);
context.lineTo(midpoint);
context.stroke()
//context.fill();


}


drawCircle(context,"100,100",30,0.6,1.2,"blue","red")