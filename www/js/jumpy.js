var cylinder;

function startGame() {
	cylinder = 	$("#cylinder");
	jump(10);
}

function jump(jumpBy) {
	var currentPosition = cylinder.css('top');
	alert(currentPosition);
}

startGame();