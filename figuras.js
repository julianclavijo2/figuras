
const operationSquare = (opt) => {
    const ladoCuadrado = document.getElementById('ladoCuadrado');
    document.getElementsByClassName('body-content')[0].replaceChildren();
    switch (opt) {
        case 1:
            let areCuadrado = ladoCuadrado.value * ladoCuadrado.value;
            document.getElementById('popup').style.display = 'block';

            let h1 = document.createElement('h1');
            h1.innerHTML = 'El area es del cuadrado es:';
            let h1Result = document.createElement('h1');
            h1Result.innerHTML = areCuadrado;
            h1Result.style.color = '#5f9ea0';

            document.getElementsByClassName('body-content')[0].append(h1);
            document.getElementsByClassName('body-content')[0].append(h1Result);


            break;
        case 2:
            const perimetroCuadrado = ladoCuadrado.value * 4;

            document.getElementById('popup').style.display = 'block';

            let h1Perimetro = document.createElement('h1');
            h1Perimetro.innerHTML = 'El perimetro del cuadrado es:';
            let h1ResultPerimetro = document.createElement('h1');
            h1ResultPerimetro.innerHTML = perimetroCuadrado;
            h1ResultPerimetro.style.color = '#5f9ea0';

            document.getElementsByClassName('body-content')[0].append(h1Perimetro);
            document.getElementsByClassName('body-content')[0].append(h1ResultPerimetro);



      
            break;

        default:
            break;
    }
}



const operationTriangulo = (opt) => {
    const alturaTriangulo = document.getElementById('alturaTriangulo');
    const baseTriangulo = document.getElementById('baseTriangulo');
    document.getElementsByClassName('body-content')[0].replaceChildren();
    switch (opt) {
        case 1:
            let areaTriangulo = alturaTriangulo.value * baseTriangulo.value / 2;
            document.getElementById('popup').style.display = 'block';

            let h1 = document.createElement('h1');
            h1.innerHTML = 'El area es del triangulo es:';
            let h1Result = document.createElement('h1');
            h1Result.innerHTML = areaTriangulo;
            h1Result.style.color = '#5f9ea0';

            document.getElementsByClassName('body-content')[0].append(h1);
            document.getElementsByClassName('body-content')[0].append(h1Result);


            break;
        case 2:
            const perimetroTriangulo = baseTriangulo.value * 3;
            

            document.getElementById('popup').style.display = 'block';

            let h1Perimetro = document.createElement('h1');
            h1Perimetro.innerHTML = 'El perimetro del triangulo es:';
            let ResultPerimetro = document.createElement('h1');
            ResultPerimetro.innerHTML = perimetroTriangulo;
            ResultPerimetro.style.color = '#5f9ea0';

            document.getElementsByClassName('body-content')[0].append(h1Perimetro);
            document.getElementsByClassName('body-content')[0].append(ResultPerimetro);

            break;

        default:
            break;
    }
}

const operationCirculo = (opt) => {
    const alturaTriangulo = document.getElementById('alturaTriangulo');
    const baseTriangulo = document.getElementById('baseTriangulo');
    document.getElementsByClassName('body-content')[0].replaceChildren();
    switch (opt) {
        case 1:
            let areaTriangulo = alturaTriangulo.value * baseTriangulo.value / 2;
            document.getElementById('popup').style.display = 'block';

            let h1 = document.createElement('h1');
            h1.innerHTML = 'El area es del triangulo es:';
            let h1Result = document.createElement('h1');
            h1Result.innerHTML = areaTriangulo;
            h1Result.style.color = '#5f9ea0';

            document.getElementsByClassName('body-content')[0].append(h1);
            document.getElementsByClassName('body-content')[0].append(h1Result);


            break;
        case 2:
            const perimetroTriangulo = baseTriangulo.value * 3;
            

            document.getElementById('popup').style.display = 'block';

            let h1Perimetro = document.createElement('h1');
            h1Perimetro.innerHTML = 'El perimetro del triangulo es:';
            let ResultPerimetro = document.createElement('h1');
            ResultPerimetro.innerHTML = perimetroTriangulo;
            ResultPerimetro.style.color = '#5f9ea0';

            document.getElementsByClassName('body-content')[0].append(h1Perimetro);
            document.getElementsByClassName('body-content')[0].append(ResultPerimetro);

            break;

        default:
            break;
    }
}

const cerrar = () => {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}


/* const ladoCuadrado = 5;

console.group('Cuadrado');

console.log('los lados del cuadrado miden : ' + ladoCuadrado);



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


console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del circulo es : " + radioCirculo + "cm");

console.log("El diametro del circulo es : " + diametroCirculo + "cm");

console.log('PI es :' + PI + "cm");

console.log("El area del circulo es : " + areaCirculo + "cm");

console.log("El perimetro del circulo es : " + perimetroCirculo + "cm");



console.groupEnd();
 */


