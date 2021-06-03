Algoritmo EJERCICIO_23
	Definir DIA,MES,AÑO Como Entero;;
	LEER DIA,MES, AÑO;
	
	
	
	
	Si (DIA >= 0 Y DIA <= 31) Y (MES > 0 Y MES <= 12) Y AÑO > 0 Entonces
		ESCRIBIR DIA , " DE " SIN SALTAR;
		
		
		Segun MES HACER
			1:
				Escribir  "ENERO" SIN SALTAR;
			2:
				Escribir  "FEBRERO" SIN SALTAR;
			3:
				Escribir  "MARZO" SIN SALTAR;
			4:
				Escribir  "ABRIL" SIN SALTAR;
			5:
				Escribir  "MAYO" SIN SALTAR;
			6:
				Escribir  "JUNIO" SIN SALTAR;
			7:
				Escribir  "JULIO" SIN SALTAR;
			8:
				Escribir  "AGOSTO" SIN SALTAR;
			9:
				Escribir  "SEPTIEMBRE" SIN SALTAR;
			10:
				Escribir  "OCTUBRE" SIN SALTAR;
			11:
				Escribir  "NOVIEMBRE" SIN SALTAR;
			12:
				Escribir  "DICIEMBRE" SIN SALTAR;
		
		FinSegun
		
		Escribir  " DE " , AÑO;
		
	FinSi

FinAlgoritmo

