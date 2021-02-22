Algoritmo ejercici_21
	
	Definir contador,n, suma ,maximo, minimo Como Entero; 
	Definir  media Como Real;
	
	leer n;
	contador = 0;
	suma = 0;
	
	
	Mientras n <> 0 Hacer
		//calculo maximo
		Si contador == 0 o n > maximo Entonces
			
			escribir "el nuevo numero maximo  es "  n;
			maximo = n;
		
		Fin Si
		//calculo minimo
		Si contador == 0 o n < minimo Entonces
			
			escribir "el nuevo numero minimo  es "  n;
			minimo = n;
		FinSi
	
		//calculo media
		contador = contador + 1;
		suma = suma + n;
		//nuevo numero
		Escribir "introduzca numero";
		
		leer n;
		
	Fin Mientras
	
	Si contador == 0 Entonces
		Escribir "No se ha introducido ningún número.";
	SiNo
		media = suma / contador;
		Escribir "La media es: ", media;
		
	FinSi
	
	
FinAlgoritmo
