export default function setUpEmails() {
  const formBtn = document.getElementById("formbtn");

  formBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //checking if all forms are filled

    if (name === "") {
      document.getElementById("warning_id").style.display = "block";
    } else {
      document.getElementById("warning_id").style.display = "none";
    }

    if (email === "") {
      document.getElementById("warning_email").style.display = "block";
    } else {
      document.getElementById("warning_email").style.display = "none";
    }

    if (message === "") {
      document.getElementById("warning_message").style.display = "block";
    } else {
      document.getElementById("warning_message").style.display = "none";
    }

    function isEmailValid(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (!isEmailValid(email) && email !== "") {
      document.getElementById("warning_email").innerHTML =
        "Please enter correct email.";
      document.getElementById("warning_email").style.display = "block";
    }

    if (name !== "" && email !== "" && message !== "" && isEmailValid(email)) {
      var templateParams = {
        from_name: name,
        message: message,
        sender: email,
      };

      emailjs.send("service_7nz1fm7", "template_wv1u9b1", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

      const emailReceived = document.getElementById("email_received");
      emailReceived.style.display = "block";

      setTimeout(() => {
        emailReceived.style.display = "none";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }, 5000);
    }
  });
}
