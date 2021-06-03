Algoritmo ejercicio_59
	
	Definir notas, n_centros, n_cursos, n_alumnos, centro, curso, alumno,suma Como Entero;
	Definir media,maximo, centro_max como real;
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	Dimension notas[n_centros,n_cursos,n_alumnos];
	
	para centro = 0 hasta n_centros - 1 Hacer
		Escribir  "centro ", centro;
		para curso = 0 hasta n_cursos - 1 Hacer
			Escribir "curso ", curso; sinsaltar;
			
			suma = 0;
			
			para alumno = 0 hasta n_alumnos - 1 Hacer
				notas[centro,curso,alumno] =  Aleatorio(1,10);
				Escribir notas[centro,curso, alumno], " " Sin Saltar;
				
				suma= suma + notas[centro,curso, alumno];
				
			FinPara
			
			
			media = suma/n_alumnos;
			Escribir "    - Media del curso ; ", media Sin Saltar;	
			
			Si (centro == 0 y curso == 0)  o media > maximo Entonces
				maximo = media;
				centro_max = centro;
				
			Fin Si
			
			Escribir "";
		FinPara
		Escribir "";
	FinPara

	
	Escribir "el maximo o media mas alta es ", maximo, " del centro ", centro_max;
	
	
	
	
	
FinAlgoritmo
