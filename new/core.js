function insertElement(id, htmlTag, destinationClass, position) {
  let container = document.querySelector(destinationClass);
  let element = document.createElement(htmlTag);

  container.appendChild(element);
  element.setAttribute("id", id);

  if (position >= 0) {
    container.insertBefore(element, container.childNodes[position]);
  }
}

function insertText(id, textContent) {
  let container = document.querySelector(`#${id}`);
  container.innerHTML = textContent;
}

function insertAttr(id, attr, value) {
  let container = document.querySelector(`#${id}`);
  container.setAttribute(attr, value);
}
