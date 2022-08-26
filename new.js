function readCollaborators() {
  const collaborators = document.querySelectorAll(
    "[data-entity-type='collaborator']"
  );
  let emailList = [];
  let companies = [];

  for (const collaborator of collaborators) {
    const email = collaborator
      .querySelector(".ccx-ss-user-card-details")
      .lastElementChild.textContent.toLowerCase();

    const domain = email.slice(email.indexOf("@"), email.length);

    const permissions = collaborator.querySelector(
      ".permissions-dropdown-container button"
    );

    emailList.push(email);
    companies.push(domain);
  }

  console.log(emailList, companies);
}

// Verifica se é ADM ou editor
//   if (permissions != null) {
//   }
