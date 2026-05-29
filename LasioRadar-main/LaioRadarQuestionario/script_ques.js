// --- INTERCEPTAR O ENVIO DO FORMULÁRIO ---

// Selecionamos o formulário pelo ID dele
const formulario = document.getElementById("formEsportivo");

// Adicionamos um "ouvinte" para capturar o momento em que o usuário clica em enviar
formulario.addEventListener("submit", function(event) {
    
    // Evita o comportamento padrão do HTML de atualizar a página ao enviar
    event.preventDefault();

    // Exibe uma mensagem de sucesso elegante na tela
    alert("Muito obrigado! Suas respostas foram enviadas com sucesso.");
    
    // Opcional: Limpa os campos do formulário após o envio
    formulario.reset();
});