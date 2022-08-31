function removeEmails(filter) {
  const emailsList = selectEmails(filter);
  const collaborators = document.querySelectorAll(
    "[data-entity-type='collaborator']"
  );

  for (const collaborator of collaborators) {
    const permissions = collaborator.querySelector(
      ".permissions-dropdown-container"
    );
    let userAction;
    let collaboratorEmail = collaborator
      .querySelector("[aria-label]")
      .textContent.toLowerCase();

    for (const emailSelected of emailsList) {
      if (emailSelected.toLowerCase() == collaboratorEmail) {
        if (permissions != null) {
          userAction = collaborator.lastElementChild.querySelector("button");
          userAction.click();

          let removeCollaborator = document.querySelectorAll(
            ".spectrum-Menu-item"
          );
          removeCollaborator[2].click();
        } else {
          userAction = collaborator.lastElementChild
            .querySelector("button")
            .click();
        }
      }
    }
  }
}
