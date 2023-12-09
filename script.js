let form = document.getElementById('calculadora');

let volumen


const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIA = document.getElementById('dia');

CALCULAR.addEventListener('click', () => {
    FLU.style.display = 'none';
    MAN.style.display = 'none';
    ERROR.style.display = 'none';
    DIA.style.display = 'none';

    let peso = document.getElementById("peso").valueAsNumber;
    if (peso > 0){
        calcularPeso(peso)
    }else{
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIA.style.display = 'none';
    }
});



function calcularPeso (peso){
    
    if(peso <= 30){
        volumen = hollyDay(peso);
        DIA.innerHTML = "Diario: " + volumen + " cc"
        DIA.style.display = 'block';
        FLU.innerHTML = "Man: " + Math.floor(volumen / 24) + " cc/hr"
        FLU.style.display = 'block'
        MAN.innerHTML = "m+m/2: " + Math.floor(volumen / 24) * 1.5 + " cc/hr"
        MAN.style.display = 'block'
    }else{
        Volumen = masa(peso)
        FLU.innerHTML = "SC * 1500: " + Math.floor(volumen * 1500) + " cc"
        FLU.style.display = 'block'
        MAN.innerHTML = "SC * 2000: " + Math.floor(volumen * 2000) + " cc"
        MAN.style.display = 'block'
    }
}

function hollyDay(peso){
    if(peso <= 10){
        volumen = peso * 100;
    }else if(peso <= 20 ){
        volumen = (10 * 100) + ((peso - 10) * 50);
    }else{
        volumen = (10 * 100) + (10 * 50) + ((peso - 20)* 20);
    }
    return volumen;
}

function masa(peso){
    volumen = ( (peso * 4) + 7) / (peso + 90);
    return volumen;
}