// Pega todos os cards do quadro
document.querySelectorAll('.card').forEach(card => {
    // Ação para quando começar a arrastar o card fazer algo
    card.addEventListener('dragstart', e => {
        // Adiciona uma classe no próprio card
        e.currentTarget.classList.add('arrastando');
    })

    // Ação para parar de arrastar o card
    card.addEventListener('dragend', e => {
        // Remove a classe do card para ele não ficar eternamente com a classe
        e.currentTarget.classList.remove('arrastando')
    })
})

// Cada coluna recebe o card
document.querySelectorAll('.cards-kanban').forEach(coluna => {
    // Ação quando o card for arrastado sobre a coluna
    coluna.addEventListener('dragover', e => {
        // Permite que arraste uma coisa acima da outra
        e.preventDefault();
        // Adiciona a classe de hover dos cards
        e.currentTarget.classList.add('cards-hover');
    })

    // Remove do card da coluna ao arrastar
    coluna.addEventListener('dragleave', e => {
        // Remove a classe de hover dos cards
        e.currentTarget.classList.remove('cards-hover');
    })

    // Quando o card for solto na coluna ela recebe o card
    coluna.addEventListener('drop', e => {
        // Remove a classe ede hover dos cards
        e.currentTarget.classList.remove('cards-hover');

        // Seleciona o card que está sendo arrastado
        const cardArrastado = document.querySelector('.card.arrastando');
        // Passa o card para dentro da coluna
        e.currentTarget.appendChild(cardArrastado);
    })
})