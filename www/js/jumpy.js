var cylinder;
var screenHeight = screen.height;
var jumpBy = 10;

function startGame() {
	cylinder = 	$("#cylinder");
	jump(10);
}

function jump() {
    var cylinderDimension = cylinder.offset();
    var currentPosition = cylinderDimension.top;
    var bottomPosition = 320+currentPosition;
    var newPosition = currentPosition+jumpBy;
    
    if(bottomPosition >= screenHeight) {
        cylinder.css('top','0px');
    } else {
        cylinder.css('top', newPosition+"px");
    }
    setTimeout(jump, 30);
}

startGame();