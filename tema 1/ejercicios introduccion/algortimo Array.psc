Algoritmo arrays
	
	Definir my_array,tamano, indice Como Entero;
	tamano = 5;
	Dimension  my_array[tamano];
	
	my_array[0] = 50; 
	my_array[1] = 35;
	my_array[2] = 19;
	my_array[3] = 78;
	my_array[4] = 9;
	
	
	
	//imprime el array indice = numeros concecutivos
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = indice ;
		Escribir "indice ", indice ", ", my_array[indice];
		
	FinPara
	
	Escribir  "";
	
	//imprime el array completo
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir my_array[indice], " " Sin Saltar;
	FinPara
	
FinAlgoritmo
 