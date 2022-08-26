function createToolkitArea() {
  insertElement("toolkit-area", "div", ".ccx-ss-share-active-view", 0);
  insertAttr("toolkit-area", "class", "ccx-ss-invite-footer-button-wrapper");
  insertAttr(
    "toolkit-area",
    "style",
    "background: rgba(50, 50, 50, 0.04); border-radius: 4px; width: 100%; padding: 16px; margin: 0px 0px 8px 0px;"
  );
}

function createToolkitTitle() {
  insertElement("toolkit-title", "h3", "#toolkit-area");
  insertText("toolkit-title", "Toolkit for Emails");
  insertAttr(
    "toolkit-title",
    "style",
    "font-size: 12px; font-weight: normal; color: #959595; padding: 0px; margin: 0px 0px 8px 0px;"
  );
}

function createButtonContainer() {
  insertElement("button-container", "div", "#toolkit-area");
  insertAttr("button-container", "class", "ccx-ss-invite-footer-cta-container");
  insertAttr("button-container", "style", "justify-content: flex-start;");
}

function createFilterButton() {
  insertElement("select-button", "select", "#button-container");
  insertAttr(
    "select-button",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertAttr("select-button", "style", "width: 100%; margin: 0 0 8px 0;");
  insertElement("option-all", "option", "#select-button");
  insertAttr("option-all", "value", "");
  insertText("option-all", "Filter by All");
}

function createFilterOptions() {
  const emailsList = selectEmails();
  const allCompanies = selectCompanies(emailsList);
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
    insertText(
      `option-item-${companies.indexOf(company)}`,
      `Filter by ${company}`
    );
  }
}

function createCopyButton() {
  insertElement("button-copy", "button", "#button-container");
  insertAttr(
    "button-copy",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertAttr("button-copy", "style", "margin: 0px 8px 8px 0px;");
  insertElement("button-copy__text", "span", "#button-copy");
  insertAttr("button-copy__text", "class", "spectrum-ActionButton-label");
  insertText("button-copy__text", "Copy All");
}

function createRemoveButton() {
  insertElement("button-remove", "button", "#button-container");
  insertAttr(
    "button-remove",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertAttr("button-remove", "style", "margin: 0px 8px 8px 0px;");
  insertElement("button-remove__text", "span", "#button-remove");
  insertAttr("button-remove__text", "class", "spectrum-ActionButton-label");
  insertText("button-remove__text", "Remove All");
}
