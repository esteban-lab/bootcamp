Funcion resultado <- es_primo( num )
	
	Definir INDICE Como Entero;
	Definir resultado Como Logico;
	
	resultado = Verdadero;
	
	
	PARA INDICE = 2 hasta num -1 Con Paso 1 Hacer
		si num mod INDICE == 0 Entonces
			resultado = falso;
			
		FinSi
	FinPara
	
	
Fin Funcion



Algoritmo ejercicio_54
	
	Definir N,i Como Entero;
	
	
	Escribir  "introduce el numero N";
	leer N;
	
	
	Para i = 2 hasta N con paso 1 Hacer
		si es_primo(i) Entonces
			Escribir i, " es primo ";
		FinSi
	FinPara
	
	
	
FinAlgoritmo
