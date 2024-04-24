
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nosso Site de Namoro</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Nosso Site de Namoro</h1>
    </header>

    <main>
        <section id="inicio">
            <div class="banner">
                <h2>Nosso Amor em Fotos</h2>
                <!-- Aqui você pode adicionar suas fotos -->
                <img src="foto1.jpg" alt="Foto do casal">
                <img src="foto2.jpg" alt="Foto do casal">
                <!-- Adicione mais fotos conforme necessário -->
            </div>
        </section>

        <section id="cronometro">
            <h2>Aniversário de Namoro</h2>
            <div id="countdown"></div>
        </section>

        <section id="fotos">
            <h2>Nossas Fotos</h2>
            <!-- Adicione suas fotos juntos aqui -->
        </section>
    </main>

    <footer>
        <p>© 2024 Nosso Site de Namoro</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

CSS (styles.css):
```css
/* Estilos anteriores permanecem os mesmos */

#cronometro {
    background-color: #ffcccc; /* Rosa */
    padding: 20px;
    text-align: center;
}

#cronometro h2 {
    color: #ff0000; /* Vermelho */
}

#countdown {
    font-size: 24px;
}

/* Estilos para a seção de fotos */
#fotos {
    background-color: #ffcccc; /* Rosa */
    padding: 20px;
    text-align: center;
}

#fotos h2 {
    color: #ff0000; /* Vermelho */
}
```

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