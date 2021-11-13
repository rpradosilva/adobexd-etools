function copyToClipboard() {
  var emails = document.getElementById("emails-placeholder");
  emails.select();
  emails.setSelectionRange(0, 99999);
  document.execCommand("copy");
  navigator.clipboard.writeText(emails.value);
  alert("ok"); // copiar só funciona pq o alerta está focando na página verificar como estilizar o alert
}

function createEmailPlaceholder(emailsList) {
  let emails = emailsList.toString();
  return new Promise((resolve, reject) => {
    insertElement(
      "emails-placeholder",
      "input",
      "[data-auto='inviteContainer']"
    );
    insertAttr("emails-placeholder", "value", emails);
    insertAttr("emails-placeholder", "style", "user-select: all;");
    resolve();
  });
}
