import axios from 'axios';

const createHero = () =>
  axios.get('https://codepen.io/loomernescent/pen/LRGRaB.js').then(({ data }) => data);

export default createHero;
