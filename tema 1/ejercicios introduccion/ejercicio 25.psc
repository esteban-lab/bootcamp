Algoritmo ejercicio_25
	Definir nombre Como Caracter;;
	Definir practica, teorica, problemas, resultado Como Real;
	
	Escribir "introduce nombre: ";
	Leer nombre;
	
	
	Mientras nombre <> "" Hacer
		
		
		Escribir "escriba sus 3 notas";
		Leer practica, teorica, problemas;
		
		Si (practica >= 0 y practica <= 10) y (teorica >= 0 y teorica <= 10) y (problemas >= 0 y problemas <= 10) Entonces
			
			resultado = practica * 0.1 + teorica * 0.5 + problemas * 0.4;
			
			Escribir "tu nota final es " resultado;
			
		SiNo
			Escribir "las notas introducidas son incorrectas";
			
			
		Fin Si

		
		Escribir  "introduzca su nombre";
		leer nombre;
		
	FinMientras
	
	
	

	
	
	
	
	
FinAlgoritmo
