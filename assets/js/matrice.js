var result2x;
var result3x;
var matriceSelect;
function createMatrice(){
	
	
	matriceSelect = document.getElementById("matriceChoise").value;
	
	if (matriceSelect == 4 ) {

		var tab = '<tr>';
		for (var ic = 1; ic <= 2; ic++) {
			tab = tab + '<td> <input type="number" name="n' + ic +'" value="0" id="n' + ic + '" /> </td>';	
		}
		var tab = tab + "</tr><tr>";
		for (var ic = 3; ic <= 4; ic++) {
			tab = tab + '<td> <input type="number" name="n' + ic +'" value="0" id="n' + ic + '" /> </td>';	
		}
		var tab = tab + '</tr>';
		document.getElementById("generateTab").innerHTML = tab;
	} else if (matriceSelect == 9){
		var tab = '<tr>';
		for (var ic = 1; ic <= 3; ic++) {
			tab = tab + '<td> <input type="number" name="n' + ic +'" value="0" id="n' + ic + '" /> </td>';	
		}
		var tab = tab + "</tr><tr>";
		for (var ic = 4; ic <= 6; ic++) {
			tab = tab + '<td> <input type="number" name="n' + ic +'" value="0" id="n' + ic + '" /> </td>';	
		}
		var tab = tab + "</tr><tr>";
		for (var ic = 7; ic <= 9; ic++) {
			tab = tab + '<td> <input type="number" name="n' + ic +'" value="0" id="n' + ic + '" /> </td>';	
		}
		var tab = tab + '</tr>';
		document.getElementById("generateTab").innerHTML = tab;
	} else {
		alert("error");
	}		
} 

//calcul du 2*2
function matrice2x(nc1, nc2, nc3, nc4){
	var nbr1;
	var nbr2;
	nbr1 = nc1 * nc4;
	nbr2 = nc2 * nc3;
	result2x = nbr1 - nbr2;
}
//calcul pour le 3*3
function matrice3x(nc1, nc2, nc3, nc4, nc5, nc6, nc7, nc8, nc9){
var A ;
var B ;
var C ;
matrice2x(nc5, nc6, nc8, nc9);
A = nc1 * result2x;
matrice2x(nc2, nc3, nc8, nc9);
B = nc4 * result2x;
matrice2x(nc2, nc3, nc5, nc6);
C = nc7 * result2x;
result3x = A - B + C;
}
function getNumber() {

	for (var i = 1; i <= matriceSelect; i++) {
		var n = 'n' + i; 	
		window['n' + i] = document.getElementById(n).value;
	}
	if(matriceSelect == 4){
	matrice2x(n1, n2, n3, n4);
	alert(result2x);
} else if(matriceSelect == 9)
	matrice3x(n1, n2, n3, n4, n5, n6, n7, n8, n9,);
	alert(result3x);
} 


