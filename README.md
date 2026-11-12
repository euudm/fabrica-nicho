# Fábrica de sites de nicho

Gerador de landing pages para negócios locais. Um template HTML por estilo visual e um arquivo de configuração por cliente: rodar um comando gera a página pronta para publicar, com SEO, links de WhatsApp e layout pensado primeiro para o celular.

Com ele publiquei **11 sites de academias de luta** (jiu-jitsu, muay thai, boxe, karatê, MMA) em cidades diferentes, cada um com identidade própria a partir do logo do cliente. Os sites são prévias de prospecção: horários e preços que o cliente ainda não confirmou aparecem marcados como exemplo.

![Team Multi Fight MS](docs/multi-fight-ms.jpg)

| | |
|---|---|
| ![Koransel Muay Thai](docs/koransel-muay-thai.jpg) | ![Horse Muay Thai](docs/horse-muay-thai.jpg) |

**No ar:** [multi-fight-ms](https://multi-fight-ms.netlify.app) · [koransel-muay-thai](https://koransel-muay-thai.netlify.app) · [horse-muay-thai](https://horse-muay-thai.netlify.app) · [ct-acacio-karate](https://ct-acacio-karate.netlify.app) · [team-kamikaze-fight](https://team-kamikaze-fight.netlify.app) · [bareia-jiu-jitsu](https://bareia-jiu-jitsu.netlify.app)

## Problema

Fazer um site sob medida para cada prospect leva dias. Para prospectar academias em volume, eu precisava sair do logo do cliente para um site publicado em menos de uma hora, sem que os sites parecessem todos iguais.

## Como funciona

```
base/
  estilo-a.html      template "comércio de bairro" (fundo claro, faixa de cor sólida)
  estilo-c.html      template "loja/estúdio" (hero com foto em tela cheia e chips)
  gerar.js           injeta o CONFIG no template, gera o bloco de SEO e valida o JS
  conferir.js        mede a página em 375px e 390px com navegador headless
  configs/           configuração base de cada nicho
clientes/<slug>/
  config.js          dados do cliente (nome, cores, modalidades, horários, fotos, logo)
  index.html         página final gerada
```

```bash
node base/gerar.js clientes/koransel-muay-thai/config.js clientes/koransel-muay-thai/index.html
```

Decisões que valeram a pena:

- **Configuração separada do template.** Todo texto visível vem do `config.js`. Quando melhoro o template, regero as 11 páginas sem tocar nos dados de nenhum cliente.
- **SEO estático gerado no build.** O preview de link no WhatsApp não executa JavaScript, então `gerar.js` escreve `title`, `description` e Open Graph direto no HTML a partir do config.
- **Validação antes de salvar.** O gerador extrai os `<script>` da página e compila com `new Function` para que um erro de sintaxe no config não chegue ao ar.
- **Celular primeiro.** Barra fixa de Ligar/WhatsApp, hero em `100svh` e chips que trocam a foto de fundo, com `object-position` por foto para enquadrar imagem horizontal na tela vertical.
- **Variação por cliente.** Cor da marca, cor de texto sobre a marca (`corTexto`), logo recortado e redesenhado com Pillow, ordem das seções e fotos diferentes para clientes da mesma cidade.

## Stack

HTML, CSS e JavaScript puro · Node.js (gerador) · Python + Pillow (tratamento de logos) · Chrome headless (conferência visual) · Netlify

Feito por [Diego de Moraes](https://www.linkedin.com/in/euudm) na [Allaska](https://github.com/euudm).
