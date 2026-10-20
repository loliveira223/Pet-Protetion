//Faqs
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // fechar outros (opcional estilo acordeão)
    items.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // alternar atual
    item.classList.toggle("active");
  });
});

// Funcionalidade do formulário
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if(email && mensagem) {
                alert(`Mensagem enviada com sucesso!\n\nEmail: ${email}\nMensagem: ${mensagem}`);
                // Aqui pode adicionar código para enviar os dados para o servidor
                
                // Opcional: limpar formulário após envio
                // document.getElementById('contactForm').reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
//script das FAQS
     // FUNÇÃO PARA ABRIR/FECHAR AO CLICAR
        document.querySelectorAll('.faq-question-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Encontra o .faq-item pai
                const faqItem = this.closest('.faq-item');
                // Alterna a classe 'open'
                faqItem.classList.toggle('open');
            });
        });

        
const toggle = document.getElementById("darkModeToggle");

// carregar preferência guardada
if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // guardar preferência
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "on");
  } else {
    localStorage.setItem("darkMode", "off");
  }
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

});
//script aumentar texto
let tamanhoFonte = 100;

  const aumentarBtn = document.getElementById("aumentar");
  const diminuirBtn = document.getElementById("diminuir");

  if (aumentarBtn && diminuirBtn) {

    aumentarBtn.addEventListener("click", () => {
      if (tamanhoFonte < 140) {
        tamanhoFonte += 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
      }
    });

    diminuirBtn.addEventListener("click", () => {
      if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
      }
    });

  }





