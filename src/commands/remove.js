function remove(filter) {
  const selectCollaborators = document.querySelectorAll(
    "[data-entity-type='collaborator']"
  );
  confirm("The emails will be removed. Please be right.");

  for (const collaborator of collaborators) {
    let isOwner =
      selectCollaborators[
        collaborators.indexOf(collaborator)
      ].lastElementChild.className.indexOf("owner");

    let isYou = document
      .querySelectorAll(".ccx-ss-user-name")
      [collaborators.indexOf(collaborator)].textContent.indexOf("(");

    if (isOwner < 0 && isYou < 0) {
      if (collaborator.email.includes(filter)) {
        selectCollaborators[
          collaborators.indexOf(collaborator)
        ].lastElementChild
          .querySelector("button")
          .click();

        if (collaborator.permission == "adm") {
          document.querySelectorAll(".spectrum-Menu-item")[2].click();
        }
      }
    }
  }

  window.location.reload();
}
