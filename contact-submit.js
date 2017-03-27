//Logs out contact form entry to the console until server-side functionality can be added

var nameInput = document.getElementById('name'); // Creates variable that grabs the value of the input type
document.querySelector('form.contact-info').addEventListener('submit', function (i) { // Function that on submit logs the value of the input to the console
    i.preventDefault(); //Prevents page refresh
    console.log(nameInput.value); //Logs value to the console
    $('input[type="text"]').val(''); //Clears input on submit
});



var mailInput = document.getElementById('mail');
document.querySelector('form.contact-info').addEventListener('submit', function (i) {
    i.preventDefault();
    console.log(mailInput.value);
    $('input[type="email"]').val('');
});



var telInput = document.getElementById('telephone');
document.querySelector('form.contact-info').addEventListener('submit', function (i) {
    i.preventDefault();
    console.log(telInput.value);
    $('input[type="tel"]').val('');
});



var inquiryInput = document.getElementById('user-inquiries');
document.querySelector('form.contact-info').addEventListener('submit', function (i) {
    i.preventDefault();
    console.log(inquiryInput.value);
    $('input[type="text"], textarea').val('');
});

