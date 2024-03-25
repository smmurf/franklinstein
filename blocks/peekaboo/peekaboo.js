function peekABoo(e) {
  setTimeout(() => e.target.classList.removeClass('hidden'), 3000);
  e.target.classList.addClass('hidden');
}

export default async function decorate(block) {
  let el = block;
  while (el.firstChildElement) {
    el = el.firstChildElement;
  }
  const button = document.createElement('button');
  button.textContent = el.textContent;
  button.addEventListener('click', peekABoo);
  block.replaceChildren();
  block.appendChild(button);
}
