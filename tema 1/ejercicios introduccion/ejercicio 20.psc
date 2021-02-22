Algoritmo ejercicio_20
	definir clave Como Caracter;
	Definir contador Como Entero; 
	Definir n Como Entero;;
	contador = 0;
	n = 3;
	
	Repetir
		Escribir  " indroduzca la contraseña, dispone de  "  n " intentos";
		Leer clave;
		
		contador = contador +1;
		 n = n - 1 ;
	
	 Hasta Que  clave == "eureka" o contador == 3;
	 
	 
	 Si clave == "eureka" Entonces
		 escribir "contraseña correcta";
	 SiNo
		 escribir "contraseña incorrecta";
	 Fin Si
	
FinAlgoritmo
