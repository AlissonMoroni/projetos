function exibirMensagem(tag, texto) {
    let digita = document.querySelector(tag);
    digita.innerHTML = texto;
}
exibirMensagem('h3', 'Vamos descobrir qual é o seu IMC ?');

function verificarImc(){

    let calcularPeso = document.getElementById('peso').value;
    let calcularAltura = document.getElementById('altura').value;
    let somar = calcularPeso/(calcularAltura*calcularAltura);
    let numeroFormatado = parseFloat(somar.toFixed(2));
    if(somar < 18.4){
        exibirMensagem('h3' , `Você está abaixo do seu Imc Ideal: <br/>  ${numeroFormatado}`)
    }
    else{
        if(somar > 40){
            exibirMensagem('h3' , `Cuidado Obesidade grave: <br/>  ${numeroFormatado}`)
        }else{

            exibirMensagem('h3' , `Você está acima do seu Imc Ideal: <br/>  ${numeroFormatado}`)
        }
    }
    
    
}

