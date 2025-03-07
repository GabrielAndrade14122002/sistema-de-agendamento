document.addEventListener("DOMContentLoaded", () => {
    // Função para inicializar o calendário
    const calendario = document.getElementById("calendario");
    const data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth();
  
    function gerarCalendario() {
      calendario.innerHTML = "";
      const mesNome = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
      const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      
      let primeiroDiaDoMes = new Date(ano, mes, 1).getDay();
      let diasNoMes = new Date(ano, mes + 1, 0).getDate();
      
      let tabela = "<table><tr>";
      diasDaSemana.forEach(dia => tabela += `<th>${dia}</th>`);
      tabela += "</tr><tr>";
      
      for (let i = 0; i < primeiroDiaDoMes; i++) {
        tabela += "<td></td>";
      }
      
      for (let dia = 1; dia <= diasNoMes; dia++) {
        if ((primeiroDiaDoMes + dia - 1) % 7 === 0 && dia > 1) tabela += "</tr><tr>";
        tabela += `<td class="dia" data-dia="${dia}">${dia}</td>`;
      }
      
      tabela += "</tr></table>";
      calendario.innerHTML = tabela;
      
      // Adiciona o evento para selecionar uma data
      const dias = document.querySelectorAll(".dia");
      dias.forEach(dia => {
        dia.addEventListener("click", () => {
          const dataSelecionada = new Date(ano, mes, dia.dataset.dia);
          document.getElementById("form-agendamento").onsubmit = function (e) {
            e.preventDefault();
            const horario = document.getElementById("horario").value;
            if (horario) {
              mostrarNotificacao();
            }
          };
        });
      });
    }
  
    // Função para mostrar a notificação de confirmação
    function mostrarNotificacao() {
      const notificacao = document.getElementById("notificacao");
      notificacao.classList.remove("hidden");
      setTimeout(() => notificacao.classList.add("hidden"), 3000);
    }
  
    gerarCalendario();
  });
  