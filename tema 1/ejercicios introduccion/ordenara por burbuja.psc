Algoritmo sin_titulo
	
	definir  array, tamano, aux, indice,j,i Como Entero;;
	tamano = 5;
	Dimension array[tamano];
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	//ordenar de menor a mayor
	
	Para indice = 0 Hasta  tamano - 1 Hacer
		Escribir  array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	
	
	para i = 0 hasta tamano -2 Hacer
		Para j = 0 hasta tamano - 2 Hacer
		si array[j] > array[j+1] Entonces
			aux = array[j];
			array[j] = array[j+1];
			array[j+1] = aux;
		FinSi
	     FinPara
	FinPara

	// para verlo por consola
	
	 
	 Para indice = 0 Hasta  tamano - 1 Hacer
		 Escribir  array[indice], " " Sin Saltar;
	 FinPara

	
	
	
	
	
	
FinAlgoritmo
