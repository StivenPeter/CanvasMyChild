var c = document.getElementByID("slate")
var ctx=c.getContext("2d")

var makeRectangle = function(x, y, w, h){
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x,y,w,h);
};

var getCursorPosition = function(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    makeRectangle(x,y,100,100);
};

var clearCanvas = function(){
    ctx.clearRect(0,0,c.width, c.height);
};

c.addEventListener('click', getCursorPosition(c, 'click'))

document.getElementByID("clear").addEventListener('click', clearCanvas)
