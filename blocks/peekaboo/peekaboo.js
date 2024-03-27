function peekABoo(e) {
  setTimeout(() => e.target.classList.remove('pkb-hidden'), 3000);
  e.target.classList.add('pkb-hidden');
}

export default async function decorate(block) {
  let el = block;
  while (el.firstChildElement) {
    el = el.firstChildElement;
  }
  const button = document.createElement('udex-button');
  button.setAttribute('size', 'Medium');
  button.setAttribute('icon', 'sap-icon://action');
  button.setAttribute('design', 'Primary');
  button.textContent = el.textContent;
  button.addEventListener('click', peekABoo, { passive: true });
  block.replaceChildren();
  block.appendChild(button);
}
