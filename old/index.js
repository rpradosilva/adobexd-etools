let collaborators = [];

document.addEventListener(
  "click",
  function (event) {
    let identifyInviteButton = "[data-auto='inviteButton']";

    if (event.target.matches(identifyInviteButton)) {
      console.log("clicou");
    }
  },
  false
);
