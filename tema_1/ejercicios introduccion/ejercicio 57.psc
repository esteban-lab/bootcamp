Algoritmo ejercicio_57
	
	Definir matriz, fila, columna, tamano Como Entero;
	Definir es_simetrica Como logico;
	
	tamano = 3;
	Dimension matriz[tamano,tamano];
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	
	para fila = 0 hasta tamano - 1 Hacer
		para columna = 0 hasta tamano - 1 Hacer
			escribir matriz[fila, columna]," ", Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	
	es_simetrica = Verdadero;
	
	para fila =  0 hasta tamano -1 Hacer
		para columna = 0 hasta tamano-1 Hacer
			si matriz[fila,columna] <> matriz[columna,fila] Entonces
				es_simetrica = falso;
			FinSi
		FinPara
	FinPara
	
FinAlgoritmo
