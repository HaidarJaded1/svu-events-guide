
// Contact form validation

const contactForm = document.getElementById("contact-form");
const formAlert = document.getElementById("form-alert");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Display Bootstrap alert
function showAlert(message, type) {
  formAlert.textContent = message;
  formAlert.className = `alert alert-${type} mb-3`;
}

// Validate email format
function isValidEmail(email) {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    return false;
  }

  const [localPart, domain] = email.split("@");

  return (
    !localPart.startsWith(".") &&
    !localPart.endsWith(".") &&
    !localPart.includes("..") &&
    !domain.includes("..")
  );
}

// Validate individual field
function validateField(input, isValid) {
  input.classList.toggle("is-valid", isValid);
  input.classList.toggle("is-invalid", !isValid);

  return isValid;
}

// Handle form submission
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get trimmed values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validate fields
  const validName = validateField(
    nameInput,
    name.length >= 2 && name.length <= 60
  );

  const validEmail = validateField(
    emailInput,
    isValidEmail(email)
  );

  const validMessage = validateField(
    messageInput,
    message.length >= 10 && message.length <= 1000
  );

  // Check all fields
  if (!validName || !validEmail || !validMessage) {
    showAlert(
      "يرجى التأكد من إدخال جميع البيانات بشكل صحيح.",
      "danger"
    );

    return;
  }

  // Successful validation
  showAlert(
    "تم التحقق من بياناتك بنجاح. ملاحظة: هذا نموذج تجريبي ولا يرسل الرسالة فعلياً.",
    "success"
  );

  // Reset form
  contactForm.reset();

  // Remove validation styles
  [nameInput, emailInput, messageInput].forEach(function (input) {
    input.classList.remove("is-valid", "is-invalid");
  });
});
