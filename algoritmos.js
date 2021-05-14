

//cambiar arreglo******

const cabiarArreglo= (arregloUno)=>{
var arregloDos = [];
while(arregloUno.length >0 ){
    arregloDos.push(arregloUno.pop());
}
return arregloDos;
}
//contar el numero de vocales *******

const contarVocales=(cadenaConVocales)=>{
  try{
        return cadenaConVocales.match(/[aeiou]/gi).length;
  }catch (err){
      return 0;
  }
}

const contarLetrasA=(cadenaConLetrasA)=>{

   try{
        return cadenaConLetrasA.match(/[a]/gi).length;
   }catch(error){
        return 0;
    }
}

//arreglo de numeros, dividirlos de3 en 3 e imprimir el menor de cada grupo 

const divideArregloGuardaElMenor= (arreglo)=>{
    var arrayNumerosMenores=[];
    while(arreglo[0]){
        arrayNumerosMenores.push(Math.min(...arreglo.splice(0,3)));
    }
    return arrayNumerosMenores;
}

//descubrir si es palindromo 

const palindromo =(cadena)=>{

var cadenaSinEspacios=cadena.replace(" ",""), 
    x=cadenaSinEspacios.length-1,
    esPalindrome=true;

for(i=0;i<=x;){
    if(cadenaSinEspacios.charAt(i)==cadenaSinEspacios.charAt(x)){
        i=i+1;
        x=x-1;
    }else{
        esPalindrome=false;
        break;
    }
}
return esPalindrome;

}

//factorial
const factorial=(numero)=> {
var factorial=1;

for(var i=1; i<=numero; i++){
    factorial= factorial * i;
}
return factorial;
}
//burbuja

const bubbleSort=(items)=>{
    const e= items.length;
    for(var i=e-1; i>0;i-- ){
        for(var j= (e-i); j>0; j--){
            if(items[j]<items[j-1]){
                [items[j],items[j-1]]=[items[j-1],items[j]]
            }
        }
    }
    return items;
}

//threeCompany

const threeCompany=(input)=>{
    var n = input.length;
    var output="";
    for(var i=0; i<n; i++){
        var letra=input.charAt(i);
        output=output + letra + letra + letra;
    }
    return output;
};


module.exports = { cabiarArreglo, contarVocales, divideArregloGuardaElMenor, palindromo, factorial, bubbleSort, threeCompany,contarLetrasA };
