document.addEventListener(
  "click",
  function (event) {
    let identifyInviteButton = "[data-auto='inviteButton']";

    if (event.target.matches(identifyInviteButton)) {
      verifyLoadedModal();
    }
  },
  false
);

function createToolkit() {
  createToolkitArea();
  createToolkitTitle();
  createButtonContainer();
  createFilterButton();
  createFilterOptions();
  createCopyButton();
  createRemoveButton();

  let filter;

  let filterButton = document.querySelector("#select-button");
  filterButton.addEventListener("change", function () {
    let option = this.selectedOptions[0];
    let selectedOption = option.value;
    filterItems(selectedOption);
    return (filter = selectedOption);
  });

  let copyButton = document.querySelector("#button-copy");
  copyButton.addEventListener("click", function () {
    copyEmails(filter);
  });

  let removeButton = document.querySelector("#button-remove");
  removeButton.addEventListener("click", function () {
    let resultRemove = confirm("The emails will be removed. Please be right.");
    if (resultRemove == true) {
      removeEmails(filter);
      window.location.reload();
    }
  });
}
