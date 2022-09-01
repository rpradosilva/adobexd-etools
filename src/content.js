let collaborators = [];
let filter = "";

document.addEventListener(
  "click",
  function (event) {
    let identifyInviteButton = "[data-auto='inviteButton']";

    if (event.target.matches(identifyInviteButton)) {
      loadExtension();
    }
  },
  false
);

function loadExtension() {
  let listeningLoading = setInterval(inviteExist, 1000);
  let identifyCompleteLoad = ".ccx-ss-collaborators-list-header-container";

  async function inviteExist() {
    if (document.querySelectorAll(identifyCompleteLoad).length >= 1) {
      readCollaborators();
      createToolkit();
      clearInterval(listeningLoading);
      return collaborators;
    }
  }
}
