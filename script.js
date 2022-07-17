var mouseEvent = "empty";
var lastPosytionX, lastPosytionY;

    canva = document.getElementById("mycanva");
ctx + canvas.getContext("2d");

color = "black";
widthLine =1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{
    color = document.getElementById("color").value;
    mouseEvent = "mouseDown"
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)

{
    PosytionMouseX = e.clientX - canvas.offsetLeft;
    PosytionMouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
    
    console.log("Last posytion off x and y coordinates")

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
    ctx.lineTo(PositionMouseX, PositionMouseY);
    ctx.stroke();
    }

    lastPositionX = PositionMouseX; 
    lastPositionY = PositionMouseY;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}