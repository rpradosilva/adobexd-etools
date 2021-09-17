// Código que pode ser executado quando a extensão for instalada, atualizada ou inicializada
// Estado e operações a longo prazo, independente do tempo de vida de qualquer página da web ou aba do navegador.

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: "http://www.google.com",
    });
  }
});
