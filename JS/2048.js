var M = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
var startFlag = 0;
var endFlag = 0;//0-do nothing, 1-win, 2-lose

$(document).keydown(function(event){
	if (startFlag == 1){
		Mmove(event.which);
		if(event.which == 37 || event.which == 38 || event.which == 39 || event.which == 40){
			drawTable();
		}
	}
	if (endFlag == 1){
		alert("You win!");
		M = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		startFlag = 0;
		endFlag = 0;
	}
	lose();
	if(endFlag == 2){
		alert("You lose!");
		M = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		startFlag = 0;
		endFlag = 0;
	}
});

function drawTable(){
	for(i = 0; i < 4; i++){
		for(j = 0; j < 4; j++){
			if(M[i][j] == 0)
				M[i][j] = "";
		}
	}
	var htmlStr="<table border = '1' width = '400' height = '400' align='center'><tr><td width = '100' height = '100'>"+M[0][0]+"</td><td width = '100' height = '100'>"+M[0][1]+"</td><td width = '100' height = '100'>"+M[0][2]+"</td><td width = '100' height = '100'>"+M[0][3]+"</td></tr><tr><td width = '100' height = '100'>"+M[1][0]+"</td><td width = '100' height = '100'>"+M[1][1]+"</td><td width = '100' height = '100'>"+M[1][2]+"</td><td width = '100' height = '100'>"+M[1][3]+"</td></tr><tr><td width = '100' height = '100'>"+M[2][0]+"</td><td width = '100' height = '100'>"+M[2][1]+"</td><td width = '100' height = '100'>"+M[2][2]+"</td><td width = '100' height = '100'>"+M[2][3]+"</td></tr><tr><td width = '100' height = '100'>"+M[3][0]+"</td><td width = '100' height = '100'>"+M[3][1]+"</td><td width = '100' height = '100'>"+M[3][2]+"</td><td width = '100' height = '100'>"+M[3][3]+"</td></tr></table>";
	$('#table').html(htmlStr);
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
	var N = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
	for(i = 0; i < 4; i++){
		for(j = 0; j < 4; j++){
			if(M[i][j] == 0){
				N[amountOfZero][0] = i;
				N[amountOfZero][1] = j;
				amountOfZero++;
			}
		}
	}
	var randomNumber = Math.floor(Math.random()*amountOfZero);
	M[N[randomNumber][0]][N[randomNumber][1]] = twoOrFour;
}

function Mmove(d){
	switch(d){
		case 38:
		var N = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var MOld=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var sameNumber = 0;
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				MOld[i][j] = M[i][j];
			}
		}
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
			//alert("2");
			for(i = 0; i < 3; i++){
				if((M[i][j]!=0) && (M[i][j]==M[i+1][j])) {
					M[i][j] = 2*M[i][j];
					M[i+1][j] = 0;
				}
			}
			//alert("3");
			n = 0;
			N = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
			for(i = 0; i<4 ; i++){
				if(M[i][j] != 0){
					N[n][j] = M [i][j];
					n++;
				}
			}
			//alert("4");
			for(i = 0; i< 4; i++){
				M[i][j] = N[i][j];
				if (M[i][j] == 2048)
					endFlag = 1;
			}
			//alert("5");
		}
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				if(MOld[i][j]==M[i][j])
					sameNumber++;
			}
		}
		if (sameNumber != 16)
			Generate2Or4();
		break;
		case 37:
		var N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		var MOld=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var sameNumber = 0;
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				MOld[i][j] = M[i][j];
			}
		}
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
			for(j = 0; j < 3; j++){
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
				if (M[i][j] == 2048)
					endFlag = 1;
			}
		}
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				if(MOld[i][j]==M[i][j])
					sameNumber++;
			}
		}
		if (sameNumber != 16)
			Generate2Or4();
		break;
		case 39:
		var N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		var MOld=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var sameNumber = 0;
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				MOld[i][j] = M[i][j];
			}
		}
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
			for(j = 3; j > 0; j--){
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
				if (M[i][j] == 2048)
					endFlag = 1;
			}
		}
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				if(MOld[i][j]==M[i][j])
					sameNumber++;
			}
		}
		if (sameNumber != 16)
			Generate2Or4();
		break;
		case 40:
		var N = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
		var MOld=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var sameNumber = 0;
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				MOld[i][j] = M[i][j];
			}
		}
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
			for(i = 3; i > 0; i--){
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
				if (M[i][j] == 2048)
					endFlag = 1;
			}
		}
		for (i = 0;i<4;i++){
			for(j = 0;j<4;j++){
				if(MOld[i][j]==M[i][j])
					sameNumber++;
			}
		}
		if (sameNumber != 16)
			Generate2Or4();
		break;
		default:
		break;
	}
}

function startGame(){
	M = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
	Generate2Or4();
	Generate2Or4();
	drawTable();
	startFlag = 1;
}

function lose(){
	if(M[0][0]!=M[0][1]&&M[0][1]!=M[0][2]&&M[0][2]!=M[0][3]){
		if(M[1][0]!=M[1][1]&&M[1][1]!=M[1][2]&&M[1][2]!=M[1][3]){
			if(M[2][0]!=M[2][1]&&M[2][1]!=M[2][2]&&M[2][2]!=M[2][3]){
				if(M[3][0]!=M[3][1]&&M[3][1]!=M[3][2]&&M[3][2]!=M[3][3]){
					if(M[0][0]!=M[1][0]&&M[1][0]!=M[2][0]&&M[2][0]!=M[3][0]){
						if(M[0][1]!=M[1][1]&&M[1][1]!=M[2][1]&&M[2][1]!=M[3][1]){
							if(M[0][2]!=M[1][2]&&M[1][2]!=M[2][2]&&M[2][2]!=M[3][2]){
								if(M[0][3]!=M[1][3]&&M[1][3]!=M[2][3]&&M[2][3]!=M[3][3]){
									var Zero = 0;
									for(i = 0;i<4;i++){
										for(j=0;j<4;j++){
											if(M[i][j]!=0){
												Zero ++;
											}
										}
									}
									if(Zero == 16){
										if (endFlag == 0){
											endFlag = 2;
									}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}