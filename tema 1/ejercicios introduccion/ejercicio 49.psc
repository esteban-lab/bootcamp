Algoritmo sin_titulo
	
	Definir dulces, conservas, bebidas, tamano, mes, dulces_maximo, mes_maximo, conservas_maximo, bebidas_maximo, suma, max, mes_max , min, mes_min Como Entero;
	
	tamano = 12;
	Dimension dulces[tamano], conservas[tamano], bebidas[tamano];
	
	
	Escribir " deps   dulces  bebidas conservas ";
	
	Para  mes = 0 Hasta tamano -1
		dulces[mes] = Aleatorio(50,300);
		conservas[mes] = aleatorio(50,300);
		bebidas[mes] =Aleatorio(50,300);
		
		Escribir " mes ", mes +1, "    ", dulces[mes], "    ", conservas[mes], "      ",  bebidas[mes];
		
	FinPara
	
	
	
	Para mes = 0 Hasta tamano -1 Con Paso 1 Hacer
		si mes == 0 o dulces[mes] > dulces_maximo Entonces
			dulces_maximo =  dulces[mes];
			mes_maximo = mes;
		FinSi
	Fin Para
	

	
	Escribir " el mes que se registro el mayor coste de produccion del mes ", mes_maximo + 1;
	
	Escribir " ";
	suma = 0;
	
	Para mes = 0 Hasta tamano - 1 Con Paso 1 Hacer
		suma = suma + bebidas[mes];
	Fin Para
	
	Escribir " la media  de bebidas ", suma/tamano;
	
	
	
	
	Para mes = 0 Hasta tamano -1 Con Paso 1 Hacer
		
		si mes == 0 o bebidas[mes] > max Entonces
			max =  bebidas[mes];
			mes_max = mes;
		FinSi
		
		si mes == 0 o bebidas[mes] < min Entonces
			min =  bebidas[mes];
			mes_min = mes;
		FinSi
		
		
	Fin Para
	
	
	Escribir " el mes con mas coste del departamento de bebidas " , max," es el "  mes_max;
	Escribir " el mes con menor coste de departamento de bebidas ", min," es el " mes_min;
	

	

	
	
	
	
FinAlgoritmo
