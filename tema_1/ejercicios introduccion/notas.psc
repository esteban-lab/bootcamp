Algoritmo sin_titulo
	Definir nota1,nota2,nota3,nota4,nota5 Como Real;
	definir nota_final Como Real;
	Leer nota_final;
	Leer nota1,nota2,nota3,nota4,nota5;
	
	nota_final = (nota1+nota2+nota3+nota4+nota5) / 5;
	Si nota_final  >= 5 Entonces;
		Escribir "aprobado";
	SiNo
		Escribir "desaprobado";
	Fin Si
FinAlgoritmo

 