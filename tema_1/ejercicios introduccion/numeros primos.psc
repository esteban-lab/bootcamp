Algoritmo jercicio_51
	
	//comprobar si N numero primo 
	
	Definir N, INDICE Como Entero;
	Definir es_primo Como Logico;
	
	es_primo = Verdadero;
	
	Escribir  " introduce numero para su comprobacion";
	Leer N;
	
	PARA INDICE = 2 hasta N-1 Con Paso 1 Hacer
		si N mod INDICE == 0 Entonces
			es_primo = falso;
		
		FinSi
	FinPara
	
	si es_primo Entonces
		escribir " el numero " , N " es primo";
	SiNo
		Escribir  " el numero " , N " no es primo";
	FinSi
	
	
	
	
FinAlgoritmo
