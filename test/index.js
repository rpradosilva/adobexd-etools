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
