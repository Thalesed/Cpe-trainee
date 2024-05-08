// projeto/src/assets/carrossel/index.js

const imagens = {};

// Importa todas as imagens do diretório
const arquivosImagens = require.context('./', false, /\.(png|jpe?g|svg)$/);
arquivosImagens.keys().forEach((caminhoArquivo) => {
  const nomeImagem = caminhoArquivo.replace(/^\.\/(.*)\.\w+$/, '$1');
  imagens[nomeImagem] = arquivosImagens(caminhoArquivo).default;
});

export default imagens;

