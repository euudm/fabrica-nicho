{
  estilo: "c",
  nome: "Ikigai Jiu-Jitsu Dojo",
  complemento: "Jiu-jitsu",
  nicho: "Escola de jiu-jitsu",
  whatsapp: "[WHATSAPP]",
  telefone: "[WHATSAPP]",
  cidade: "Sorocaba",
  bairro: "Centro",
  uf: "SP",
  endereco: "Rua de exemplo, 100, Centro",
  pontoReferencia: "",
  mapsEmbed: "https://www.google.com/maps?q=Sorocaba+SP&z=13&output=embed",
  cor: "#B3141B",            /* vermelho do ensō do logo */
  corClara: "#EFE3CF",       /* papel de arroz: destaque de texto em fundo escuro ou vermelho */
  fundo: "#F4F1EA",
  tinta: "#151515",
  /* logo original do cliente (veio em baixa resolução, trocar quando mandar o arquivo grande).
     logo.png = traço preto, pro header claro. logo-claro.png = traço branco, pra ficar em cima da foto. */
  marca: { img: "logo.png", imgClaro: "logo-claro.png", noHero: true },
  mensagemWhatsApp: "Olá, vim pelo site e quero marcar uma aula experimental de jiu-jitsu no Ikigai Dojo.",
  menu: [["#horarios", "Turmas e horários"], ["#planos", "Planos"], ["#espaco", "O dojo"], ["#professor", "O professor"], ["#contato", "Onde fica"]],

  seo: {
    title: "Ikigai Jiu-Jitsu Dojo | Jiu-jitsu em Sorocaba",
    description: "Dojo de jiu-jitsu em Sorocaba. Turmas com e sem kimono, kids a partir de 4 anos e turma só pra iniciantes. Primeira aula grátis, kimono emprestado.",
    ogImage: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=1200&q=80"
  },

  hero: {
    titulo: "Jiu-jitsu em Sorocaba, com e sem kimono.",
    apoio: "Turma de iniciante, adulto e kids. Na primeira aula a gente empresta o kimono.",
    botao: "Marcar aula experimental",
    link2: ["#horarios", "Ver horários"],
    chips: [
      { nome: "Kimono", img: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4", foco: "50% 70%", linha: "Seg, qua e sex às 7h e 19h30. Sábado às 10h." },
      { nome: "Sem kimono", img: "https://images.unsplash.com/photo-1615117972428-28de67cda58e", foco: "78% 50%", linha: "Ter e qui às 20h30, de rash guard e bermuda." },
      { nome: "Kids", img: "https://images.unsplash.com/photo-1616447285364-f1461103ee36", foco: "62% 50%", linha: "Ter e qui às 17h30 (4 a 7 anos) e 18h30 (8 a 13 anos)." }
    ]
  },

  faixa: ["Jiu-jitsu", "Com kimono", "Sem kimono", "Kids", "Iniciantes", "Graduação"],

  modalidades: {
    titulo: "Turmas e horários",
    texto: "Quem nunca treinou começa na turma de iniciante. Ninguém rola valendo na primeira semana.",
    aviso: "Horários e valores de exemplo, só pra mostrar como fica. A gente troca pelos dados reais do dojo.",
    itens: [
      { nome: "Iniciante", publico: "Adulto, primeiros 3 meses", horarios: ["Seg e qua: 19h30"], desc: "Queda, guarda, passagem e as saídas de baixo, uma posição por semana. O rola é só de posição, com parceiro do seu tamanho.", img: "https://images.unsplash.com/photo-1598300606161-4019d0dfec28?w=800&q=75" },
      { nome: "Jiu-jitsu com kimono", publico: "Adulto, a partir de 14 anos", horarios: ["Seg, qua e sex: 7h e 19h30", "Sábado: 10h"], desc: "Aula de 1h15: aquecimento, técnica da semana, drill em dupla e rola no final. Faixa branca e graduado treinam juntos.", img: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=75" },
      { nome: "Sem kimono", publico: "Adulto, a partir de 14 anos", horarios: ["Ter e qui: 20h30"], desc: "Jiu-jitsu de rash guard e bermuda, com mais queda, pegada no braço e finalização de perna. Bom pra quem também faz MMA.", img: "https://images.unsplash.com/photo-1615117972428-28de67cda58e?w=800&q=75" },
      { nome: "Kids", publico: "4 a 7 anos e 8 a 13 anos", horarios: ["Ter e qui: 17h30 (4 a 7)", "Ter e qui: 18h30 (8 a 13)"], desc: "Brincadeira no começo, técnica no fim e nada de soco ou chute. A criança aprende a cair, a se soltar de agarrão e a respeitar o tatame.", img: "https://images.unsplash.com/photo-1616447285364-f1461103ee36?w=800&q=75" },
      { nome: "Treino livre", publico: "Alunos matriculados", horarios: ["Sábado: 11h15"], desc: "Uma hora de rola e de tirar dúvida com o professor. Dá pra repetir a posição que não saiu na semana.", img: "https://images.unsplash.com/photo-1656653121475-e33829581294?w=800&q=75" }
    ]
  },

  planos: {
    titulo: "Planos",
    texto: "Matrícula de R$ 50. O plano mensal não tem fidelidade.",
    aviso: "Horários e valores de exemplo, só pra mostrar como fica. A gente troca pelos dados reais do dojo.",
    itens: [
      { nome: "Kids", preco: "R$ 140", periodo: "por mês", inclui: ["2 aulas por semana", "Graduação de grau na faixa"] },
      { nome: "Adulto livre", preco: "R$ 180", periodo: "por mês", inclui: ["Com e sem kimono", "Treino livre de sábado"], destaque: "Mais escolhido" },
      { nome: "Adulto 2x", preco: "R$ 140", periodo: "por mês", inclui: ["2 aulas por semana", "Qualquer horário da grade"] }
    ],
    rodape: "Kimono a partir de R$ 250, vendido aqui no dojo. Segunda pessoa da mesma família paga 20% a menos. Aceitamos Pix, cartão de crédito e débito."
  },

  galeria: {
    titulo: "O dojo",
    texto: "Tatame, rola de fim de aula e turma kids.",
    fotos: [
      { img: "https://images.unsplash.com/photo-1598300606161-4019d0dfec28", legenda: "Tatame com a turma da noite" },
      { img: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4", legenda: "Rola no fim da aula" },
      { img: "https://images.unsplash.com/photo-1616447285364-f1461103ee36", legenda: "Turma kids" },
      { img: "https://images.unsplash.com/photo-1656653121475-e33829581294", legenda: "Faixa preta amarrada pro treino" },
      { img: "https://images.unsplash.com/photo-1615117972428-28de67cda58e", legenda: "Treino sem kimono" }
    ]
  },

  professor: {
    titulo: "O professor",
    nome: "Professor do Ikigai",
    cargo: "Faixa preta de jiu-jitsu, 2º grau",
    texto: "Treina jiu-jitsu há 18 anos e abriu o Ikigai em 2019. Dá todas as aulas de adulto e acompanha a turma kids. Ikigai é a palavra japonesa pra razão de levantar da cama de manhã.",
    foto: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac",
    legendaFoto: "Professor de kimono, no tatame do dojo",
    fatos: [["Graduação", "Faixa preta 2º grau (exemplo)"], ["Abriu o dojo", "2019 (exemplo)"], ["Na turma kids", "Graduação de grau a cada 4 meses"]]
  },

  contato: {
    titulo: "Onde fica",
    endereco: "Rua de exemplo, 100, Centro, Sorocaba",
    referencia: "Endereço de exemplo.",
    google: "",
    horario: [["Segunda a sexta", "7h às 21h45"], ["Sábado", "10h às 12h15"], ["Domingo", "Fechado"]],
    faqTitulo: "Perguntas de aluno novo",
    faq: [
      { p: "Nunca treinei nada. Posso começar?", r: "Pode. Você entra na turma de iniciante e treina as posições com calma antes de rolar com a turma." },
      { p: "Preciso ter kimono?", r: "Na primeira aula não, a gente empresta. Se continuar, o kimono sai a partir de R$ 250 aqui no dojo." },
      { p: "O que levar na aula experimental?", r: "Camiseta justa, bermuda sem zíper, garrafa de água e chinelo. Unha do pé e da mão cortada." },
      { p: "Com que idade a criança pode começar?", r: "A partir de 4 anos. Um responsável fica no dojo durante a primeira aula." }
    ]
  },

  rodape: "Ikigai Jiu-Jitsu Dojo, escola de jiu-jitsu em Sorocaba."
}
