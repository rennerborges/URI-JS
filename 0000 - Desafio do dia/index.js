function Tcc(diaEntregue, diaVerificacao) {

    if (diaEntregue >= 24) return 'Eu odeio a professora'

    let verificarDiaEntregue = diaEntregue < 0 || diaEntregue > 25
    let verificarDiaVerificacao = diaVerificacao < 0 || diaVerificacao > 25

    if (verificarDiaEntregue || verificarDiaVerificacao) return 'Infome um dia valido'

    let diferencaData = diaVerificacao - diaEntregue

    if (diferencaData >= 3) return 'Muito bem! Apresenta antes do Natal'

    return (diaEntregue + 2 < 24) ?
        'Parece o trabalho do meu filho! TCC apresentado!' :
        'Parece o trabalho do meu filho! Fail! Então é nataaaaal!'
}