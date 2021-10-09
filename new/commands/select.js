function selectEmails(filter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let emailsList = [];
      const usersList = document.querySelectorAll(
        "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details [aria-label]"
      );

      for (const user of usersList) {
        let email = user.getAttribute("aria-label");
        if (
          (email.indexOf("@") > 0 && email.indexOf(filter) > 0) ||
          (email.indexOf("@") > 0 && filter === undefined)
        ) {
          emailsList.push(sanitizeEmails(email));
        }
      }
      resolve(emailsList);
    }, 5000);
  });
}

function sanitizeEmails(email) {
  return email.slice(0, email.length - 1).toLowerCase();
}
