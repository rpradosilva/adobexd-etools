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

function createToolkit() {
  createToolkitArea();
  createToolkitTitle();
  createButtonContainer();
  createFilterButton();
  createCopyButton();
  createRemoveButton();

  let filter;

  let filterButton = document.querySelector("#select-button");
  filterButton.addEventListener("change", function () {
    let option = this.selectedOptions[0];
    let value = option.value;

    let copyButtonText = document.querySelector("#button-copy span");
    let removeButtonText = document.querySelector("#button-remove span");

    if (value != "") {
      copyButtonText.innerHTML = `Copy ${value}`;
      removeButtonText.innerHTML = `Remove ${value}`;
    } else {
      copyButtonText.innerHTML = "Copy All";
      removeButtonText.innerHTML = "Remove All";
    }

    return (filter = value);
  });

  let copyButton = document.querySelector("#button-copy");
  copyButton.addEventListener("click", function () {
    function copyEmails(selection) {
      selection = filter;
      const emailsList = selectEmails(selection);
      createEmailPlaceholder(emailsList);
      copyToClipboard(emailsList);
      removeElement("#emails-placeholder", "[data-auto='inviteContainer']");
    }
    copyEmails();
  });

  let removeButton = document.querySelector("#button-remove");
  removeButton.addEventListener("click", function () {
    let resultRemove = confirm("The emails will be removed. Please be right.");
    if (resultRemove == true) {
      selection = filter;
      removeEmails(filter);
    }
  });

  function selectEmails(filter) {
    let emailsList = [];
    const usersList = document.querySelectorAll(
      "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details [aria-label]"
    );

    for (const user of usersList) {
      let email = user.getAttribute("aria-label");
      if (
        (email.indexOf("@") > 0 && email.indexOf(filter) > 0) ||
        (email.indexOf("@") > 0 && filter === undefined) ||
        (email.indexOf("@") > 0 && filter === "")
      ) {
        emailsList.push(sanitizeEmails(email));
      }
    }
    return emailsList;
  }

  function sanitizeEmails(email) {
    return email.slice(0, email.length - 1).toLowerCase();
  }

  function copyToClipboard(emailsList) {
    var emails = document.getElementById("emails-placeholder");
    emails.select();
    emails.setSelectionRange(0, 99999);
    document.execCommand("copy");
    navigator.clipboard.writeText(emails.value);
    alert(`${emailsList.length} e-mails copied to clipboard`);
  }

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

  function removeEmails(filter) {
    const emailsList = selectEmails(filter);
    const usersItem = document.querySelectorAll(
      "[data-entity-type='collaborator']"
    );

    for (const userItem of usersItem) {
      let userInfos = userItem.firstElementChild;
      let userDetails = userInfos.querySelector(".ccx-ss-user-card-details");
      let emailUsers = userDetails.querySelectorAll("[aria-label]");

      for (const emailUser of emailUsers) {
        for (const emailSelected of emailsList) {
          if (emailSelected == emailUser.textContent) {
            let rightColumn = userItem.lastElementChild;
            let removeButton = rightColumn.querySelector("button");
            if (removeButton != null) {
              removeButton.click();
              removeAction();
            }
          }
        }
      }
    }
  }
  function removeAction() {
    let dropButtons = document.querySelectorAll(".spectrum-Menu-item");
    dropButtons[2].click();
  }
}

function createToolkitArea() {
  insertElement("toolkit-area", "div", ".ccx-ss-share-invite", 2);
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
  const emailList = selectEmails();
  const allDomains = selectDomains(emailList);
  let domains = allDomains;
  let uniqueDomains = [...new Set(domains)];

  for (const domain of uniqueDomains) {
    insertElement(
      `option-item-${uniqueDomains.indexOf(domain)}`,
      "option",
      "#select-button"
    );
    insertAttr(
      `option-item-${uniqueDomains.indexOf(domain)}`,
      "value",
      `${domain}`
    );
    insertText(
      `option-item-${uniqueDomains.indexOf(domain)}`,
      `Filter by ${domain}`
    );
  }
}

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

function sanitizeEmails(email) {
  return email.slice(0, email.length - 1).toLowerCase();
}

function selectDomains(emailsList) {
  let domainsList = [];
  for (const domain of emailsList) {
    let company = domain.slice(domain.indexOf("@") + 1);
    domainsList.push(company.slice(0, company.indexOf(".")));
  }
  return domainsList;
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
