async function copyEmails(filter) {
  const emailsList = await selectEmails(filter);
  await createEmailPlaceholder(emailsList);
  toClipboard();
}

copyEmails();
