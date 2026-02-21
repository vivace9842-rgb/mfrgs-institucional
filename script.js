// Inteligência de Interface - MFRGS INOVAÇÕES

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sentinela Ativo: Sistema de Divulgação MFRGS Online.");
});

function solicitarAuditoria() {
    // Esta função prepara o cliente emocionalmente para o fechamento
    const confirmacao = confirm("O Sentinela iniciará uma varredura em busca de vulnerabilidades digitais na sua empresa. Deseja prosseguir para o pagamento seguro via PicPay?");
    
    if (confirmacao) {
        // Redireciona para o robô de cobrança que está no seu Core Privado
        // Substitua pela URL que a Vercel te der para o picpay-integration.js
        window.location.href = "https://painel.mfrgsinovacoes.com.br/checkout";
    } else {
        alert("O Sentinela permanecerá em prontidão. Lembre-se: cada minuto sem autoridade é um cliente perdido.");
    }
}

// Efeito de scroll suave para os botões
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
