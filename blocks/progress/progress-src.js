import "@udex/web-components/dist/ProgressBar.js";

export default function decorate(block) {
    let el = block;
    while (el.firstChildElement) {
      el = el.firstChildElement;
    }
    const progress = el.textContent;
    block.replaceChildren();
    const pBar = document.createElement('udex-progress-bar');
    pBar.setAttribute('value', 25);
    block.appendChild(pBar);
}