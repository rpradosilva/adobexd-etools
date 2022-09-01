function remove(filter) {
  confirm("The emails will be removed. Please be right.");

  for (const collaborator of collaborators) {
    if (collaborator.email.includes(filter)) {
    }
  }
  console.log(filter);
  // window.location.reload();
}
