function copy(filter) {
  let selectedEmails = [];
  let inputElement = document.createElement("input");

  for (const collaborator of collaborators) {
    if (collaborator.email.includes(filter)) {
      selectedEmails.push(collaborator.email);
    }
  }

  inputElement.value = selectedEmails;
  document.body.appendChild(inputElement);
  inputElement.select();
  inputElement.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputElement.value);
  navigator.clipboard.writeText(selectedEmails);
  inputElement.remove();

  alert(`${selectedEmails.length} e-mails copied to clipboard`);
}
