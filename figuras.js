const ladoCuadrado = 5;

console.group('Cuadrado');

console.log('los lados del cuadrado miden : ' + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;

console.log('perimetro del cuadrado miden : ' + perimetroCuadrado);


const areCuadrado = ladoCuadrado * ladoCuadrado;

console.log('el area del cuadrado mide : ' + areCuadrado);

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.groupEnd();

console.group('Triangulo');

console.log('los lados del triangulo son :'
+ ladoTriangulo1 + ' , '
+ ladoTriangulo2 + ' , '
+ baseTriangulo 
);

const alturatriangulo = 5.5
console.log('la altura del triangulo  mide : ' + alturatriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log('El perimetro del triangulo mide : ' + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturatriangulo) / 2;

console.log('El area del triangulo mide : ' + areaTriangulo);


console.groupEnd();



