	function MC(){
		var idCellule = 0;
		var matriceSelect;
		var tab ='';
		matriceSelect = document.getElementById("matriceChoise").value;

		for (var i = 1; i <= matriceSelect; i++) {
			tab = tab + '<tr>';
			for (var ic = 1; ic <= matriceSelect; ic++) {
				idCellule ++;
				tab = tab + '<td> <input type="number" name="n' + idCellule +'" value="0" id="n' + idCellule + '" /> </td>';	
			};
			tab = tab + '</tr>';
		};
		document.getElementById("generateTab").innerHTML = tab;
	}; 