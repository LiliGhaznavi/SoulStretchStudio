function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input field values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  // Display an alert with the user's first and last names
  alert(
    `Thank you, ${firstName} ${lastName}, for reaching out! 🌟 Your message has been received, and we're excited to connect with you. Expect to hear back from us soon. In the meantime, feel free to explore more of what we offer on our website. Have a wonderful day!`
  );
}
