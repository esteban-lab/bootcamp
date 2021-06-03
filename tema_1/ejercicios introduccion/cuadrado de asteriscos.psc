Algoritmo sin_titulo
	
	
	Definir columnas, filas, tamaño_lado Como Entero;
	
	Escribir " introduce el tamaño del cuadrado";
	Leer tamaño_lado;
	
	Para filas <- 1 Hasta tamaño_lado  Hacer
		
		// encargado de dibujar filas
		Para columnas = 1 Hasta tamaño_lado  Hacer
			// encargado de dibujar columnas
			Si filas ==  1 o filas == tamaño_lado o columnas == 1 o  columnas == tamaño_lado   Entonces
				
				Escribir  "* " Sin Saltar;
				
			SiNo
				Escribir "  " Sin Saltar;
			 
			Fin Si
		Fin Para
		
		Escribir  "";
		
	fin para
FinAlgoritmo
