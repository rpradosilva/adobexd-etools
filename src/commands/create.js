function createToolkit() {
  createArea();
  createContainer();
  createFilterButton();
  createFilterOptions(collaborators);
  createCopyButton();
  createRemoveButton();
}

function createArea() {
  insertElement("toolkit-area", "div", ".ccx-ss-share-active-view", 0);
  insertAttr("toolkit-area", "class", "ccx-ss-invite-footer-button-wrapper");
  insertAttr(
    "toolkit-area",
    "style",
    "display: flex; border-radius: 4px; width: 100%; padding: 0px 16px; margin: 0px 0px 8px 0px;"
  );
}

function createContainer() {
  insertElement("button-container", "div", "#toolkit-area");
  insertAttr("button-container", "class", "ccx-ss-invite-footer-cta-container");
  insertAttr("button-container", "style", "display: flex; width: 100%; ");
}

function createFilterButton() {
  insertElement("select-button", "select", "#button-container");
  insertAttr(
    "select-button",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertElement("option-all", "option", "#select-button");
  insertAttr("option-all", "value", "");
  insertText("option-all", "Filter by All");

  let filterButton = document.querySelector("#select-button");
  filterButton.addEventListener("change", function () {
    let option = this.selectedOptions[0];
    let selectedOption = option.value;
    filter = selectedOption;
  });
}

function createFilterOptions() {
  let allCompanies = [];

  for (const collaborator of collaborators) {
    allCompanies.push(collaborator.domain);
  }

  let companies = [...new Set(allCompanies)];
  for (const company of companies) {
    insertElement(
      `option-item-${companies.indexOf(company)}`,
      "option",
      "#select-button"
    );
    insertAttr(
      `option-item-${companies.indexOf(company)}`,
      "value",
      `${company}`
    );
    insertText(`option-item-${companies.indexOf(company)}`, `${company}`);
  }
}

function createCopyButton() {
  insertElement("button-copy", "button", "#button-container");
  insertAttr(
    "button-copy",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertElement("button-copy__text", "span", "#button-copy");
  insertAttr("button-copy__text", "class", "spectrum-ActionButton-label");
  insertText("button-copy__text", "Copy");

  let copyButton = document.querySelector("#button-copy");
  copyButton.addEventListener("click", function () {
    copy(filter);
  });
}

function createRemoveButton() {
  insertElement("button-remove", "button", "#button-container");
  insertAttr(
    "button-remove",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertElement("button-remove__text", "span", "#button-remove");
  insertAttr("button-remove__text", "class", "spectrum-ActionButton-label");
  insertText("button-remove__text", "Remove");

  let removeButton = document.querySelector("#button-remove");
  removeButton.addEventListener("click", function () {
    remove(filter);
  });
}
