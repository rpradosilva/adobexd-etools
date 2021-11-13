async function removeEmails(filter) {
  const emailsList = await selectEmails(filter);
  for (const email of emailsList) {
    document.querySelector("[aria-label='rprado.silva@outlook.com.']");
    const usersList = document.querySelectorAll(
      "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details [aria-label]"
    ); // identificar qual clicar

    if (userlist) {
    }
  }
}

function removeEmails() {
  const inviteUsers = document.querySelectorAll(
    "[data-auto='inviteContainer'] .permissions-dropdown-container [aria-haspopup='listbox']"
  );

  for (const user of inviteUsers) {
    user.click();
    removeAction();
  }
}

function removeAction() {
  let dropButtons = document.querySelectorAll(".spectrum-Menu-item");
  dropButtons[2].click();
}

removeEmails();
