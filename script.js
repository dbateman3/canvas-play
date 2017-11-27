let data = [16, 68, 20, 30, 54];
// Reference the canvas
let canvas = document.getElementById("canvas");

// get a reference to the drawing context
let c = canvas.getContext("2d");

// draw rectangles
c.fillStyle = "gray";
c.fillRect(10, 20, 30, 200);
c.fillRect(60, 20, 30, 200);

//draw lines
c.fillStyle = "black";
c.lineWidth = 2.0;
c.beginPath();
c.moveTo(0, 0);
c.lineTo(500, 500);
c.stroke();

//draw words
c.fillStyle = "black";
c.fillText("Hello", 30, 100);
c.stroke();
