function filterItems(selectedOption) {
  let copyButtonText = document.querySelector("#button-copy span");
  let removeButtonText = document.querySelector("#button-remove span");

  if (selectedOption != "") {
    copyButtonText.innerHTML = `Copy only ${selectedOption}`;
    removeButtonText.innerHTML = `Remove only ${selectedOption}`;
  } else {
    copyButtonText.innerHTML = "Copy All";
    removeButtonText.innerHTML = "Remove All";
  }
}
