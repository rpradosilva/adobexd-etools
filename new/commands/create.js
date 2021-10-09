function createToolkitArea() {
  insertElement("toolkit-area", "div", ".ccx-ss-invite-wrapper", 2);
  insertAttr("toolkit-area", "class", "ccx-ss-invite-footer-button-wrapper");
  insertAttr(
    "toolkit-area",
    "style",
    "background: rgba(50, 50, 50, 0.04); padding-top: 8px; padding-bottom: 8px; margin-top: 16px;"
  );
}

function createToolkitTitle() {
  insertElement("toolkit-title", "h3", "#toolkit-area");
  insertText("toolkit-title", "Toolkit for Emails");
  insertAttr(
    "toolkit-title",
    "style",
    "font-size: var(--ccx-share-sheet-font-size-xmd); font-weight: var(--ccx-share-sheet-font-weight-normal); color: #747474; line-height: 1.3; font-style: normal; letter-spacing: 0; text-transform: none; margin-bottom: 16px; margin-top: 8px;"
  );
}

function createButtonContainer() {
  insertElement("button-container", "div", "#toolkit-area");
  insertAttr("button-container", "class", "ccx-ss-invite-footer-cta-container");
  insertAttr("button-container", "style", "justify-content: flex-start;");
}

function createFilterButton() {
  insertElement("dropdown-button", "button", "#button-container");
  insertAttr(
    "dropdown-button",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertAttr("dropdown-button", "onclick", "filterEmails()");
  insertElement("dropdown-button__ico", "img", "#dropdown-button");
  insertAttr(
    "dropdown-button__ico",
    "src",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgd2lkdGg9IjE4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmEgewogICAgICAgIGZpbGw6ICM2RTZFNkU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0aXRsZT5TIENoZXZyb25Eb3duIDE4IE48L3RpdGxlPgogIDxyZWN0IGlkPSJDYW52YXMiIGZpbGw9IiNmZjEzZGMiIG9wYWNpdHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgLz48cGF0aCBjbGFzcz0iYSIgZD0iTTQsNy4wMWExLDEsMCwwLDEsMS43MDU1LS43MDU1bDMuMjg5LDMuMjg2LDMuMjg5LTMuMjg2YTEsMSwwLDAsMSwxLjQzNywxLjM4NjVsLS4wMjQ1LjAyNDVMOS43LDExLjcwNzVhMSwxLDAsMCwxLTEuNDEyNSwwTDQuMjkzLDcuNzE2QS45OTQ1Ljk5NDUsMCwwLDEsNCw3LjAxWiIgLz4KPC9zdmc+"
  );
  insertAttr(
    "dropdown-button__ico",
    "class",
    "spectrum-Icon spectrum-Icon--sizeS"
  );
  insertElement("dropdown-button__text", "span", "#dropdown-button");
  insertAttr("dropdown-button__text", "class", "spectrum-ActionButton-label");
  insertAttr("dropdown-button__text", "style", "padding-left: 4px;");
  insertText("dropdown-button__text", "Filter by All");
}

function createCopyButton() {
  insertElement("button-copy", "button", "#button-container");
  insertAttr(
    "button-copy",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
  insertAttr("button-copy", "onclick", "copyEmails()");
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
  insertAttr("button-remove", "onclick", "removeEmails()");
  insertElement("button-remove__text", "span", "#button-remove");
  insertAttr("button-remove__text", "class", "spectrum-ActionButton-label");
  insertText("button-remove__text", "Remove All");
}
