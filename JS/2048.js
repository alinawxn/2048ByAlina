var M = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];

var startFlag = 0;

$(document).keydown(function(event){
	Mmove(event.which);
	Generate2Or4();
	drawTable();
});

function drawTable(){
	var MOld = M;
	for(i = 0; i < 4; i++){
		for(j = 0; j < 4; j++){
			if(M[i][j] == 0)
				M[i][j] = "";
		}
	}
	var htmlStr="<table border = '1' width = '400' height = '400' align='center'><tr><td width = '100' height = '100'>"+M[0][0]+"</td><td width = '100' height = '100'>"+M[0][1]+"</td><td width = '100' height = '100'>"+M[0][2]+"</td><td width = '100' height = '100'>"+M[0][3]+"</td></tr><tr><td width = '100' height = '100'>"+M[1][0]+"</td><td width = '100' height = '100'>"+M[1][1]+"</td><td width = '100' height = '100'>"+M[1][2]+"</td><td width = '100' height = '100'>"+M[1][3]+"</td></tr><tr><td width = '100' height = '100'>"+M[2][0]+"</td><td width = '100' height = '100'>"+M[2][1]+"</td><td width = '100' height = '100'>"+M[2][2]+"</td><td width = '100' height = '100'>"+M[2][3]+"</td></tr><tr><td width = '100' height = '100'>"+M[3][0]+"</td><td width = '100' height = '100'>"+M[3][1]+"</td><td width = '100' height = '100'>"+M[3][2]+"</td><td width = '100' height = '100'>"+M[3][3]+"</td></tr></table>";
	$('#table').html(htmlStr);
	M = MOld;
}

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
	switch(d){
		case 37:
		var N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		for(i = 0; i < 4; i++){
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
			for(j = 0; j < 4; j++){
				if(M[i][j]!=0 && M[i][j]==M[i][j+1]){
					M[i][j] = 2 * M[i][j];
					M[i][j+1] = 0;
				}
			}
			n = 0;
			N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
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
		break;
		case 38:
		var N = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		for(j = 0; j < 4; j++){
			var n = 0
			for(i = 0; i<4 ; i++){
				if(M[i][j] != 0){
					N[n][j] = M [i][j];
					n++;
				}
			}
			for(i = 0; i< 4; i++){
				M[i][j] = N[i][j];
			}
			for(i = 0; i < 4; i++){
				if(M[i][j]!=0 && M[i][j] == M[i+1][j]){
					M[i][j] = 2*M[i][j];
					M[i+1][j] = 0;
				}
			}
			n = 0;
			N = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
			for(i = 0; i<4 ; i++){
				if(M[i][j] != 0){
					N[n][j] = M [i][j];
					n++;
				}
			}
			for(i = 0; i< 4; i++){
				M[i][j] = N[i][j];
			}
		}
		break;
		case 39:
		var N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		for(i = 3; i > -1; i--){
			var n = 3;
			for(j = 3; j > -1; j--){
				if(M[i][j]!=0){
					N[i][n] = M[i][j];
					n--;
				}
			}
			for(j = 3; j > -1; j--){
				M[i][j] = N[i][j];
			}
			for(j = 3; j > -1; j--){
				if(M[i][j]!=0 && M[i][j]==M[i][j-1]){
					M[i][j] = 2 * M[i][j];
					M[i][j-1] = 0;
				}
			}
			n = 3;
			N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
			for(j = 3; j > -1; j--){
				if(M[i][j]!=0){
					N[i][n] = M[i][j];
					n--;
				}
			}
			for(j = 3; j > -1; j--){
				M[i][j] = N[i][j];
			}
		}
		break;
		case 40:
		var N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		for(j = 3; j > -1; j--){
			var n = 3;
			for(i = 3; i > -1; i--){
				if(M[i][j]!=0){
					N[n][j] = M[i][j];
					n--;
				}
			}
			for(i = 3; i > -1; i--){
				M[i][j] = N[i][j];
			}
			for(i = 3; i > -1; i--){
				if(M[i][j]!=0 && M[i][j]==M[i-1][j]){
					M[i][j] = 2 * M[i][j];
					M[i-1][j] = 0;
				}
			}
			n = 3;
			N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
			for(i = 3; i > -1; i--){
				if(M[i][j]!=0){
					N[n][j] = M[i][j];
					n--;
				}
			}
			for(i = 3; i > -1; i--){
				M[i][j] = N[i][j];
			}
		}
		break;
	}
}

function startGame(){
	M = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
	Generate2Or4();
	Generate2Or4();
	drawTable();
}