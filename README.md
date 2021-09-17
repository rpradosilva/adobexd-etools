<br>

<div align="center">
    <h1>
      Copy emails from Adobe Xd URL
    </h1>
    A shortcode to copy emails to Clipboard from Adobe Xd links
</div>
<br>
<div align="center">

[![Sobre](https://img.shields.io/badge/-Sobre-FE62F5)](#sobre)
[![Problema](https://img.shields.io/badge/-Problema-FE62F5)](#problema)
[![Como](https://img.shields.io/badge/-Como%20usar-FE62F5)](#como-usar)
<br>
[![Licenca](https://img.shields.io/badge/-Licença-470137)](/LICENSE)
[![Autors](https://img.shields.io/badge/-Autor-470137)](#autor)

</div>

## Sobre

Trabalhando convidando pessoas para acessar os links de protótipos do Adobe Xd, foi identificado um problema em copiar os e-mails para outros protótipos.

### Problema

Automatizar a cópia dos e-mails para outros protótipos.

## Como usar

### 1. Abra seu link do Xd em seu navegador

<img width="100%" src=".github/step1.png"/>

### 2. Com o botão direito clique em inspecionar (devTools)

<img width="50%" src=".github/step2.png"/>

### 3. Cole o código abaixo no devTools e de enter

```js
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

let emailsList = [];

function selectEmails() {
  const inviteUsers = document.querySelectorAll(
    "[data-auto='inviteContainer'] ul li .ccx-ss-user-card-details [aria-label]"
  );

  for (const user of inviteUsers) {
    if (user.getAttribute("aria-label").indexOf("@") > 0) {
      emailsList.push(sanitizeEmails(user.getAttribute("aria-label")));
    }
  }
  emaislToCopy();
  toClipboard();
}

function sanitizeEmails(email) {
  let userEmail = email.toString();
  return userEmail.slice(0, userEmail.length - 1).toLowerCase();
}

function emaislToCopy() {
  const mainPage = document.querySelector("[data-auto='inviteContainer']");
  const inputElement = document.createElement("input");
  mainPage.appendChild(inputElement);
  inputElement.setAttribute("id", "receiveEmails");
  inputElement.setAttribute(
    "style",
    "overflow: hidden; z-index: -99999999; font-size:1px; color:white; border:none; outline:none;"
  );
  inputElement.setAttribute("value", emailsList);
}

function toClipboard() {
  var copyText = document.getElementById("receiveEmails");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.execCommand("copy");
  alert("Emails copiados com sucesso");
}
```

### 4. Clique no botão convidar e espere carregar a lista de usuários

<img width="50%" src=".github/step4.png"/>

### 5. No devTools execute o comando abaixo

```js
copyUI();
```

### 6. Clique no botão Copiar Emails e é só colar no próximo protótipo

<img width="100%" src=".github/step6.png"/>

## Autors

|      [Rafael Prado](http://www.github.com/rpradosilva)      |
| :---------------------------------------------------------: |
| ![](https://avatars2.githubusercontent.com/u/22681977?s=80) |

---

### [<img alt="Logo RPrado" src="https://github.com/rpradodesign/default-readme/blob/main/.github/assets/images/logo-rprado.png" width="91px" />](http://rprado.design)
