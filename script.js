// Iniciar o Datepicker
flatpickr("#data", {
    minDate: "today", // Data mínima de seleção (hoje)
    dateFormat: "Y-m-d", // Formato da data
  });
  
  // Função para enviar o agendamento pelo WhatsApp
  function enviarWhatsApp() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var data = document.getElementById('data').value;
    var horario = document.getElementById('horario').value;
  
    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !data || !horario) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    var mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar um serviço para o dia ${data} às ${horario}. Meu e-mail de contato é ${email}.`;
    
    // Substitui espaços por %20 e caracteres especiais por seus códigos
    var url = `https://wa.me/55XXXXXXXXXXX?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp com a mensagem
    window.open(url, "_blank");
  }
  