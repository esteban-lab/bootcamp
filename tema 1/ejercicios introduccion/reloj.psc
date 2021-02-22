Algoritmo sin_titulo
	Definir hora, minutos,segundoss Como Entero;
	
	Escribir "dame la hora";
	Leer  hora;
   	Escribir "dame minutos";
	Leer  minutos;
	escribir "dame segundos";
	leer segundoss;
	
	Mientras hora <= 23 Hacer
		mientras minutos <= 59 Hacer
			Mientras segundoss <= 59 hacer 
				Limpiar Pantalla;
				
				si hora > 9 Entonces
					escribir ,hora Sin Saltar;
				SiNo
					Escribir "0", hora Sin Saltar;
				FinSi
				
				si minutos > 9 Entonces;
					Escribir ":" minutos Sin Saltar;
				SiNo
					escribir ":0", minutos Sin Saltar;
				FinSi
				
				si segundoss > 9 Entonces;
				     Escribir ":", segundoss;
				SiNo
				     Escribir ":0", segundoss;
				FinSi
				segundoss = segundoss + 1;
				Esperar 1 segundo;
			FinMientras
			segundoss = 0;
			minutos = minutos + 1;
		FinMientras
		
		minutos = 0;
		hora = hora + 1;
		si hora == 24 Entonces
			hora = 0;
		FinSi
	FinMientras
	
FinAlgoritmo
