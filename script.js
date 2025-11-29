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

 context.beginPath()
 context.moveTo(50, 250);
 context.quadraticCurveTo(25, 300, 50, 350);
 context.quadraticCurveTo(100, 375, 150, 350);
 context.closePath();
 context.moveTo(230, 360);
 context.quadraticCurveTo(255, 340, 270, 360);
 context.quadraticCurveTo(255, 340, 270, 310);
 context.closePath();
 context.moveTo(250, 50);
 context.quadraticCurveTo(310, 60, 370, 50);
 context.quadraticCurveTo(400, 75, 370, 100);
 context.closePath();
 context.strokeStyle = "#FFFF00";
 context.fillStyle = "grey";
 context.fill();
 context.stroke()

context.beginPath();
 context.strokeStyle = "#FFFFFF";
 context.fillStyle = "#00FF00";
 context.lineWidth = 2;
  context.moveTo(50, 50);
 context.bezierCurveTo(0, 0, 80, 250, 150, 250);
 context.bezierCurveTo(250, 250, 250, 250, 250, 170);
 context.bezierCurveTo(250, 50, 400, 350, 320, 280);
 context.closePath();
 // context.fill();
 context.stroke();
 context.fillText("(50, 50)", 30, 40);
 context.fillText("(150, 250)", 130, 260);
 context.fillText("(250, 170)", 255, 175);
 context.beginPath()
 context.moveTo(50, 250);
 context.quadraticCurveTo(25, 300, 50, 350);
 context.quadraticCurveTo(100, 375, 150, 350);
 context.closePath();
 context.moveTo(230, 360);
 context.quadraticCurveTo(255, 340, 270, 360);
 context.quadraticCurveTo(255, 340, 270, 310);
 context.closePath();
 context.moveTo(250, 50);
  context.quadraticCurveTo(310, 160, 370, 50);
 context.quadraticCurveTo(400, 75, 370, 100);
 context.closePath();
 context.strokeStyle = "#FFFF00";
 context.fillStyle = "#000000";
 context.fill();
 context.stroke()

 context.beginPath()
 context.strokeStyle="blue"
 context.fillStyle="red"
 context.moveTo(500,0)
 context.bezierCurveTo(50,100,700,200,500,300)
 context.stroke()
context.closePath()
//bezierCurveTo---  3 coordinate points
//quadraticCurveTo ----- 2 coordinate points
//lineTo and MoveTo ------ 1 coordinate point
//arc
//elipse

// Drawing lines and moving the pen:
// lineTo and moveTo ------ 1 coordinate point (x, y)
 context.beginPath()
context.moveTo(50, 50);  // Sets the starting point (50, 50)
context.lineTo(150, 50); // Draws a straight line to (150, 50)
context.stroke()
context.closePath()
// Bézier Curves:
// bezierCurveTo--- 3 coordinate points (x1, y1), (x2, y2), (x, y)
// (x1, y1) and (x2, y2) are control points, (x, y) is the end point.
 context.beginPath()
context.moveTo(10, 20);
context.bezierCurveTo(30, 100, 150, 10, 180, 20); 
context.stroke()
context.closePath()
// Quadratic Curves:
// quadraticCurveTo ----- 2 coordinate points (x1, y1), (x, y)
// (x1, y1) is the single control point, (x, y) is the end point.
 context.beginPath()
context.moveTo(200, 20);
context.quadraticCurveTo(250, 120, 300, 20);
context.stroke()
context.closePath()
// Circles and Arcs (part of a circle):
// arc ------------------ 5 required arguments (x, y, radius, startAngle, endAngle)
// (x, y) is the center point. Angles are in radians.
// Example: A full circle centered at (400, 70) with radius 50.
 context.beginPath()
context.arc(400, 70, 50, 0, 2 * Math.PI);
context.stroke()
context.closePath()
// Ellipses:
// ellipse -------------- 7 required arguments (x, y, radiusX, radiusY, rotation, startAngle, endAngle)
// (x, y) is the center point. radiusX and radiusY define the shape.
// Example: An ellipse centered at (550, 70).
 context.beginPath()
context.ellipse(550, 70, 60, 30, 0, 0, 2 * Math.PI);
context.stroke()
context.closePath()


