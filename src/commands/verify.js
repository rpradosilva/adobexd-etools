function verifyLoadedModal() {
  let listeningLoading = setInterval(inviteExist, 1000);
  let identifyCompleteLoad = ".ccx-ss-collaborators-list-header-container";

  function inviteExist() {
    if (document.querySelectorAll(identifyCompleteLoad).length >= 1) {
      createToolkit();
      clearInterval(listeningLoading);
    }
  }
}
