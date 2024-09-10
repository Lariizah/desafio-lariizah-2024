class RecintosZoo {
    construtor() {
        //Definindo os recintos e seus atributos 
        this.recintos = [
            {numero; 1, bioma: 'savana', tamanho: 10, oupacao: 3, animais ['macaco'] },
            {numero; 2, bioma: 'floresta', tamanho: 5, ocupacao: 0, animais: [] },
            {numero; 3, bioma: 'savana e rio', tamanho: 7, ocupacao: 1, aniamais: [] },
            {numero; 4, bioma: 'rio' tamanho: 8, ocupacao: 0, animais: [] },
            {numero; 5, bioma: 'savana', tamanho: 9, ocupacao: 1 animais: ['leao'] }
      ];
    
    //Definindo os animais, seu tamanho e biomas preferidos
    this.animais = {
        'LEAO': { tamanho: 3, biomas: ['savana'], carnivoro: true },
        'LEOPARDO': { tamanho: 2, biomas: ['savana'] carnivoro: true },
        'CROCODILO': { tamanho: 3, biomas: ['rio'] carnivoro: true },
        'MACACO': { tamanho: 1, biomas: ['savana'] carnivoro: false },
        'GAZELA': { tamanho: 2, biomas: ['savana'] carnivoro: false },
        'HIPOPOTAMO': { tamanho: 4, biomas: ['savana'] carnicoro: false },
        };
    }
    //Função principal que analisa os recintos viaveis
analisaRecintos(tipoAnimal, quantidade) {
    const animal = this.animais[tipoAnimal.toUpperCase()];
    
    //Validacoes de entrada
    if (!animal) { 
        return { erro: 'Animal inválido') }:
        
        
    analisaRecintos(animal, quantidade) {
    }

}

export { RecintosZoo as RecintosZoo };
