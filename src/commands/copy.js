function copy(filter) {
  let selectedEmails = [];

  for (const collaborator of collaborators) {
    if (collaborator.email.includes(filter)) {
      selectedEmails.push(collaborator.email);
    }
  }

  navigator.clipboard.writeText(selectedEmails);
  alert(`${selectedEmails.length} e-mails copied to clipboard`);
}
