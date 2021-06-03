Algoritmo ejercicio_38
	
	Definir array_1, array_2, tamano, indice Como entero;
	
	tamano = 5;
	
	Dimension  array_1[tamano], array_2[tamano];
	
	
	
	
	// generar el  rpimer array 
	Para indice = 0 Hasta tamano-1 con paso 1 Hacer
		array_1[indice] = indice + 1;
		Escribir array_1[indice], " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
	Para indice = 0  Hasta tamano - 1 con paso 1 Hacer
		array_2[indice] = array_1[tamano-1 - indice];
		
		Escribir  array_2[indice], " " Sin Saltar;
		
	FinPara
	
	Escribir  "";
	
	
FinAlgoritmo
