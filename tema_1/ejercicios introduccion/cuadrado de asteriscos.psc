Algoritmo sin_titulo
	
	
	Definir columnas, filas, tama�o_lado Como Entero;
	
	Escribir " introduce el tama�o del cuadrado";
	Leer tama�o_lado;
	
	Para filas <- 1 Hasta tama�o_lado  Hacer
		
		// encargado de dibujar filas
		Para columnas = 1 Hasta tama�o_lado  Hacer
			// encargado de dibujar columnas
			Si filas ==  1 o filas == tama�o_lado o columnas == 1 o  columnas == tama�o_lado   Entonces
				
				Escribir  "* " Sin Saltar;
				
			SiNo
				Escribir "  " Sin Saltar;
			 
			Fin Si
		Fin Para
		
		Escribir  "";
		
	fin para
FinAlgoritmo
