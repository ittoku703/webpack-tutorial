async function getComponent() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  const { default: _ } = await import('lodash');

  p.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.appendChild(p);

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
