// Função para calcular os dias restantes até o aniversário de namoro
function calcularDiasRestantes() {
    // Data atual
    var hoje = new Date();

    // Aniversário de namoro (2 de setembro)
    var aniversarioNamoro = new Date(hoje.getFullYear(), 8, 2);

    // Se o aniversário de namoro já passou este ano, calcular para o próximo ano
    if (hoje > aniversarioNamoro) {
        aniversarioNamoro.setFullYear(aniversarioNamoro.getFullYear() + 1);
    }

    // Calcular a diferença em milissegundos entre as datas
    var diferenca = aniversarioNamoro - hoje;

    // Converter a diferença em dias
    var diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    return diasRestantes;
}

// Função para atualizar o cronômetro
function atualizarCronometro() {
    var diasRestantes = calcularDiasRestantes();

    // Exibir o número de dias restantes na página
    var countdownElement = document.getElementById('countdown');
    countdownElement.textContent = diasRestantes + " dias até o nosso aniversário de namoro!";
}

// Chamar a função para atualizar o cronômetro quando a página carregar
atualizarCronometro();

// Atualizar o cronômetro a cada minuto
setInterval(atualizarCronometro, 60000);