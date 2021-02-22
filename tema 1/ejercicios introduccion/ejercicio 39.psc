Algoritmo ejercicio_39
	
	
	Definir my_array1, my_array2, indice, tamano Como Entero;
	Definir son_iguales Como Logico;;
	tamano = 5;
	
	
	Dimension my_array1[tamano], my_array2[tamano];
	
	my_array1[0] = 1;
	my_array1[1] = 2;
	my_array1[2] = 3;
	my_array1[3] = 4;
	my_array1[4] = 5;
	
	my_array2[0] = 1;
	my_array2[1] = 2;
	my_array2[2] = 3;
	my_array2[3] = 4;
	my_array2[4] = 5;
	
	// apuesto a que son iguales
	son_iguales = Verdadero;
	
	
	Para indice = 0 hasta tamano -1 con paso 1 Hacer
		si my_array1[indice] <> my_array2[indice] Entonces
			son_iguales = Falso;
		
		FinSi
	FinPara
	
	si son_iguales Entonces
		escribir " los arrays son iguales";
	SiNo
		Escribir " los arrays son diferentes";
	FinSi
	
	
	
	
	
FinAlgoritmo
