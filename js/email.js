
const sendEmail = ()=>{
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const message = document.getElementById("message").value;
   Email.send({
       SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
       Host: "smtp.gmail.com",
       Username: "mokhlestestapps@gmail.com",
       Password: "07212360",
       To : "mokhlestestapps@gmail.com",
       From: email,
       Subject: `${name} sent you a message`,
       Body: `<p>${message}</p>`
   })
}