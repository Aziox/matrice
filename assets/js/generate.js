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
	}
} 