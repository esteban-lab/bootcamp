Algoritmo sin_titulo
	Definir monto,descuento Como real;
	Escribir "introduce monto";
	Leer monto;
	Leer descuento;
	
	Si monto < 500 Entonces
		Escribir  "no hay descuento";
	SiNo
		Si monto >= 500 y compra <= 1000 Entonces
			
			Escribir "tiens un descuento de 5%" , compra * 0.95;
		SiNo
			Si monto >= 1000 y compra <= 7000 Entonces
				Escribir "tienes un descuento de 10%" ,  compra * 1.10;
				acciones_por_verdadero
			SiNo
				Si monto      
					acciones_por_verdadero
				SiNo
					acciones_por_falso
				Fin Si
				acciones_por_falso
			Fin Si
		Fin Si
		acciones_por_falso
	Fin Si
	Fin Si
	Segun variable_numerica Hacer
		opcion_1:
			secuencia_de_acciones_1
		opcion_2:
			secuencia_de_acciones_2
		opcion_3:
			secuencia_de_acciones_3
		De Otro Modo:
			secuencia_de_acciones_dom
	Fin Segun
FinAlgoritmo
