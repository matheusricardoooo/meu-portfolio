    // O JavaScript para o scroll
        document.addEventListener('DOMContentLoaded', function() {
            // Pega o botão pelo ID
            const btncontacto = document.getElementById('btn-contato');
            // Pega a seção de contato pelo ID
            const contatoSection = document.getElementById('contacto');

            // Adiciona um "listener" de evento de clique ao botão
            btncontacto.addEventListener('click', function() {
                // Rola a página até a seção de contato
                contacto.scrollIntoView({
                    behavior: 'smooth' // Faz o scroll ser suave
                });
            });
        });