function Bazinga(Sheldon, Raj) {

    if (!Sheldon || !Raj)
        throw new Error("Informe dois parametros")

    Sheldon = Sheldon.toUpperCase();
    Raj = Raj.toUpperCase();

    let correspondencia = {
        TESOURA: 1,
        PAPEL: 2,
        PEDRA: 3,
        SPOCK: 4,
        LAGARTO: 5
    }

    if(!correspondencia[Sheldon] || !correspondencia[Raj])
        return "Informe um valor valido";

    Sheldon = correspondencia[Sheldon];
    Raj = correspondencia[Raj];

    if (Sheldon === Raj) 
        return "De novo!"
    if (Sheldon === 1 && (Raj === 2 || Raj === 5)) 
        return 'Bazinga!'
    if (Sheldon === 2 && (Raj === 3 || Raj === 4)) 
        return 'Bazinga!'
    if (Sheldon === 3 && (Raj === 5 || Raj === 1)) 
        return 'Bazinga!'
    if (Sheldon === 4 && (Raj === 4 || Raj === 1)) 
        return 'Bazinga!'
    if (Sheldon === 5 && (Raj === 2 || Raj === 4)) 
        return 'Bazinga!'

    return 'Raj Trapaciou'

}