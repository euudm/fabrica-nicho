{
  estilo: "c",
  nome: "CT Luquinha Alvarenga",
  complemento: "Boxe",
  nicho: "Centro de treinamento de boxe",
  /* número que vem no logo do cliente; confirmar se é o WhatsApp */
  whatsapp: "(15) 99131-5467",
  telefone: "(15) 99131-5467",
  cidade: "Sorocaba",
  bairro: "Centro",
  uf: "SP",
  endereco: "Rua de exemplo, 120, Centro",
  pontoReferencia: "",
  mapsEmbed: "https://www.google.com/maps?q=Sorocaba+SP&z=13&output=embed",
  cor: "#B3141B",            /* vermelho das luvas do logo, escurecido pro texto branco ler */
  corClara: "#FF6B5E",       /* destaque de texto em fundo escuro */
  fundo: "#EDECE9",
  tinta: "#111111",
  /* logo redesenhado a partir do print (o original veio com 171px). logo.png = letras pretas pro header claro,
     logo-claro.png = letras brancas pra ficar em cima da foto. Trocar quando o cliente mandar o arquivo. */
  marca: { img: "logo.png", imgClaro: "logo-claro.png", prop: 2.56, nomeNoHeader: false, noHero: true },
  mensagemWhatsApp: "Olá, vim pelo site e quero marcar uma aula experimental de boxe no CT Luquinha Alvarenga.",
  menu: [["#horarios", "Turmas e horários"], ["#planos", "Planos"], ["#espaco", "O treino"], ["#professor", "O professor"], ["#contato", "Onde fica"]],

  seo: {
    title: "CT Luquinha Alvarenga | Boxe em Sorocaba",
    description: "Centro de treinamento de boxe em Sorocaba. Turma de iniciante, feminino, condicionamento e sparring. Primeira aula grátis, luva emprestada.",
    ogImage: "https://images.unsplash.com/photo-1651707999601-cba87015439c?w=1200&q=80"
  },

  hero: {
    titulo: "Boxe em Sorocaba. A primeira aula é grátis.",
    apoio: "A gente empresta a luva. Você só traz toalha e água.",
    botao: "Marcar aula experimental",
    link2: ["#horarios", "Ver horários"],
    chips: [
      { nome: "Boxe", img: "https://images.unsplash.com/photo-1651707999601-cba87015439c", foco: "50% 50%", linha: "Seg a sex às 7h, 18h30 e 20h." },
      { nome: "Feminino", img: "https://images.unsplash.com/photo-1591804671002-b24e17464f9b", foco: "50% 40%", linha: "Ter e qui às 19h30, só mulheres." },
      { nome: "No saco", img: "https://images.unsplash.com/photo-1773289338378-2d083b1e5b84", foco: "50% 50%", linha: "Condicionamento seg, qua e sex às 6h." }
    ]
  },

  faixa: ["Boxe", "Iniciantes", "Feminino", "Condicionamento", "Sparring", "Manopla", "Saco de pancada"],

  modalidades: {
    titulo: "Turmas e horários",
    texto: "Ninguém entra no sparring na primeira semana. Primeiro vem guarda, base e o jab.",
    aviso: "Horários e valores de exemplo, só pra mostrar como fica. A gente troca pelos dados reais da academia.",
    itens: [
      { nome: "Iniciante", publico: "Adulto, a partir de 15 anos", horarios: ["Seg, qua e sex: 18h30"], desc: "Guarda, base, jab, direto e a esquiva. Muita manopla com o professor e nada de luta até você pedir.", img: "https://images.unsplash.com/photo-1583187856683-dddad0e87f79?w=800&q=75" },
      { nome: "Boxe", publico: "Adulto, quem já treina", horarios: ["Seg a sex: 7h e 20h"], desc: "Aula de 1 hora: corda, sombra, combinação na manopla e rounds de 3 minutos no saco.", img: "https://images.unsplash.com/photo-1636581563884-39569e81cbad?w=800&q=75" },
      { nome: "Feminino", publico: "Só mulheres, a partir de 14 anos", horarios: ["Ter e qui: 19h30"], desc: "A mesma aula de boxe, numa turma só de mulheres. Quem quiser pode treinar nas turmas mistas também.", img: "https://images.unsplash.com/photo-1671856194242-f65ff737301a?w=800&q=75" },
      { nome: "Condicionamento", publico: "Pra quem quer suar, sem luta", horarios: ["Seg, qua e sex: 6h"], desc: "Circuito de saco, corda, burpee e abdominal. Queima muito e não tem contato com ninguém.", img: "https://images.unsplash.com/photo-1754630591156-ef00f2e0d888?w=800&q=75" },
      { nome: "Sparring", publico: "Liberado pelo professor", horarios: ["Sábado: 10h"], desc: "Luta controlada com protetor de cabeça e bucal, parceiro do mesmo peso e o professor na beira do ringue.", img: "https://images.unsplash.com/photo-1726867825984-0582b27728b8?w=800&q=75" }
    ]
  },

  planos: {
    titulo: "Planos",
    texto: "Matrícula de R$ 50. No mensal não tem fidelidade.",
    aviso: "Horários e valores de exemplo, só pra mostrar como fica. A gente troca pelos dados reais da academia.",
    itens: [
      { nome: "2x por semana", preco: "R$ 120", periodo: "por mês", inclui: ["Iniciante, boxe ou feminino", "Escolhe os dias"] },
      { nome: "Livre", preco: "R$ 160", periodo: "por mês", inclui: ["Todas as turmas", "Sparring de sábado"], destaque: "Mais escolhido" },
      { nome: "Trimestral livre", preco: "R$ 420", periodo: "a cada 3 meses", inclui: ["Sai R$ 140 por mês", "Todas as turmas"] }
    ],
    rodape: "Luva, bandagem e bucal vendidos aqui no CT. Aceitamos Pix, cartão de crédito e débito."
  },

  galeria: {
    titulo: "O treino",
    texto: "Manopla, saco, sparring de sábado e a equipe nas lutas.",
    fotos: [
      { img: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e", legenda: "Luta com protetor de cabeça" },
      { img: "https://images.unsplash.com/photo-1716306886418-f84f6d4c2f3a", legenda: "Fileira de sacos" },
      { img: "https://images.unsplash.com/photo-1611816153165-fed23698666d", legenda: "Manopla na turma feminina" },
      { img: "https://images.unsplash.com/photo-1726867863287-aba3393812d0", legenda: "Sparring no ringue" },
      { img: "https://images.unsplash.com/photo-1649589069447-77c886fc53b1", legenda: "Treino de força" },
      { img: "https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e", legenda: "Ringue e saco de velocidade" }
    ]
  },

  professor: {
    titulo: "O professor",
    nome: "Luquinha Alvarenga",
    cargo: "Professor de boxe",
    texto: "É ele quem segura a manopla em quase todas as aulas. Montou o CT pra treinar gente comum, de quem nunca calçou uma luva a quem quer lutar.",
    foto: "https://images.unsplash.com/photo-1517438322307-e67111335449",
    legendaFoto: "Professor na manopla",
    fatos: [["Boxe", "Mais de 10 anos de treino (exemplo)"], ["Lutas", "Cartel amador na Federação Paulista (exemplo)"], ["Aula", "No máximo 15 alunos por turma"]]
  },

  contato: {
    titulo: "Onde fica",
    endereco: "Rua de exemplo, 120, Centro, Sorocaba",
    referencia: "Endereço de exemplo.",
    google: "",
    horario: [["Segunda a sexta", "6h às 21h30"], ["Sábado", "9h às 12h"], ["Domingo", "Fechado"]],
    faqTitulo: "Perguntas de aluno novo",
    faq: [
      { p: "Nunca lutei. Vou apanhar na primeira aula?", r: "Não. Na turma de iniciante não tem luta. Você aprende a guarda e os golpes na manopla e no saco." },
      { p: "Preciso comprar luva antes?", r: "Não. Na aula experimental a gente empresta luva e bandagem. Depois, se quiser, vende aqui mesmo." },
      { p: "Boxe emagrece?", r: "Uma aula de boxe gasta bastante caloria e o condicionamento é feito pra isso. Junto com a alimentação, o resultado aparece rápido." },
      { p: "Sou obrigado a fazer sparring?", r: "Não. O sparring é só pra quem quer e o professor libera quando você estiver pronto." }
    ]
  },

  rodape: "Centro de Treinamento Luquinha Alvarenga, boxe em Sorocaba."
}
