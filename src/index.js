// Criar botão de copiar
function copyUI() {
  const sectionPosition = document.querySelector(
    ".ccx-ss-invite-footer-button-wrapper"
  );
  const buttonElement = document.createElement("BUTTON");
  sectionPosition.appendChild(buttonElement);
  buttonElement.setAttribute("class", "spectrum-Button spectrum-Button--cta");
  buttonElement.setAttribute("onclick", "selectEmails()");
  const spanElement = document.createElement("span");
  buttonElement.appendChild(spanElement);
  spanElement.innerHTML = "Copiar Emails";
}

// Selecionar e Armazenar lista de emails (deve executar após a renderização dos dados)
let emailsList = [];

function selectEmails() {
  const inviteUsers = document.querySelectorAll(
    "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details [aria-label]"
  );
  const countUsers = document.querySelectorAll(
    "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details"
  );
  console.log(`Foram copiados: ${countUsers.length} e-mails`);

  for (const user of inviteUsers) {
    if (user.getAttribute("aria-label").indexOf("@") > 0) {
      emailsList.push(sanitizeEmails(user.getAttribute("aria-label")));
    }
  }
  emaislToCopy();
  toClipboard();
}

// Sanitizar dados
function sanitizeEmails(email) {
  let userEmail = email.toString();
  return userEmail.slice(0, userEmail.length - 1).toLowerCase();
}

// Criar elemento para receber os e-mails
function emaislToCopy() {
  const mainPage = document.querySelector("[data-auto='inviteContainer']");
  const inputElement = document.createElement("input");
  mainPage.appendChild(inputElement);
  inputElement.setAttribute("id", "receiveEmails");
  inputElement.setAttribute(
    "style",
    "overflow: hidden; z-index: -99999999; font-size:1px; color:white; border:none; outline:none; text-decoration:none;"
  );
  inputElement.setAttribute("value", emailsList);
}

// Enviar para clipboard
function toClipboard() {
  var copyText = document.getElementById("receiveEmails");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.execCommand("copy");
  alert("Emails copiados com sucesso");
}
