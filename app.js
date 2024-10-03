  // Initialize EmailJS with your user ID
  (function(){
    emailjs.init('FHm4R-D_YdrBidvcN');
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_0m94wca', 'template_nw0upln', this)
        .then(function() {
            alert('Thank you, Message sucessfully sent');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
 