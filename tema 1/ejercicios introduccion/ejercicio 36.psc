Algoritmo ejercicio_36
	
	
	
	Definir my_array1, my_array2, indice , multiplicacion, tamano Como Entero;

	tamano = 10;
	
	
	Dimension my_array1[tamano], my_array2[tamano];
	

	
	Para indice = 0 Hasta tamano  -1 Con Paso 1 Hacer
		
		my_array1[indice] = Aleatorio(1 , 20);
		my_array2[indice] = Aleatorio(1 , 20);
		
		multiplicacion =  my_array1[indice] * my_array2[indice];
	
		
		Escribir " indice " indice " : " , my_array1[indice], " * " , my_array2[indice] " = " multiplicacion;
		
	FinPara
	

	 
	 
	 
FinAlgoritmo
 