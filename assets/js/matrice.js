//déclaration des diverses variables
var result2x;
var result3x;
var result4x;
var matriceSelect;
//calcul pour le 2*2
function matrice2x(...nc){
	var nbr1;
	var nbr2;
	nbr1 = nc[0] * nc[3];
	nbr2 = nc[1] * nc[2];
	result2x = nbr1 - nbr2;
};
//calcul pour le 3*3
function matrice3x(...nc){
	var A3x, B3x, C3x;
	matrice2x(nc[4], nc[5], nc[7], nc[8]);
	A3x = nc[0] * result2x;
	matrice2x(nc[1], nc[2], nc[7], nc[8]);
	B3x = nc[3] * result2x;
	matrice2x(nc[1], nc[2], nc[4], nc[5]);
	C3x = nc[6] * result2x;
	result3x = A3x - B3x + C3x;
};
//calcul pour le 4*4
function matrice4x(...nc){
	var A4x, B4x, C4x, D4x;
	matrice3x(nc[5], nc[6], nc[7], nc[9], nc[10], nc[11], nc[13], nc[14], nc[15]);
	A4x = nc[0] * result3x;
	matrice3x(nc[1], nc[2], nc[3], nc[9], nc[10], nc[11], nc[13], nc[14], nc[15]);
	B4x = nc[4] * result3x;
	matrice3x(nc[1], nc[2], nc[3], nc[5], nc[6], nc[7], nc[13], nc[14], nc[15]);
	C4x = nc[8] * result3x;
	matrice3x(nc[1], nc[2], nc[3], nc[5], nc[6], nc[7], nc[9], nc[10], nc[11]);
	D4x = nc[12] * result3x;
	result4x = A4x - B4x + C4x - D4x;
}

function getNumber() {
	matriceSelect = document.getElementById("matriceChoise").value;
	matriceSelect = matriceSelect * matriceSelect;
	for (var i = 1; i <= matriceSelect ; i++) {
		var n = 'n' + i; 	
		window['n' + i] = document.getElementById(n).value;
	}
	switch(matriceSelect){
		case 4:
		matrice2x(n1, n2, n3, n4);
		alert(result2x);
		break;

		case 9:
		matrice3x(n1, n2, n3, n4, n5, n6, n7, n8, n9);
		alert(result3x);
		break;

		case 16: 
		matrice4x(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16);
		alert(result4x);
		break;
	}

};

