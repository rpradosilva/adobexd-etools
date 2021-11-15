function insertElement(id, htmlTag, destinationClass, position) {
  let container = document.querySelector(destinationClass);
  let element = document.createElement(htmlTag);

  container.appendChild(element);
  element.setAttribute("id", id);

  if (position >= 0) {
    container.insertBefore(element, container.childNodes[position]);
  }
}

function insertText(destinationId, text) {
  let container = document.querySelector(`#${destinationId}`);
  container.innerHTML = text;
}

function insertAttr(destinationId, attr, value) {
  let container = document.querySelector(`#${destinationId}`);
  container.setAttribute(attr, value);
}

function removeElement(id, location) {
  let container = document.querySelector(location);
  let element = document.querySelector(id);

  container.removeChild(element);
}
