Algoritmo sin_titulo
	definir sueldo,categoria Como Entero;
	Escribir "introduce tu sueldo ";
	Leer sueldo;
	Escribir "introduce tu categoria ";
	Leer categoria ;
	
	si categoria == 1 Entonces
		Escribir  "categoria " , categoria, ".tu nuevo sueldo es " , sueldo*1.15;
	FinSi
	si categoria == 2 Entonces
		Escribir  "categoria " , categoria ".tu nuevo sueldo es " , sueldo*1.10;	
	FinSi
	si categoria == 3 Entonces
		Escribir  "categoria " , categoria ".tu nuevo sueldo es " , sueldo*1.06;
	FinSi
	si categoria == 4 Entonces
		Escribir  "categoria " , categoria ".tu nuevo sueldo es " , sueldo*1.03;
	FinSi
	

	
FinAlgoritmo
