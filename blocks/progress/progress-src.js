import "@udex/web-components/dist/ProgressBar.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

export default function decorate(block) {
    let el = block;
    while (el.firstChildElement) {
      el = el.firstChildElement;
    }
    const progress = el.textContent;
    block.replaceChildren();
    const pBar = document.createElement('udex-progress-bar');
    pBar.setAttribute('value', progress);
    pBar.setAttribute('value-state', 'Information');
    block.appendChild(pBar);
}