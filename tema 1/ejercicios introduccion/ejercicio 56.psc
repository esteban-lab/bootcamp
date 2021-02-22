Algoritmo sin_titulo
	
	Definir  N_curso, N_alumnos,notas, curso , alumno,contador Como Entero;
	
	N_curso = 3;
	N_alumnos = 4;
	Dimension notas[N_curso,N_alumnos];
	
	
	
	
	Para curso = 0 hasta N_curso- 1 Hacer
		Para alumno = 0  hasta N_alumnos - 1 Hacer
			
			Escribir "introduce la nota del alumno ", alumno, " del curso ", curso;
			leer notas[curso,alumno];
		FinPara
		
	FinPara
	
	para curso = 0 hasta N_curso - 1 Hacer
		Escribir " curso ", curso, ": " Sin Saltar;
		
		para alumno = 0 hasta N_curso Hacer
			Escribir  notas[curso,alumno], " " , Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	
FinAlgoritmo