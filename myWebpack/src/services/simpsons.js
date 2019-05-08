import axios from 'axios';

const getSimpsons = () =>
  axios('https://codepen.io/loomernescent/pen/LRGRaB.js').then(({ data }) => data);

export default getSimpsons;
