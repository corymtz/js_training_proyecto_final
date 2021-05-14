const { cabiarArreglo, contarVocales, divideArregloGuardaElMenor, palindromo, factorial, bubbleSort, threeCompany, contarLetrasA }
= require('./algoritmos');

test('Validar que la funcion invierte un arreglo', () => {
    
    expect(cabiarArreglo([4, 6, 8, 5, 3, 7,1]).pop()).toEqual(4);
  });

test('Validar que la funcion que invierte un arreglo regresa un arreglo de longuitud igual', () => {
    var arreglo=[4, 6, 8, 5, 3, 7,1];
    var expLen= arreglo.length;
    expect(cabiarArreglo(arreglo).length).toEqual(expLen);
  });
  
test('Validar que la palabra cordelia tiene 4 vocales ', () => {
    expect(contarVocales('cordelia')).toBe(4);
  });

  test('Validar que una cadena de nuemeros no tiene vocales ', () => {
    expect(contarVocales('1234567890')).toBe(0);
  });

test('Validar que el arreglo [4, 6, 8, 5, 3, 7,1] es dividido entre tres y los numeros menores son 4, 3 y 1 ', () => {
   var nuevoArreglo=divideArregloGuardaElMenor([4, 6, 8, 5, 3, 7,1]);
    expect(nuevoArreglo.includes(4)).toBe(true);
    expect(nuevoArreglo.includes(3)).toBe(true);
    expect(nuevoArreglo.includes(1)).toBe(true);
  });

test('Validar que la funcion que divide un arreglo guardar un numero cuanto todos los elementos del arreglo son letras', () => {
    expect(divideArregloGuardaElMenor(['q','w','e','r'])).not.toEqual([]);
  });

 test('Validar que la frase RACE CAR es un palindromo 1', () => {
    expect(palindromo('race car')).toBe(true);
  });
  
  test('Validar que la frase Curso de JavaScript no es un palindromo', () => {
    expect(palindromo('Curso de JavaScript')).toBe(false);
});


test('Validar que el Factorial de 9 es 362880 ', () => {
  expect(factorial(9)).toBe(362880);
});

test('Validar que el Factorial de 9 es diferente de 0', () => {
    expect(factorial(9)).not.toBe(0);
  });
 
  test('Validar que un arreglo procesado por el algoritmo de burbuja es diferente del arreglo original', () => {
    expect(bubbleSort([8,9,3,5,1]).pop()).not.toEqual(8);
  });
 
  test('Validar que un arreglo ordenado y procesado por el algoritmo de burbuja es igual al arreglo original', () => {
    expect(bubbleSort([1,2,3,4,5,6,7,8]).pop()).toBe(8);
  });

  test('Validar que el arlgoritmo  Three Company procesando la palabra CASA incluye la letra A 6 veces ', () => {
    var resultado=threeCompany("casa");
     expect(contarLetrasA(resultado)).toBe(6);
  });

  test('Validar que el arlgoritmo  Three Company procesando la palabra CORY no incluye la letra A veces  ', () => {
    var three=threeCompany("Cory");
    expect(contarLetrasA(three)).toBe(0);
  });