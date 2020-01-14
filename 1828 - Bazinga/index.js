function Bazinga(sheldon, raj) {

    if (!sheldon || !raj)
        throw new Error("Informe dois parametros")

    sheldon = sheldon.toLowerCase();
    raj = raj.toLowerCase();

    let correspondencia = {
        tesoura: 1,
        papel: 2,
        pedra: 3,
        spock: 4,
        lagarto: 5
    }

    sheldon = correspondencia[sheldon];
    raj = correspondencia[raj];

    if(!sheldon || !raj)
        return 'Informe um valor valido'
    if (sheldon === raj) 
        return 'De novo!'
    if (sheldon === 1 && (raj === 2 || raj === 5)) 
        return 'Bazinga!'
    if (sheldon === 2 && (raj === 3 || raj === 4)) 
        return 'Bazinga!'
    if (sheldon === 3 && (raj === 5 || raj === 1)) 
        return 'Bazinga!'
    if (sheldon === 4 && (raj === 4 || raj === 1)) 
        return 'Bazinga!'
    if (sheldon === 5 && (raj === 2 || raj === 4)) 
        return 'Bazinga!'

    return 'Raj Trapaciou'

}