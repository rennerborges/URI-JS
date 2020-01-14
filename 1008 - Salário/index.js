function salario(numero, horasTrabalhadas, valorHoraTrabalhada){
    console.log('Numero: '+ numero);
    return 'U$: '+ (horasTrabalhadas*valorHoraTrabalhada).toFixed(2);
}