function toClipboard() {
  let copyText = document.getElementById("emails-placeholder");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function createEmailPlaceholder(emailsList) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      insertElement(
        "emails-placeholder",
        "input",
        "[data-auto='inviteContainer']"
      );
      insertAttr("emails-placeholder", "value", emailsList);
      insertAttr("emails-placeholder", "style", "user-select: all;");

      resolve();
    }, 5000);
  });
}
