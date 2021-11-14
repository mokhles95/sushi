
const sendEmail = ()=>{
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const message = document.getElementById("message").value;
   Email.send({
       SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
       Host: "smtp.gmail.com",
       Username: "bonsaifintraiteur@gmail.com",
       Password: "Bonsai 123",
       To : "bonsaifintraiteur@gmail.com",
       From: email,
       Subject: `${name} sent you a message`,
       Body: `<p>${message}</p>`
   })
}