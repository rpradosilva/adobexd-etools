/////////////////////////////////////////////////////
//// identify when open or closed invite modal
/////////////////////////////////////////////////////
document.addEventListener(
  "click",
  function (event) {
    let identifyInviteButton = "[data-auto='inviteButton']";

    if (event.target.matches(identifyInviteButton)) {
      verifyLoadedModal();
    }
  },
  false
);

/////////////////////////////////////////////////////
//// identify complete load invite modal
/////////////////////////////////////////////////////
function verifyLoadedModal() {
  let listeningLoading = setInterval(inviteExist, 1000);
  let identifyCompleteLoad = ".ccx-ss-collaborators-list-header-container";

  function inviteExist() {
    if (document.querySelectorAll(identifyCompleteLoad).length >= 1) {
      createToolkit();
      clearInterval(listeningLoading);
    }
  }
}

/////////////////////////////////////////////////////
//// create toolkit
/////////////////////////////////////////////////////
function createToolkit() {
  createToolkitArea();
  createToolkitTitle();
  createButtonContainer();
  // createFilterButton();
  createCopyButton();
  createRemoveButton();

  // let filterButton = document.querySelector("#dropdown-button");
  // filterButton.addEventListener("click", function () {
  //   console.log("filter button");
  // });

  let copyButton = document.querySelector("#button-copy");
  copyButton.addEventListener("click", function () {
    function copyEmails(filter) {
      const emailsList = selectEmails(filter);
      createEmailPlaceholder(emailsList);
      copyToClipboard(emailsList);
      removeElement("#emails-placeholder", "[data-auto='inviteContainer']");
    }
    copyEmails();
  });

  let removeButton = document.querySelector("#button-remove");
  removeButton.addEventListener("click", function () {
    let resultRemove = confirm("All emails will be removed. Please be right.");
    if (resultRemove == true) {
      removeEmails();
    }
  });

  /////////////////////////////////////////////////////
  //// Select emails
  /////////////////////////////////////////////////////
  function selectEmails(filter) {
    let emailsList = [];
    const usersList = document.querySelectorAll(
      "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details [aria-label]"
    );

    for (const user of usersList) {
      let email = user.getAttribute("aria-label");
      if (
        (email.indexOf("@") > 0 && email.indexOf(filter) > 0) ||
        (email.indexOf("@") > 0 && filter === undefined)
      ) {
        emailsList.push(sanitizeEmails(email));
      }
    }
    return emailsList;
  }

  /////////////////////////////////////////////////////
  //// Sanitize emails
  /////////////////////////////////////////////////////
  function sanitizeEmails(email) {
    return email.slice(0, email.length - 1).toLowerCase();
  }

  /////////////////////////////////////////////////////
  //// toClipboard
  /////////////////////////////////////////////////////
  function copyToClipboard(emailsList) {
    var emails = document.getElementById("emails-placeholder");
    emails.select();
    emails.setSelectionRange(0, 99999);
    document.execCommand("copy");
    navigator.clipboard.writeText(emails.value);
    alert(`${emailsList.length} e-mails copied to clipboard`);
    // copiar só funciona pq o alerta está focando na página verificar como estilizar o alert
  }

  /////////////////////////////////////////////////////
  //// Placeholder to copy
  /////////////////////////////////////////////////////
  function createEmailPlaceholder(emailsList) {
    let emails = emailsList.toString();

    insertElement(
      "emails-placeholder",
      "input",
      "[data-auto='inviteContainer']"
    );
    insertAttr("emails-placeholder", "value", emails);
    insertAttr("emails-placeholder", "style", "user-select: all;");
  }

  /////////////////////////////////////////////////////
  //// Remove emails function
  /////////////////////////////////////////////////////
  function removeEmails() {
    const inviteUsers = document.querySelectorAll(
      "[data-auto='inviteContainer'] .permissions-dropdown-container [aria-haspopup='listbox']"
    );

    for (const user of inviteUsers) {
      user.click();
      removeAction();
    }
  }
  function removeAction() {
    let dropButtons = document.querySelectorAll(".spectrum-Menu-item");
    dropButtons[2].click();
  }
}

/////////////////////////////////////////////////////
//// create elements
/////////////////////////////////////////////////////
function createToolkitArea() {
  insertElement("toolkit-area", "div", ".ccx-ss-share-invite", 2);
  insertAttr("toolkit-area", "class", "ccx-ss-invite-footer-button-wrapper");
  insertAttr(
    "toolkit-area",
    "style",
    "background: rgba(50, 50, 50, 0.04); border-radius: 4px; width: 100%; padding: 16px; margin: 0px 0px 16px 0px;"
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
  insertElement("dropdown-button", "button", "#button-container");
  insertAttr(
    "dropdown-button",
    "class",
    "spectrum-ActionButton spectrum-ActionButton--sizeM"
  );
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
  insertElement("button-remove__text", "span", "#button-remove");
  insertAttr("button-remove__text", "class", "spectrum-ActionButton-label");
  insertText("button-remove__text", "Remove All");
}

/////////////////////////////////////////////////////
//// core structure elements
/////////////////////////////////////////////////////
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
