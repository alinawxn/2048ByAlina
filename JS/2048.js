var M = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];

var startFlag = 0;
var step = 0;

$(document).keydown(function(event){
	if (startFlag == 0){
			Generate2Or4();
			Generate2Or4();
			startFlag = 1;
		}
		var htmlStr="<table><tr><td>"+M[0][0]+"</td><td>"+M[0][1]+"</td><td>"+M[0][2]+"</td><td>"+M[0][3]+"</td></tr><tr><td>"+M[1][0]+"</td><td>"+M[1][1]+"</td><td>"+M[1][2]+"</td><td>"+M[1][3]+"</td></tr><tr><td>"+M[2][0]+"</td><td>"+M[2][1]+"</td><td>"+M[2][2]+"</td><td>"+M[2][3]+"</td></tr><tr><td>"+M[3][0]+"</td><td>"+M[3][1]+"</td><td>"+M[3][2]+"</td><td>"+M[3][3]+"</td></tr></table>";
		$('#table').html(htmlStr);
		alert(step);
		step++;
		Mmove(event.which);
		Generate2Or4();
});

function Generate2Or4(){
	var randomnumber = Math.floor(Math.random()*11);
	var twoOrFour = 0;
	if (randomnumber < 9) {
		twoOrFour = 2;
	}
	else{
		twoOrFour = 4;
	}
	var amountOfZero = 0;
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			if (M[i][j] == 0) {
				amountOfZero++;
			}
		}
	}
	var RandomNumber = Math.floor(Math.random()*amountOfZero);
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			if (M[i][j] == 0) {
				RandomNumber--;
				if (RandomNumber == 0) {
					M[i][j] = twoOrFour;
				}
			}
		}
	}
}

function Mmove(d){
	if (d == 37){
		var N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		for(i = 0; i < 4; i++){
			for(j = 0; j < 4; j++){
				if(M[i][j]!=0 && M[i][j]==M[i][j+1]){
					M[i][j] = 2 * M[i][j];
					M[i][j+1] = 0;
				}
			}
			var n = 0;
			for(j = 0; j < 4; j++){
				if(M[i][j]!=0){
					N[i][n] = M[i][j];
					n++;
				}
			}
			for(j = 0; j < 4; j++){
				M[i][j] = N[i][j];
			}
		}
	}
}