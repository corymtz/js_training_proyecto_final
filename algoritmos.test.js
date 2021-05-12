const { cabiarArreglo, contarVocales, divideArregloGuardaElMenor, palindromo, factorial, bubbleSort, threeCompany }
= require('./algoritmos');

test('Validar cambiar arreglo 1 ', () => {
    expect(cabiarArreglo([4, 6, 8, 5, 3, 7,1])).not.toEqual([4, 6, 8, 5, 3, 7,1]);
  });

  test('CValidar cambiar arreglo 2', () => {
    expect(cabiarArreglo([4, 6, 8, 5, 3, 7,1])).toBe([4, 6, 8, 5, 3, 7,1]);
  });
  
test('Validar Contar Vocales 1 ', () => {
    expect(contarVocales('cordelia')).toBe(4);
  });

  test('Validar contar Vocales 2 ', () => {
    expect(contarVocales('cordelia')).toBe(5);
  });

test('Validar divide Arreglo Guarda El Menor 1', () => {
    expect(divideArregloGuardaElMenor([4, 6, 8, 5, 3, 7,1])).toBe([4,3,1]);
  });

  test('Validar divide Arreglo Guarda El Menor 2', () => {
    expect(divideArregloGuardaElMenor([4, 6, 8, 5, 3, 7,1])).not.toEqual([4,3,1]);
  });

 test('Validar palindromo 1', () => {
    expect(palindromo('race car')).toBe(true);
  });
  
  test('Validar palindromo 2', () => {
    expect(palindromo('racing car')).toBe(false);
});


test('Validar que el Factorial de 9 es 362880 ', () => {
  expect(factorial(9)).toBe(362880);
});

test('Validar que el Factorial de 7 es 5040', () => {
    expect(factorial(7)).not.toEqual(5040);
  });
 
  test('Validar bubbleSort 1', () => {
    expect(bubbleSort([8,9,3,5,1])).not.toEqual([8,9,3,5,1]);
  });
 
  test('Validar bubbleSort 2', () => {
    expect(bubbleSort([8,9,3,5,1])).toBe([8,9,3,5,1]);
  });

  test('Validar three company 1', () => {
    expect(threeCompany("casa")).toBe('casa');
  });

  test('Validar three company 2', () => {
    expect(threeCompany("casa")).toBe('casa');
  });