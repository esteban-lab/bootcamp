Algoritmo sin_titulo
	definir sueldo,categoria Como Entero;
	Escribir "introduce tu sueldo ";
	Leer sueldo;
	Escribir "introduce tu categoria ";
	Leer categoria ;
	
	
	
	Segun categoria Hacer
		1:
			Escribir  "categoria " , categoria, ".tu nuevo sueldo es " , sueldo*1.15;
		2:
			Escribir  "categoria " , categoria, ".tu nuevo sueldo es " , sueldo*1.10;
		3:
			Escribir  "categoria " , categoria, ".tu nuevo sueldo es " , sueldo*1.06;
		4:
			Escribir   "categoria " , categoria, ".tu nuevo sueldo es " , sueldo*1.03;
		De Otro Modo:
			Escribir "categoria no valida";
	Fin Segun
FinAlgoritmo
