{
  estilo: "c",
  nome: "[NOME]",
  complemento: "Artes Marciais",
  nicho: "Academia de artes marciais",
  whatsapp: "[WHATSAPP]",
  telefone: "[WHATSAPP]",
  cidade: "[CIDADE]",
  bairro: "[BAIRRO]",
  uf: "SP",
  endereco: "[ENDERECO]",
  pontoReferencia: "[PONTO_DE_REFERENCIA]",
  mapsEmbed: "",
  cor: "#1F4FA3",            /* cor da marca: faixa, seção de cor, botões */
  corClara: "#9DB8F2",       /* destaque de texto em fundo escuro ou de cor */
  fundo: "#F2F0EB",
  tinta: "#1A1A1A",
  mensagemWhatsApp: "Olá, vim pelo site e quero marcar uma aula experimental na {nome}.",
  menu: [["#horarios", "Modalidades e horários"], ["#planos", "Planos"], ["#espaco", "O espaço"], ["#professor", "Professor"], ["#contato", "Onde fica"]],

  seo: {
    title: "[NOME] | Jiu-jitsu, muay thai e boxe em [BAIRRO], [CIDADE]",
    description: "Academia de artes marciais em [BAIRRO], [CIDADE]. Jiu-jitsu, muay thai, boxe, karatê e turma kids, com aulas das 6h às 22h. Primeira aula grátis.",
    ogImage: "https://images.unsplash.com/photo-1615117972428-28de67cda58e?w=1200&q=80"
  },

  hero: {
    titulo: "Jiu-jitsu, muay thai e boxe em [BAIRRO].",
    apoio: "Turmas de manhã e à noite. A primeira aula é grátis.",
    botao: "Marcar aula experimental",
    link2: ["#horarios", "Ver horários"],
    /* cada chip troca a foto de fundo e a linha de baixo */
    chips: [
      { nome: "Jiu-jitsu", img: "https://images.unsplash.com/photo-1615117972428-28de67cda58e", foco: "68% 55%", linha: "Seg, qua e sex às 6h30 e 19h. Sem kimono ter e qui às 20h." },
      { nome: "Muay thai", img: "https://images.unsplash.com/photo-1517438322307-e67111335449", foco: "45% 40%", linha: "Ter e qui às 7h e 19h. Sábado às 9h." },
      { nome: "Boxe", img: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b", foco: "62% 40%", linha: "Seg, qua e sex às 12h e 20h." }
    ]
  },

  faixa: ["Jiu-jitsu", "Muay thai", "Boxe", "Karatê", "Defesa pessoal feminina", "Condicionamento", "Turma kids"],

  modalidades: {
    titulo: "Modalidades e horários",
    texto: "Toda turma mistura iniciante com graduado. O professor monta as duplas por tamanho e nível.",
    itens: [
      { nome: "Jiu-jitsu", publico: "Adulto, a partir de 15 anos", horarios: ["Seg, qua e sex: 6h30 e 19h", "Ter e qui: 20h (sem kimono)", "Sábado: 10h, treino livre"], desc: "Aula de 1h15: aquecimento, técnica da semana e rola no final. Quem está começando treina as posições com o professor antes de rolar.", img: "https://images.unsplash.com/photo-1615117972428-28de67cda58e?w=800&q=75" },
      { nome: "Muay thai", publico: "Adulto, a partir de 14 anos", horarios: ["Ter e qui: 7h e 19h", "Sábado: 9h"], desc: "Chute, joelhada, cotovelada e clinch, no saco e na manopla. Sparring só na turma avançada e com protetor.", img: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=75" },
      { nome: "Boxe", publico: "Adulto, a partir de 14 anos", horarios: ["Seg, qua e sex: 12h e 20h"], desc: "Base, jab, direto e esquiva, com muita corda e saco. Pra quem quer fôlego e não quer treino de chão.", img: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=800&q=75" },
      { nome: "Karatê", publico: "Infantil de 7 a 12 anos e adulto", horarios: ["Ter e qui: 18h (infantil)", "Ter e qui: 19h (adulto)"], desc: "Kihon, kata e kumite. Exame de faixa uma vez por semestre, estilo [ESTILO_KARATE].", img: "https://images.unsplash.com/photo-1514050566906-8d077bae7046?w=800&q=75" },
      { nome: "Defesa pessoal feminina", publico: "Só mulheres, a partir de 14 anos", horarios: ["Ter e qui: 9h e 19h"], desc: "Como sair de agarrão, de pegada no pulso e no cabelo, e de alguém por cima de você no chão. No máximo 12 alunas por turma.", img: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=800&q=75" },
      { nome: "Condicionamento de luta", publico: "Adulto, sem contato", horarios: ["Seg a sex: 6h, 12h e 18h"], desc: "40 minutos de circuito com corda, saco, burpee e kettlebell. Ninguém encosta em ninguém.", img: "https://images.unsplash.com/photo-1608138278545-366680accc66?w=800&q=75" },
      { nome: "Turma kids", publico: "4 a 6 anos e 7 a 12 anos", horarios: ["Seg e qua: 17h (4 a 6 anos)", "Ter e qui: 17h (7 a 12 anos)"], desc: "Jiu-jitsu com brincadeira no começo e técnica no fim. Grau na faixa a cada 4 meses, e os pais assistem do banco ao lado do tatame.", img: "", legendaFoto: "Turma kids no tatame" }
    ]
  },

  planos: {
    titulo: "Planos",
    texto: "Matrícula de [PRECO_MATRICULA]. O plano mensal não tem fidelidade.",
    itens: [
      { nome: "2x por semana", preco: "[PRECO_PLANO_2X]", periodo: "por mês", inclui: ["1 modalidade", "Qualquer horário da grade"] },
      { nome: "Livre", preco: "[PRECO_PLANO_LIVRE]", periodo: "por mês", inclui: ["Todas as modalidades", "Quantas aulas quiser na semana"], destaque: "Mais escolhido" },
      { nome: "Kids", preco: "[PRECO_PLANO_KIDS]", periodo: "por mês", inclui: ["2 aulas por semana", "Kimono infantil com desconto"] }
    ],
    rodape: "Segunda pessoa da mesma família paga [DESCONTO_FAMILIA]% a menos. Aceitamos Pix, cartão de crédito e débito, e boleto no plano trimestral."
  },

  galeria: {
    titulo: "O espaço",
    texto: "Tatame de [AREA_TATAME] m², [QTD_SACOS] sacos de pancada, vestiário masculino e feminino com chuveiro.",
    fotos: [
      { img: "", legenda: "Tatame com a turma da noite" },
      { img: "", legenda: "Área dos sacos de pancada" },
      { img: "", legenda: "Turma kids" },
      { img: "", legenda: "Vestiário" },
      { img: "", legenda: "Fachada vista da rua" },
      { img: "", legenda: "Dia de graduação" }
    ]
  },

  professor: {
    titulo: "Quem dá aula",
    nome: "[NOME_PROFESSOR]",
    cargo: "Faixa preta de jiu-jitsu, [GRAU] grau",
    texto: "Treina há [ANOS_DE_TREINO] anos e dá aula em [BAIRRO] desde [ANO_INICIO]. Conduz o jiu-jitsu adulto e a turma kids. O muay thai e o boxe ficam com [NOME_PROFESSOR_2], [GRADUACAO_PROFESSOR_2].",
    foto: "",
    legendaFoto: "Professor no tatame, de kimono",
    fatos: [["Graduação", "Faixa preta [GRAU] grau, [FEDERACAO]"], ["Equipe", "[NOME_EQUIPE]"], ["Na academia desde", "[ANO_INICIO]"]]
  },

  contato: {
    titulo: "Onde fica",
    endereco: "[ENDERECO], [BAIRRO], [CIDADE]",
    referencia: "Ao lado de [PONTO_DE_REFERENCIA]. [ESTACIONAMENTO].",
    google: "Nota [NOTA_GOOGLE] no Google, em [TOTAL_AVALIACOES] avaliações.",
    horario: [["Segunda a sexta", "6h às 22h"], ["Sábado", "9h às 13h"], ["Domingo", "Fechado"]],
    faqTitulo: "Perguntas de aluno novo",
    faq: [
      { p: "Nunca treinei. Posso entrar em qualquer turma?", r: "Pode. Na primeira semana o professor coloca você com um aluno mais graduado, que ensina as posições básicas devagar." },
      { p: "O que levar na aula experimental?", r: "Camiseta, bermuda ou legging sem zíper, garrafa de água e chinelo. Kimono e luva a gente empresta na primeira aula." },
      { p: "Criança pode fazer aula experimental?", r: "Pode, a partir de 4 anos. Um responsável precisa ficar na academia durante a aula." },
      { p: "Tem lugar pra estacionar?", r: "[ESTACIONAMENTO]." }
    ]
  },

  rodape: "[NOME], academia de artes marciais em [BAIRRO], [CIDADE]. CNPJ [CNPJ]."
}
