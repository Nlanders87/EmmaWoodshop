//Logs out contact form entry to the console until server-side functionality can be added

var nameInput = document.getElementById('name');
document.querySelector('form.contact-info').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(nameInput.value);
});



var mailInput = document.getElementById('mail');
document.querySelector('form.contact-info').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(mailInput.value);
});



var telInput = document.getElementById('telephone');
document.querySelector('form.contact-info').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(telInput.value);
});



var inquiryInput = document.getElementById('user-inquiries');
document.querySelector('form.contact-info').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inquiryInput.value);
});
