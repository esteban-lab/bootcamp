Algoritmo factorial_1
	
	Definir numero_ingresado, factorial, contador Como Real;
	factorial = 1;
	
	Escribir "ingrese numero";
	leer numero_ingresado;
	
	Para contador = 1 Hasta  numero_ingresado Hacer
		factorial = factorial * contador;
		
	FinPara
	
	Escribir " el factorial de ", numero_ingresado " es ", factorial;
	
FinAlgoritmo
