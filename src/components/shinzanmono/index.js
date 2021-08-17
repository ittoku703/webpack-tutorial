import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title)
console.log(toml.owner.name)

console.log(yaml.title)
console.log(yaml.owner.name)

console.log(json.title)
console.log(json.owner.name)

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['やっはろー', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

const parent = document.getElementById('app');
parent.appendChild(component());
