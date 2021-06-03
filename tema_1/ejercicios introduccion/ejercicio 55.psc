


Algoritmo ejercicio_55
	
	Definir  t_filas, t_columnas, matriz, filas , columnas Como Entero;
	
	t_filas = 4;
	t_columnas = 5;
	Dimension matriz[t_filas,t_columnas];
	
	

	
	Para filas = 0 hasta t_filas - 1 Hacer
		Para columnas = 0  hasta t_columnas - 1 Hacer
		matriz[filas,columnas] = Aleatorio(1,100);		
		
		
		Escribir matriz[filas,columnas], "    ", Sinsaltar;
		
		FinPara
		
		Escribir "";
	FinPara
	
FinAlgoritmo
