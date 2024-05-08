// projeto/src/assets/carrossel/index.js

function importAll(r) {
  let imagens = {};
  r.keys().map((item, index) => { imagens[item.replace('./', '')] = r(item); });
  return imagens;
}

const imagens = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default imagens;
