// import 'normalize.css';
import './styles.css';
import './sass/test.scss';
import weatherData from './services/api';
import * as storage from './services/storage';

import articleTpl from './templates/article.hbs';

const myArticle = articleTpl({ title: 'webpack', text: 'you have to buy sumsung' });
console.log(myArticle);
weatherData('Lviv');
console.log(storage);
alert('dscdsc');

const fn = () => console.log('sdcd');
