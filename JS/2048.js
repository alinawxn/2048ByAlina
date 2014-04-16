var M = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];

var startFlag = 0;

$(document).keydown(function(event){
	if (startFlag == 1){
		Mmove(event.which);
		if(event.which == 37 || event.which == 38 || event.which == 39 || event.which == 40){
			Generate2Or4();
			drawTable();
		}
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
		for(j = 0; j < 4; j++){
			var n = 0
			for(i = 0; i<4 ; i++){
				if(M[i][j] != 0){
					N[n][j] = M [i][j];
					n++;
				}
			}
			//alert("1");
			//alert(N[0][0]+N[0][1]+N[0][2]+N[0][3]+N[0][0]+N[1][1]+N[1][2]+N[1][3]+N[2][0]+N[2][1]+N[2][2]+N[2][3]+N[3][0]+N[3][1]+N[3][2]+N[3][3]+);
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
				if(N[i][j] != 0){
				}
			}
			//alert("5");
		}
		break;
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
			}
		}
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