async function sendEmail() {
  const $friendsName = document.getElementById("name").value;
  const $friendsEmail = document.getElementById("email").value;
  const $sendButton = document.getElementById("sendButton");

  if ($friendsName != "" && $friendsEmail != "") {
    $sendButton.disabled = true;

    await Email.send({
      SecureToken: secureToken,
      To: $friendsEmail,
      From: from,
      Subject: "A friend remembered you.",
      Body: `Hey ${$friendsName},
      A friend of yours indicates this site to you:
      https://www.linx.com.br/`
    }).then(message => alert("Your friend will be happy, thanks."));

    $sendButton.disabled = false;
  } else {
    alert("Name and email are required.");
  }
}
