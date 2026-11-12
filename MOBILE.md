# Regras de celular (prioridade máxima)

O cliente SEMPRE vai abrir o site pelo celular, pelo link do WhatsApp.
Projeta primeiro pra tela de 390px e depois adapta pro computador, nunca o contrário.
Continua valendo tudo da seção "Direção visual" do CLAUDE.md (nada de cara de IA): interativo
não significa brilho, neon ou animação exagerada.

## Primeira tela (sem rolar)
- Tem que caber: nome do negócio, o que faz + bairro/cidade, 1 foto, e os botões
  de contato. A pessoa entende o negócio em 3 segundos sem rolar.
- H1 com no máximo ~8 palavras no celular. Texto de apoio com no máximo 2 linhas.
- Foto do hero ocupa a tela toda (100svh) com o texto por cima, alinhado embaixo,
  logo acima da barra de contato (ver "HERO PADRÃO" no CLAUDE.md).
- Header transparente em cima da foto, sólido e mais baixo quando rola.

## Barra de contato fixa no rodapé (substitui o botão flutuante redondo)
- Barra fixa embaixo com 2 botões lado a lado: "Ligar" e "WhatsApp".
- Respeita a área segura do iPhone: padding-bottom: env(safe-area-inset-bottom).
- Adiciona espaço no fim da página pra barra não cobrir o rodapé.
- Some no computador (lá fica o botão normal no header).
- Nunca usar botão flutuante redondo por cima do conteúdo.

## Interações que funcionam no dedo
- Serviços: carrossel horizontal com scroll-snap (arrasta com o dedo), mostrando
  um pedaço do próximo card pra indicar que dá pra arrastar. Sem setas, sem biblioteca.
- Galeria de trabalhos: mesmo esquema de carrossel. Tocar na foto abre em tela cheia,
  fecha arrastando pra baixo ou tocando no X.
- Antes/depois (quando o nicho tiver: funilaria, estofados, impermeabilização,
  pintura, piscina, insulfilm): slider que arrasta com o dedo.
- FAQ em acordeão, um aberto por vez, área de toque na linha inteira.
- Endereço clicável que abre o Google Maps; telefone clicável (tel:).
- Tabela de preços/horários vira cards empilhados no celular, nunca tabela que
  precisa rolar pro lado.
- Menu: header fino e fixo que encolhe ao rolar. Menu abre como painel de baixo
  pra cima, com links grandes.
- Feedback de toque: botão afunda levemente ao tocar (:active com scale .97).

## Animação (pouca e com propósito)
- Seções aparecem suavemente ao rolar (IntersectionObserver, opacidade + 12px
  de deslocamento, 300ms). Só uma vez por elemento.
- Nada de parallax, contador animado de números, texto digitando, partículas.
- Respeita prefers-reduced-motion: desliga todas as animações.

## Tamanhos
- Fonte do corpo mínima 16px, linha 1.5. Títulos de seção 26–32px no celular.
- Área de toque mínima 48x48px, com pelo menos 8px entre botões.
- Margem lateral de 20px. Nada pode encostar na borda da tela.
- Nunca pode existir rolagem horizontal da página.

## Velocidade (link aberto no 4G)
- Sem bibliotecas pesadas: JS puro, CSS no próprio arquivo.
- Imagens com loading="lazy" (menos a do hero), width/height definidos,
  tamanho reduzido via parâmetro do Unsplash (w=800 no celular).
- Fonte do Google com display=swap e no máximo 2 famílias.

## Antes de entregar, confere
1. Simula em 375px e 390px de largura: nada quebrado, nada saindo da tela.
2. Barra fixa não cobre nenhum botão nem o rodapé.
3. Todos os botões de contato funcionam (wa.me e tel:).
4. Primeira tela mostra quem é, o que faz, onde e como chamar.
Se algum item falhar, corrige antes de entregar.

## Como conferir (nesta máquina)
- ATENÇÃO: desde 07/11 o Edge headless não responde. Usar o método do Chrome headless descrito em
  RECEITA-CLIENTE.md (passo 4). O texto abaixo fica de registro.
- Print: `msedge --headless --disable-gpu --user-data-dir=<scratch>\edgeprof --window-size=390,844 --screenshot=<arq>.png file:///<caminho>`
  (usar `--headless` antigo; o `--headless=new` não grava o arquivo aqui).
- Medidas: `base/conferir.js <arquivo.html>` (largura de rolagem, área de toque, barra x botões, links).
