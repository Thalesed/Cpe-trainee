// src/utils/imageImporter.js

export const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/carrossel', false, /\.(png|jpe?g|svg)$/));



