function readCollaborators() {
  const selectCollaborators = document.querySelectorAll(
    "[data-entity-type='collaborator']"
  );
  collaborators = [];

  for (const collaborator of selectCollaborators) {
    const email = collaborator
      .querySelector(".ccx-ss-user-card-details")
      .lastElementChild.textContent.toLowerCase();

    const domain = email.slice(email.indexOf("@"), email.length);

    const identifyPermissions = collaborator.querySelector(
      ".permissions-dropdown-container button"
    );

    if (identifyPermissions != null) {
      permission = "adm";
    } else {
      permission = "editor";
    }

    collaborators.push({ email, domain, permission });
  }
}
