export default async function decorate(block) {
  let el = block;
  while (el.firstChildElement) {
    el = el.firstChildElement;
  }
  const button = document.createElement('button');
  button.textContent = el.textContent;
  while (block.firstChild) {
    block.removeChild(block.firstChild)
  }
  block.appendChild(button);
}
