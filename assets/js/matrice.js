//déclaration des diverses variables
var result2x;
var result3x;
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
	var A, B, C;
	matrice2x(nc[4], nc[5], nc[7], nc[8]);
	A = nc[0] * result2x;
	matrice2x(nc[1], nc[2], nc[7], nc[8]);
	B = nc[3] * result2x;
	matrice2x(nc[1], nc[2], nc[4], nc[5]);
	C = nc[6] * result2x;
	result3x = A - B + C;
};
function getNumber() {
	matriceSelect = document.getElementById("matriceChoise").value;
	matriceSelect = matriceSelect * matriceSelect;
	for (var i = 1; i <= matriceSelect ; i++) {
		var n = 'n' + i; 	
		window['n' + i] = document.getElementById(n).value;
	}
	if(matriceSelect == 4){
		matrice2x(n1, n2, n3, n4);
		alert(result2x);
	} else if(matriceSelect == 9){
		matrice3x(n1, n2, n3, n4, n5, n6, n7, n8, n9,);
		alert(result3x);
	}
};

