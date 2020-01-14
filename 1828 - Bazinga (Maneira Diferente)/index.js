function Bazinga(sheldon, raj){
    let regras = {
        tesoura: ['papel','lagarto'],
        papel: ['pedra','spock'],
        pedra: ['lagarto','tesoura'],
        spock: ['spock','tesoura'],
        lagarto: ['papel','spock']
    }

    return regras[sheldon].includes(raj) ? 'Bazinga!' : 'Raj Ganhou';
    

}