// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// =========================
// APPOINTMENT FORM
// =========================

const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone) {

        alert("Please enter your name and phone number.");

        return;
    }


    // Create WhatsApp message

    const whatsappMessage =
        `Hello Bharat Dental Hospital,

I would like to request an appointment.

Name: ${name}
Phone: ${phone}
Treatment: ${service || "Not specified"}

Message:
${message || "No additional message."}`;


    const whatsappURL =
        `https://wa.me/917088677608?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

});