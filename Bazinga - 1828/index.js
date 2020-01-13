function Bazinga(Sheldon, Raj) {
    if (Sheldon && Raj) {
        Sheldon = Sheldon.toUpperCase();
        Raj = Raj.toUpperCase();
        if (Sheldon === Raj) {
            return "De novo!"
        } else {
            let correspondencia = {
                TESOURA: 1,
                PAPEL: 2,
                PEDRA: 3,
                SPOCK: 4,
                LAGARTO: 5
            }
            if (correspondencia[Sheldon] === 1 && (correspondencia[Raj] === 2 || correspondencia[Raj] === 5)) {
                return 'Bazinga!'
            } else if (correspondencia[Sheldon] === 2 && (correspondencia[Raj] === 3 || correspondencia[Raj] === 4)) {
                return 'Bazinga!'
            } else if (correspondencia[Sheldon] === 3 && (correspondencia[Raj] === 5 || correspondencia[Raj] === 1)) {
                return 'Bazinga!'
            } else if (correspondencia[Sheldon] === 4 && (correspondencia[Raj] === 4 || correspondencia[Raj] === 1)) {
                return 'Bazinga!'
            } else if (correspondencia[Sheldon] === 5 && (correspondencia[Raj] === 2 || correspondencia[Raj] === 4)) {
                return 'Bazinga!'
            } else {
                return 'Raj Trapaciou'
            }
        }
    }else{
        console.warn("Informe dois parametros")
    }
}
