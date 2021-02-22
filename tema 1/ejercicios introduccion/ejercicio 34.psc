Algoritmo sin_titulo
	Definir  n, numero_Aleatorio  Como Entero;

	
	numero_aleatorio =  Aleatorio( 1,10);
	
	Escribir "introduce un numero entre 1 y 10";
	
	Repetir
		
		leer n;
		
		Si numero_aleatorio < n  Entonces
			Escribir "prueba con un numero menor";
		SiNo	
			si n < numero_aleatorio Entonces
				

			Escribir "prueba con un numero mayor";
		Fin Si
		
	FinSi
	
	Mientras Que numero_aleatorio <> n;
	
	Escribir " sale y vale! ",  numero_aleatorio;
	
	
FinAlgoritmo

