async function copyEmails(filter) {
  const emailsList = await selectEmails(filter);
  await createEmailPlaceholder(emailsList);
  copyToClipboard();
  removeElement("#emails-placeholder", "[data-auto='inviteContainer']");
}
