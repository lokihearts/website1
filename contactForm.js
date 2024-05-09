document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form data
      const formData = new FormData(form);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Display submitted data in an alert
      const message = `
        Name: ${formDataObject.name}
        Email: ${formDataObject.email}
        Address: ${formDataObject.address || 'Not provided'}
        Event: ${formDataObject.event}
      `;
      alert(message);
  
      // Optionally, you can clear the form fields after submission
      form.reset();
    });
  });
  