Algoritmo ejercicio_37
	
	
	
	Definir  tamano, NUM, resto Como Entero;
	Definir letras_DNI Como Caracter;
	tamano = 23;
	
	Dimension letras_DNI[tamano];
	
	letras_DNI[0] = "T";
	letras_DNI[1] = "R";
	letras_DNI[2] = "W";
	letras_DNI[3] = "A";
	letras_DNI[4] = "G";
	letras_DNI[5] = "M";
	letras_DNI[6] = "Y";
	letras_DNI[7] = "F";
	letras_DNI[8] = "P";
	letras_DNI[9] = "D";
	letras_DNI[10] = "X";
	letras_DNI[11] = "B";
	letras_DNI[12] = "N";
	letras_DNI[13] = "J";
	letras_DNI[14] = "Z";
	letras_DNI[15] = "S";
	letras_DNI[16] = "Q";
	letras_DNI[17] = "V";
	letras_DNI[18] = "H";
	letras_DNI[19] = "L";
	letras_DNI[20] = "C";
	letras_DNI[21] = "K";
	letras_DNI[22] = "E";
	
	Escribir "INDROTUCE NUMERO DNI";
	
	
	Leer  NUM;
	
	resto = num mod tamano;
	Escribir  " EL DNI COMPLETO ES: "  NUM , letras_DNI[resto];
	
	
	
FinAlgoritmo
