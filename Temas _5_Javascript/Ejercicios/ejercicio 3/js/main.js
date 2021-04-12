//apartado 1 - Generacion del array

let employees = [];
for (let i =1; i <= 100; i++) {
    const newEmployee = {
        cargo:`Empleado ${i}`,
        redimiento: Number(Math.random().toFixed(2)), //convertimos el numero string en Numero
        salario: Math.ceil(Math.random()* (4000 - 1250)+ 1250)
    };
    employees.push(newEmployee);
}

console.log("1. generacion del array", employees);


//ordenamos el array por rendimiento y lo imprimimos

employees.sort(function(empleado1, empleado2){
    return empleado1.redimiento - empleado2.redimiento
});

console.log(employees);
//ordenamos el array po r salario e imprimimos
employees.sort((empleado1, empleado2) =>  empleado1.salario - empleado2.salario);
console.log(employees);

//ordenamos el array  por el numero de empleado de forma decreciente.El numero
//el numero del empleado estara dentro del string cargo. Usar una funcion nombrada como callback

function orderDecreciente(empleado1,empleado2){
    return empleado2.cargo.slice(9) - empleado1.cargo.slice(9);
}
employees.sort(orderDecreciente);
console.log("Apartado 4 - ordenar por numero de cargo", employees);

// Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.


employees
    .filter(employee => employee.salario > 2500)
    .forEach(employee => console.log(employee.cargo, employee.salario));

//Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5

employees = employees.map(employee => {
    if (employee.salario < 1500){
         employee.salario = employee.salario *1.25;    
    }
        return employee;
});
console.log(employees);

//. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que 
// a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. 

const totalCost = employees.reduce((salarioSum,employee) => salarioSum + employee.salario * 1.15, 0);
    console.log(totalCost);

//Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en 
// cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3.
// • Calcular el sueldo medio de la empresa.
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7

employees = employees .filter(employe => employe.redimiento >= 0.3);
console.log("8.1: Despedir a los que tengan un rendimiento menos a 0.3", employees);

// • Calcular el sueldo medio de la empresa.

const averageSalary = employees.reduce((salarioSum, employee) => salarioSum + employee.salario, 0) / employees.length;
console.log("8.2: calcular el salario medio de la empresa", averageSalary.toFixed(2));

// • Subir el sueldo de los que tengan un rendimiento superior a 0.7

employees = employees.map(employee => {
   if(employee.redimiento >= 0.7);{
       employee.salario = employee.salario * 2;
   }
   return employee;
});

console.log("8.3: subir el sueldo de los que tengan un rendimiento superior a 0.7", employees);

employees.forEach(employee => {
    if (employee.redimiento > 0.7){
        employee.salario *= 1.15;
    }
}