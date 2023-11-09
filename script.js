// JavaScript code to handle form submission and generate draft content
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const draftContentDiv = document.getElementById("draft-content");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form values
      const emailType = document.getElementById("email-type").value;
      const numberOfWords = document.getElementById("number-of-words").value;
      const toneOfEmail = document.getElementById("tone").value;
      const emailDate = document.getElementById("email-date").value;
      const emailSubject = document.getElementById("email-subject").value;
  
      // Generate draft content based on form values
      const draftContent = `
        <h2>${emailType} Email Draft</h2>
        <p><strong>Date:</strong> ${emailDate}</p>
        <p><strong>Subject:</strong> ${emailSubject}</p>
        <p><strong>Tone:</strong> ${toneOfEmail}</p>
        <p><strong>Number of Words:</strong> ${numberOfWords}</p>
        <p>Dear [Recipient's Name],</p>
        <p>[Email Body]</p>
        <p>Best regards,<br>[Your Name]</p>
      `;
  
      // Display the draft content
      draftContentDiv.innerHTML = draftContent;
    });
  });