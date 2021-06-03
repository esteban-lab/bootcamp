Algoritmo sin_titulo
	Definir a,b, option Como Entero;
	
	
	Repetir
		
	
		escribir "selecciones una de las siguientes opciones";
		escribir " 1:  sumar";
		escribir " 2:  restar";
		escribir " 3:  multiplicar";
		escribir " 4:  dividir";
		escribir " 5:  salir";
		
		leer option;
		
		si option > 0  y option < 5 Entonces
			Escribir "introduce 2 numeros";
			leer a,b;
		FinSi

		
	 
		Segun option Hacer
		1:
			Escribir  " la suma de es " a+b;
		2:
			Escribir  " la resta de es " a-b;
		3:
			Escribir  " la multi de es " a*b;
		4:
			Escribir  " la division  es " a/b;
			
		5:  Escribir "gracdias";
			
		De Otro Modo:
			Escribir  "opcion incorrecta";
		Fin Segun
	
	Mientras Que option<> 5;
FinAlgoritmo
