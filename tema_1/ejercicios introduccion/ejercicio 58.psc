Algoritmo ejercicio_58
	
	Definir  t_filas, t_columnas,tamano_paginas, array, filas , columnas, pagina, contador Como Entero;
	
	t_filas = 4;
	t_columnas = 5;
	tamano_paginas = 3;
	Dimension array[tamano_paginas,t_filas,t_columnas];
	
	contador = 0 ;
	
	
	para pagina = 0 hasta tamano_paginas - 1 Hacer
		Para filas = 0 hasta t_filas - 1 Hacer
			Para columnas = 0  hasta t_columnas - 1 Hacer
				array[pagina,filas,columnas] = contador;
				Escribir array[pagina,filas,columnas], " ", Sin Saltar;
				contador = contador + 1;
				
			FinPara
		 Escribir "";
	 FinPara
	 Escribir "";
	FinPara
FinAlgoritmo
