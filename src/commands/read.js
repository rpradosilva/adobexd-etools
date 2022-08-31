async function readCollaborators() {
  const selectCollaborators = document.querySelectorAll(
    "[data-entity-type='collaborator']"
  );

  for (const collaborator of selectCollaborators) {
    const email = collaborator
      .querySelector(".ccx-ss-user-card-details")
      .lastElementChild.textContent.toLowerCase();

    const domain = email.slice(email.indexOf("@"), email.length);

    const identifyPermissions = collaborator.querySelector(
      ".permissions-dropdown-container button"
    );

    let permission;
    if (identifyPermissions != null) {
      permission = "editor";
    } else {
      permission = "adm";
    }

    collaborators.push({ email, domain, permission });
  }
}
