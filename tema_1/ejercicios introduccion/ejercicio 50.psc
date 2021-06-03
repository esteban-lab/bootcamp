Algoritmo ejercicio_50
	
	Definir letra, frase Como Caracter;
	definir indice, contador Como Entero;
	contador= 0;
	
	Escribir  " indtroduce una frase";
	Leer frase;
	
	Escribir " introduce una letra";
	leer letra;
	
	
	Para  indice= 0 hasta Longitud(frase) - 1 con paso 1 Hacer
		
		// la subcadena leera la frase desde el indice a indice 
		
		si Subcadena(frase,indice , indice) == letra Entonces
			
			contador = contador + 1;
			
		FinSi
	FinPara
	Escribir " la letra", letra , " aparece " , contador, " veces";
FinAlgoritmo
