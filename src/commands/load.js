function loadExtension() {
  let listeningLoading = setInterval(inviteExist, 1000);
  let identifyCompleteLoad = ".ccx-ss-collaborators-list-header-container";

  async function inviteExist() {
    if (document.querySelectorAll(identifyCompleteLoad).length >= 1) {
      await readCollaborators();
      createToolkit();
      clearInterval(listeningLoading);
    }
  }
}
