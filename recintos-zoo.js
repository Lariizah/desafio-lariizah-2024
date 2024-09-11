class RecintosZoo {
    construtor() {
        //Definindo os recintos e seus atributos 
        this.recintos = [
            {numero; 1, bioma: 'savana', tamanho: 10, oupacao: 3, animais ['macaco'] },
            {numero; 2, bioma: 'floresta', tamanho: 5, ocupacao: 0, animais: [] },
            {numero; 3, bioma: 'savana e rio', tamanho: 7, ocupacao: 1, aniamais: [gazela] },
            {numero; 4, bioma: 'rio', tamanho: 8, ocupacao: 0, animais: [] },
            {numero; 5, bioma: 'savana', tamanho: 9, ocupacao: 1, animais: ['leao'] }
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
        return { erro: 'Animal inválido' ) };
        }
        if (!Number.isInteger(quantidade) || quantidade <= 0) {
            return { erro: 'Quantidade inválida' };
        }

        // Calcula o espaço necessário
        const espacoNecessario = animal.tamanho * quantidade;
        const recintosViaveis = [];

        for (const recinto of this.recintos) {
            // Verifica se o recinto possui o bioma adequado e espaço suficiente
            if (animal.biomas.includes(recinto.bioma) && (recinto.tamanho - recinto.ocupacao) >= espacoNecessario) {
                // Verifica se o animal é carnívoro e só pode ficar com a própria espécie
                if (animal.carnivoro && recinto.animais.length > 0 && !recinto.animais.every(a => a === tipoAnimal.toLowerCase())) {
                    continue; // Não permite mistura de espécies carnívoras
                }

                // Regras específicas para Hipopótamos
                if (tipoAnimal.toUpperCase() === 'HIPOPOTAMO' && recinto.bioma !== 'savana e rio') {
                    continue;
                }

                // Verifica o espaço e adiciona à lista de recintos viáveis
                const espacoLivre = recinto.tamanho - (recinto.ocupacao + espacoNecessario);
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanho})`);
            }
        }

        // Retorna a lista de recintos viáveis ou mensagem de erro se não houver
        if (recintosViaveis.length > 0) {
            return { recintosViaveis };
        } else {
            return { erro: 'Não há recinto viável' };
        }
    }
}

// Exemplo de chamada
const zoo = new RecintosZoo();
console.log(zoo.analisaRecintos('MACACO', 2)); // Exemplo de execução
console.log(zoo.analisaRecintos('UNICORNIO', 1)); // Exemplo de erro

// Aqui está o comando export
export { RecintosZoo as RecintosZoo };
        


