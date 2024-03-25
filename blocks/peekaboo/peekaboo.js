export default async function decorate(block) {
  let el = block;
  while (el.firstChildElement) {
    el = el.firstChildElement;
  }
  let button = document.createElement('button');
  button.textContent = el.textContent;
  el.appendChild(button);
}
