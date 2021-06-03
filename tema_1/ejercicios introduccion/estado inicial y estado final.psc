Algoritmo ejercicio_47
	
	Definir  array , tamano, REEMPLAZO, indice Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	
	Escribir "estado inicial";
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		array[indice] = Aleatorio(1,100);
		Escribir array[indice], " " Sin Saltar;
	Fin Para
	
	Escribir "";
	
	Para  indice = 0 HASTA tamano - 2 hacer
		SI array[indice] > array[indice+1]Entonces
			
			REEMPLAZO = array[indice];
			array[indice] = array[1];
			array[indice+1] = REEMPLAZO;
			
		FinSi
	fin para
	
	Escribir "estado final";
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir array[indice], " " Sin Saltar;
	Fin Para
	
	
	
	
	
FinAlgoritmo
