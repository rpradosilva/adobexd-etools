// Código que pode ser executado quando a extensão for instalada, atualizada ou inicializada
// Estado e operações a longo prazo, independente do tempo de vida de qualquer página da web ou aba do navegador.
function injectedFunction() {
  document.querySelector("#container").style.backgroundColor = "orange";
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectedFunction,
  });
});
