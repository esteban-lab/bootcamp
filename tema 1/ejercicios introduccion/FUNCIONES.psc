Funcion saludar(nombre,apellido,dia)
	Escribir " hola ", nombre, "", apellido;
	
	si Minusculas(dia)  == "viernes" Entonces
		Escribir  " buen finde!! ";
	SiNo
		Escribir " a seguir con la semana";
		
	FinSi
FinFuncion


Algoritmo saludo
	Definir mi_nombre, apellido, mi_dia Como Caracter;
	
	mi_nombre = "juanito";
	apellido = "crack";
	mi_dia = "jueves";
	

	saludar("juanito"," manca"," viernes");
	saludar("jane", " ringo", "viernes");

FinAlgoritmo


