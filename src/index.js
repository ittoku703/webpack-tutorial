import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  p.innerHTML = _.join(['やっはろー', 'Webpack'], ' ');

  btn.innerHTML = 'ここを押すとログが出るよ！';
  btn.onclick = printMe;

  element.appendChild(p);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
