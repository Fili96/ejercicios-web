//Globales
var celdaActual;
var matrizCrucigrama;
var aleatorio;

//Almacena la identificación de la celda seleccionada en celdaActual
function textInputFocus(idCelda){
	celdaActual = idCelda;
}
//regresa una matriz
function preparaMatriz(){

	aleatorio = Math.round(Math.random()*2);

	var matriz1 = [	
					['a','s','o','l','i','d','i','f','i','c','a','c','i','o','n'],
					['g', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'n', 0 ],
					['u', 0 , 0 ,'c','o','n','d','e','n','s','a','c','i','o','n'],
					['a', 0 , 0 ,'v', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i', 0 ],
					['s', 0 , 0 ,'a', 0 , 0 ,'l','i','q','u','i','d','o','c', 0 ],
					['u', 0 , 0 ,'p', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'a', 0 ],
					['b', 0 ,'s','o','l','i','d','o', 0 , 0 , 0 , 0 , 0 ,'m', 0 ],
					['t', 0 , 0 ,'r', 0 , 0 , 0 , 0 , 0 , 0 ,'c', 0 , 0 ,'i', 0 ],
					['e', 0 , 0 ,'i', 0 , 0 , 0 ,'f', 0 , 0 ,'i', 0 , 0 ,'l', 0 ],
					['r', 0 , 0 ,'z', 0 , 0 , 0 ,'u', 0 , 0 ,'e', 0 , 0 ,'b', 0 ],
					['r', 0 ,'g','a','s','e','o','s','o', 0 ,'n', 0 , 0 ,'u', 0 ],
					['a', 0 , 0 ,'c', 0 , 0 , 0 ,'i', 0 , 0 , 0 , 0 , 0 ,'s', 0 ],
					['n', 0 , 0 ,'i', 0 , 0 , 0 ,'o', 0 ,'c','e','r','o', 0 , 0 ],
					['e', 0 , 0 ,'o', 0 , 0 , 0 ,'n', 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
					['a', 0 , 0 ,'n', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
				
				];

	var matriz2 = [	
					[ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'a', 0 ],
					[ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'e', 0 ],
					['s','o','l','i','d','i','f','i','c','a','c','i','o','n', 0 ],
					['u', 0 ,'v', 0 , 0 , 0 ,'u', 0 , 0 , 0 , 0 , 0 , 0 ,'a', 0 ],
					['b', 0 ,'a', 0 , 0 , 0 ,'s', 0 , 0 , 0 , 0 , 0 , 0 ,'r', 0 ],
					['l', 0 ,'p', 0 ,'o','d','i','u','q','i','l', 0 , 0 ,'r', 0 ],
					['i', 0 ,'o', 0 , 0 , 0 ,'o', 0 , 0 , 0 , 0 , 0 , 0 ,'e', 0 ],
					['m', 0 ,'r', 0 , 0 , 0 ,'n', 0 , 0 , 0 , 0 , 0 , 0 ,'t', 0 ],
					['a', 0 ,'i', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'c', 0 ,'b', 0 ],
					['c', 0 ,'z', 0 ,'s','o','l','i','d','o', 0 ,'i', 0 ,'u', 0 ],
					['i', 0 ,'a', 0 , 0 , 0 , 0 , 0 ,'g','a','s','e','o','s','o'],
					['o', 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'n', 0 ,'a', 0 ],
					['n', 0 ,'i', 0 ,'c','e','r','o', 0 , 0 , 0 , 0 , 0 ,'u', 0 ],
					[ 0 , 0 ,'o', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'g', 0 ],
					['c','o','n','d','e','n','s','a','c','i','o','n', 0 ,'a', 0 ]
				
				];

	var matriz3 = [	
					['n','o','i','c','a','c','i','f','i','d','i','l','o','s', 0 ],
					[ 0 , 0 , 0 , 0 ,'g', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'u', 0 ],
					[ 0 ,'n', 0 , 0 ,'u', 0 , 0 , 0 ,'c', 0 , 0 , 0 , 0 ,'b', 0 ],
					[ 0 ,'o', 0 , 0 ,'a', 0 ,'o','d','i','l','o','s', 0 ,'l', 0 ],
					[ 0 ,'i', 0 , 0 ,'s', 0 , 0 , 0 ,'e', 0 , 0 , 0 , 0 ,'i', 0 ],
					[ 0 ,'c', 0 , 0 ,'u', 0 , 0 , 0 ,'n','c','e','r','o','m', 0 ],
					[ 0 ,'a', 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'a', 0 ],
					[ 0 ,'z', 0 , 0 ,'t', 0 ,'l','i','q','u','i','d','o','c', 0 ],
					[ 0 ,'i', 0 , 0 ,'e', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i', 0 ],
					[ 0 ,'r', 0 , 0 ,'r', 0 , 0 , 0 , 0 , 0 , 0 ,'f', 0 ,'o', 0 ],
					[ 0 ,'o', 0 , 0 ,'r', 0 , 0 , 0 , 0 , 0 , 0 ,'u', 0 ,'n', 0 ],
					[ 0 ,'p', 0 ,'g','a','s','e','o','s','o', 0 ,'s', 0 , 0 , 0 ],
					[ 0 ,'a','c','o','n','d','e','n','s','a','c','i','o','n', 0 ],
					[ 0 ,'v', 0 , 0 ,'e', 0 , 0 , 0 , 0 , 0 , 0 ,'o', 0 , 0 , 0 ],
					[ 0 , 0 , 0 , 0 ,'a', 0 , 0 , 0 , 0 , 0 , 0 ,'n', 0 , 0 , 0 ]
				
				];

	alert('matriz ' + (aleatorio + 1));
	var arregloMatrices = [ matriz1, matriz2, matriz3 ];
	return arregloMatrices[aleatorio];
}


//Carga el crucigrama a la pagina
function iniciarCrucigrama(){
	var tablaCrucigrama = document.getElementById("tabla");
	matrizCrucigrama = preparaMatriz();
	for ( var i = 0; i < matrizCrucigrama.length ; i++ ) {
		var renglon = tablaCrucigrama.insertRow(-1);
		var renglonInfo = matrizCrucigrama[i];
		for(var j = 0 ; j < renglonInfo.length ; j++){
			var celda = renglon.insertCell(-1);
			if(renglonInfo[j] != 0){
				var idCelda = String('txt' + '_' + i + '_' + j);
				celda.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + idCelda + '" onfocus="textInputFocus(' + "'" + idCelda + "'"+ ')">';
			}
			else{
				celda.style.backgroundColor  = "black";
			}
		}
	}
	agregarNumeracionPregunta();
}

//agrega el indice de la numeracion de las preguntas (horizontal y vertical)
function agregarNumeracionPregunta(){

	switch(aleatorio) {
	    case 0:
	        //Horizaontale
	        document.getElementById("txt_4_6").placeholder = "1H";
			document.getElementById("txt_6_2").placeholder = "2H";
			document.getElementById("txt_10_2").placeholder = "3H";
			document.getElementById("txt_2_3").placeholder = "4H";
			document.getElementById("txt_0_1").placeholder = "5H";
			document.getElementById("txt_12_9").placeholder = "6H";

			//Verticales
			document.getElementById("txt_11_13").placeholder = "1V";
			document.getElementById("txt_8_7").placeholder = "2V";
			document.getElementById("txt_3_3").placeholder = "3V";
			document.getElementById("txt_7_10").placeholder = "4V";
			document.getElementById("txt_0_0").placeholder = "5V";
	        break;
	    case 1:
	       //Horizontales
	    	document.getElementById("txt_5_10").placeholder = "1H";
	    	document.getElementById("txt_9_4").placeholder = "2H";
	    	document.getElementById("txt_10_8").placeholder = "3H";
	        document.getElementById("txt_14_0").placeholder = "4H";
	        document.getElementById("txt_2_0").placeholder = "5H-1V";
	        document.getElementById("txt_12_4").placeholder = "6H";

	        //Verticales
	    	document.getElementById("txt_2_0").placeholder = "1V-5H";
	    	document.getElementById("txt_2_6").placeholder = "2V";
	    	document.getElementById("txt_3_2").placeholder = "3V";
	        document.getElementById("txt_8_11").placeholder = "4V";
	        document.getElementById("txt_14_13").placeholder = "5V";
	        break;
	    default:
	        //Horizontales
	    	document.getElementById("txt_7_6").placeholder = "1H";
	    	document.getElementById("txt_3_11").placeholder = "2H";
	    	document.getElementById("txt_11_3").placeholder = "3H";
	        document.getElementById("txt_12_2").placeholder = "4H";
	        document.getElementById("txt_0_13").placeholder = "5H-1V";
	        document.getElementById("txt_5_9").placeholder = "6H";

	        //Verticales
	    	document.getElementById("txt_0_13").placeholder = "1V-5H";
	    	document.getElementById("txt_9_11").placeholder = "2V";
	    	document.getElementById("txt_13_1").placeholder = "3V";
	    	document.getElementById("txt_2_8").placeholder = "4V";
	        document.getElementById("txt_0_4").placeholder = "5V";
	}
}

$(document).ready(function(){
	iniciarCrucigrama();

	$('input').change(function(){
		if (celdaActual != null){

			var idceldaActual = celdaActual;
			var arregloIdCeldaActual = idceldaActual.split("_");
			var row = arregloIdCeldaActual[1];
			var column = arregloIdCeldaActual[2];

			if (this.value == matrizCrucigrama[row][column]) {
				this.style.backgroundColor = 'green';
			}else{
				this.style.backgroundColor = 'white';
			}

			//alert('cambio');
			
		}
	});

});
