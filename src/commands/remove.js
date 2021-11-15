function removeEmails(filter) {
  const emailsList = selectEmails(filter);
  const usersItem = document.querySelectorAll(
    "[data-entity-type='collaborator']"
  );

  for (const userItem of usersItem) {
    let userInfos = userItem.firstElementChild;
    let userDetails = userInfos.querySelector(".ccx-ss-user-card-details");
    let userFields = userDetails.querySelectorAll("[aria-label]");

    for (const userEmail of userFields) {
      for (const emailSelected of emailsList) {
        if (emailSelected == userEmail.textContent) {
          let userAction = userItem.lastElementChild;
          let dropdownButton = userAction.querySelector("button");
          if (dropdownButton != null) {
            dropdownButton.click();
            let dropdownItem = document.querySelectorAll(".spectrum-Menu-item");
            dropdownItem[2].click();
          }
        }
      }
    }
  }
}
