# Beella — site

Site estático (HTML/CSS/JS puro, sem build). Publicado via GitHub Pages.

## Trocar ou adicionar imagens

Todo arquivo de imagem fica em `assets/`. Pra trocar uma imagem:
1. No GitHub, abra o arquivo que quer substituir (ex: `assets/logo/mark-abelha.svg`).
2. Clique no lápis (editar) ou, pra trocar o arquivo inteiro, delete o antigo e faça upload do novo com o **mesmo nome** — assim o `index.html` continua apontando pro lugar certo.
3. Pra adicionar uma imagem nova: na pasta `assets/`, use **Add file → Upload files**, e depois referencie ela no `index.html` como `assets/nome-do-arquivo.jpg`.
4. Qualquer mudança cria um commit — o site atualiza sozinho em ~1 minuto.

## Conectar o formulário de lista de espera (Formspree)

O formulário em `index.html` (seção "Lista de espera") ainda aponta pra um endereço de exemplo. Pra ativar:
1. Crie uma conta grátis em [formspree.io](https://formspree.io) usando **beellaimagem@gmail.com**.
2. Crie um novo formulário (New Form) — ele gera um endereço tipo `https://formspree.io/f/abcdwxyz`.
3. No `index.html`, procure por `SEU_ID_AQUI` (dentro da tag `<form ... action="...">`) e troque pelo endereço gerado.
4. Pronto — cada envio chega por e-mail em beellaimagem@gmail.com, e também fica organizado no painel do Formspree.

## Publicar no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
3. Salve — o site fica em `https://greycielen.github.io/beella/` em alguns minutos.

## Ajustar o valor em euro pendente

No pacote "Experiência 360º", o valor em euro (`€ 960`) foi estimado seguindo a mesma proporção dos outros serviços — confirme ou ajuste em `index.html`, no atributo `data-eur` da `.pkg-value`.
