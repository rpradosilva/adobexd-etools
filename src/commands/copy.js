function copyEmails(filter) {
  const emailsList = selectEmails(filter);

  createEmailPlaceholder(emailsList);
  copyToClipboard(emailsList);
  removeElement("#emails-placeholder", "[data-auto='inviteContainer']");
}

function createEmailPlaceholder(emailsList) {
  let emails = emailsList.toString();

  insertElement("emails-placeholder", "input", "[data-auto='inviteContainer']");
  insertAttr("emails-placeholder", "value", emails);
  insertAttr("emails-placeholder", "style", "user-select: all;");
}

function copyToClipboard(emailsList) {
  var emails = document.getElementById("emails-placeholder");

  emails.select();
  emails.setSelectionRange(0, 99999);
  document.execCommand("copy");
  navigator.clipboard.writeText(emails.value);
  alert(`${emailsList.length} e-mails copied to clipboard`);
}
