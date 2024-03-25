export default async function decorate(block) {
  let el = block;
  while (el.firstChildElement) {
    el = el.firstChildElement;
  }
  const button = document.createElement('button');
  button.textContent = el.textContent;
  block.replaceChildren();
  block.appendChild(button);
}
