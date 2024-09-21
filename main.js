const form = document.getElementById('form-body')


form.addEventListener('submit', function(e){
    e.preventDefault()

    const numeroLimite = Number(document.getElementById('numero1').value)
    const resultado = document.getElementById('resultado')

    if(numeroLimite <=0 || numeroLimite> 1000|| isNaN(numeroLimite)){
        alert('Por favor, digite um número válido entre 1 e 1.000.')
        return
    }
    
    function calcular (){
        let fibonacci = [0, 1]
        let soma = fibonacci[0] + fibonacci[1]

        while (soma <= numeroLimite){
            fibonacci.push(soma)
            soma = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length-2]
        }
        return fibonacci
    }
    const sequenciaFibonacci = calcular()

        const mensagemResultado = document.querySelector('#resultado')
        mensagemResultado.innerHTML = `Sequência de Fibonacci até <strong>${numeroLimite}</strong>: ${sequenciaFibonacci.join(', ')}.`
        mensagemResultado.style.display = 'block'
   
})
