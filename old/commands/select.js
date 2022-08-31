function selectEmails(filter) {
  let emailsList = [];
  const usersList = document.querySelectorAll(
    "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details [aria-label]"
  );

  for (const user of usersList) {
    let email = user.getAttribute("aria-label").toLowerCase();

    if (
      (email.indexOf("@") > 0 && email.indexOf(filter) >= 0) ||
      (email.indexOf("@") > 0 && filter === undefined) ||
      (email.indexOf("@") > 0 && filter === "")
    ) {
      emailsList.push(sanitizeEmails(email));
    }
  }

  function sanitizeEmails(email) {
    let emailSanitazed = email.slice(0, email.length - 1).toLowerCase();
    return emailSanitazed;
  }

  return emailsList;
}

function selectCompanies(emailsList) {
  let companies = [];
  for (const domain of emailsList) {
    let company = sanitazeCompany(domain);
    companies.push(company);
  }

  function sanitazeCompany(domain) {
    let companyDomain = domain.slice(domain.indexOf("@"), domain.length);
    return companyDomain;
  }

  return companies;
}
