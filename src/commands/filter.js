function collaboratorsFilter(filter) {
  const CollaboratorsElements = document.querySelectorAll(
    "[data-entity-type='collaborator']"
  );

  for (const collaborator of collaborators) {
    CollaboratorsElements[collaborators.indexOf(collaborator)].style.display =
      "none";

    if (collaborator.email.includes(filter)) {
      CollaboratorsElements[collaborators.indexOf(collaborator)].style.display =
        "flex";
    }
  }
}
