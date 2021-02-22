
	Funcion resultado <- potencia(base,expo)
		Definir  resultado Como Entero;
		si expo = 0 Entonces
			resultado = 1;
		SiNo
			resultado = base*potencia(base,expo-1); 
		FinSi
	Fin Funcion
	
	Funcion resultado <- Factorial(A)
		Definir resultado Como Entero;
		resultado = 1;
		si A <> 0 Entonces
			resultado = A*Factorial(A-1);
		FinSi
	Fin Funcion
	
	
	Algoritmo sin_titulo
		Definir N, x Como Entero;
		x = 0;
		escribir " Dame un numero y un exponente" ;
		leer N, x;
	//		para x = N hasta 1 con paso -1 Hacer
		Escribir "El factorial de " , N " es ", Factorial(N);
	//		FinPara
		Escribir N, " elevado a ", x, " es ", potencia(N, x);
	FinAlgoritmo
