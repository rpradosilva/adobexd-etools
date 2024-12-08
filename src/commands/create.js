function createToolkit() {
  createArea();
  createFilterButton();
  createFilterOptions(collaborators);
  createCopyButton();
  createRemoveButton();
}

function createArea() {
  insertElement(
    "innerZoomElementWrapper",
    "div",
    ".ccx-ss-share-active-view",
    0
  );
  insertAttr(
    "innerZoomElementWrapper",
    "class",
    "ccx-ss-invite-footer-button-wrapper"
  );
  insertAttr(
    "innerZoomElementWrapper",
    "style",
    "display:flex;margin:16px 24px 24px 24px;gap:8px;"
  );
}

function createFilterButton() {
  insertElement("select-button", "select", "#innerZoomElementWrapper");
  insertAttr("select-button", "class", "spectrum-Textfield--quiet");
  insertElement("option-all", "option", "#select-button");
  insertAttr("option-all", "value", "");
  insertText("option-all", "All emails");
  insertAttr(
    "select-button",
    "style",
    "color: #505050; flex:2; margin-right:8px;"
  );

  filter = [];
  let filterButton = document.querySelector("#select-button");
  filterButton.addEventListener("change", function () {
    let option = this.selectedOptions[0];
    let selectedOption = option.value;
    filter = selectedOption;
    collaboratorsFilter(filter);
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
  insertElement("button-copy", "button", "#innerZoomElementWrapper");
  insertAttr(
    "button-copy",
    "class",
    "spectrum-Button spectrum-Button--primary"
  );
  insertElement("button-copy__text", "span", "#button-copy");
  insertAttr("button-copy__text", "class", "spectrum-Button-label");
  insertText("button-copy__text", "Copy");

  let copyButton = document.querySelector("#button-copy");
  copyButton.addEventListener("click", function () {
    copy(filter);
  });
}

function createRemoveButton() {
  insertElement("button-remove", "button", "#innerZoomElementWrapper");
  insertAttr(
    "button-remove",
    "class",
    "spectrum-Button spectrum-Button--warning"
  );
  insertElement("button-remove__text", "span", "#button-remove");
  insertAttr("button-remove__text", "class", "spectrum-Button-label");
  insertText("button-remove__text", "Remove");
  insertAttr("button-remove", "style", "margin-left:0px;");

  let removeButton = document.querySelector("#button-remove");
  removeButton.addEventListener("click", function () {
    remove(filter);
  });
}
