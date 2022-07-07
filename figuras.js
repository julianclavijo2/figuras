
const operationSquare = (opt) => {
    const ladoCuadrado = document.getElementById('ladoCuadrado');
    document.getElementsByClassName('body-content')[0].replaceChildren();
    switch (opt) {
        case 1:
            if (ladoCuadrado.value == '') {
                errorWarning('Cuadrado');
            } else {
                let areCuadrado = ladoCuadrado.value * ladoCuadrado.value;
                document.getElementById('popup').style.display = 'block';
                let h1 = document.createElement('h1');
                h1.innerHTML = 'El area es del cuadrado es:';
                let h1Result = document.createElement('h1');
                h1Result.innerHTML = areCuadrado;
                h1Result.style.color = '#5f9ea0';
                document.getElementsByClassName('body-content')[0].append(h1);
                document.getElementsByClassName('body-content')[0].append(h1Result);

            }
            break;
        case 2:
            const perimetroCuadrado = ladoCuadrado.value * 4;

            if (ladoCuadrado.value == '') {
                errorWarning('Cuadrado');
            } else {
                document.getElementById('popup').style.display = 'block';
                let h1Perimetro = document.createElement('h1');
                h1Perimetro.innerHTML = 'El perimetro del cuadrado es:';
                let h1ResultPerimetro = document.createElement('h1');
                h1ResultPerimetro.innerHTML = perimetroCuadrado;
                h1ResultPerimetro.style.color = '#5f9ea0';
                document.getElementsByClassName('body-content')[0].append(h1Perimetro);
                document.getElementsByClassName('body-content')[0].append(h1ResultPerimetro);

            }


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
            if (alturaTriangulo.value == '' || baseTriangulo.value == '') {
                errorWarning('Triangulo');
            } else {
                let areaTriangulo = alturaTriangulo.value * baseTriangulo.value / 2;
                document.getElementById('popup').style.display = 'block';
    
                let h1 = document.createElement('h1');
                h1.innerHTML = 'El area es del triangulo es:';
                let h1Result = document.createElement('h1');
                h1Result.innerHTML = areaTriangulo;
                h1Result.style.color = '#5f9ea0';
    
                document.getElementsByClassName('body-content')[0].append(h1);
                document.getElementsByClassName('body-content')[0].append(h1Result);

            }



            break;
        case 2:
            const perimetroTriangulo = baseTriangulo.value * 3;

            if (alturaTriangulo.value == '' || baseTriangulo.value == '') {
                errorWarning('Triangulo');
            } else {
                document.getElementById('popup').style.display = 'block';

                let h1Perimetro = document.createElement('h1');
                h1Perimetro.innerHTML = 'El perimetro del triangulo es:';
                let ResultPerimetro = document.createElement('h1');
                ResultPerimetro.innerHTML = perimetroTriangulo;
                ResultPerimetro.style.color = '#5f9ea0';
    
                document.getElementsByClassName('body-content')[0].append(h1Perimetro);
                document.getElementsByClassName('body-content')[0].append(ResultPerimetro);



            }


        

            break;

        default:
            break;
    }
}

const operationCirculo = (opt) => {
    const diametro = document.getElementById('diametroCirculo');
    const radio = document.getElementById('radioCirculo');
    document.getElementsByClassName('body-content')[0].replaceChildren();
    switch (opt) {
        case 1:
            if (diametro.value == '' || radio.value == '') {
                errorWarning('Circulo');
            } else {
                let radioCirculo = diametro.value / 2;
                document.getElementById('popup').style.display = 'block';
    
                let h1 = document.createElement('h1');
                h1.innerHTML = 'El radio del circulo es:';
                let h1Result = document.createElement('h1');
                h1Result.innerHTML = radioCirculo;
                h1Result.style.color = '#5f9ea0';
    
                document.getElementsByClassName('body-content')[0].append(h1);
                document.getElementsByClassName('body-content')[0].append(h1Result);



            }
   


            break;
        case 2:

            if (diametro.value == '' || radio.value == '') {
                errorWarning('Circulo');
            } else {
                const areaCirculo = ((Math.PI) * (radio.value * radio.value));
                document.getElementById('popup').style.display = 'block';
    
                let h1Perimetro = document.createElement('h1');
                h1Perimetro.innerHTML = 'El area del circulo es:';
                let ResultArea = document.createElement('h1');
                ResultArea.innerHTML = areaCirculo;
                ResultArea.style.color = '#5f9ea0';
    
                document.getElementsByClassName('body-content')[0].append(h1Perimetro);
                document.getElementsByClassName('body-content')[0].append(ResultArea);


            }

        

            break;

        default:
            break;
    }
}


function errorWarning(figura) {
    var msg = document.getElementsByClassName('warning' + figura + '')[0];
    msg.style.display = 'block';
}



const cerrar = () => {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}



