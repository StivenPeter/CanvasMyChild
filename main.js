var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var makeRectangle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(mouseX,mouseY,100,100);
};
var clearCanvas = function() {
    ctx.clearRect(0,0,c.width,c.height);
 };
c.addEventListener("click", makeRectangle);
document.getElementById("clear").addEventListener("click", clearCanvas);
