var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var makeCircle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = "#ff0000";
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,20,0,2*Math.PI);
    ctx.fill();
    ctx.moveTo(mouseX, mouseY);
};
var makeRectangle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(mouseX, mouseY, 100, 100);
};
var clearCanvas = function() {
    ctx.clearRect(0,0,c.width,c.height);
 };

c.addEventListener("click", makeCircle);
document.getElementById("clear").addEventListener("click", clearCanvas);
