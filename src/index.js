import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['やっはろー', 'webpack'], ' ');

  return element;
}

const parent = document.getElementById('app');
parent.appendChild(component());
