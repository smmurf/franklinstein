function peekABoo(e) {
  setTimeout(() => e.target.classList.remove('hidden'), 3000);
  e.target.classList.add('hidden');
}

export default async function decorate(block) {
  let el = block;
  while (el.firstChildElement) {
    el = el.firstChildElement;
  }
  const button = document.createElement('button');
  button.textContent = el.textContent;
  button.addEventListener('click', peekABoo, {passive: true});
  block.replaceChildren();
  block.appendChild(button);
}
