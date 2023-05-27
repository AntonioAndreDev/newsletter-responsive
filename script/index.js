const input = document.getElementById("emailInput");
const btnSubscribe = document.getElementById("subscribeBtn");
const validarRegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailRequired = document.getElementById("emailRequired");

btnSubscribe.addEventListener("click", () => {
  const validarEmail = validarRegexEmail.test(input.value);

  if (validarEmail) {
    const inputValue = input.value;

    input.value = "";
    emailRequired.innerText = "";
    input.classList.remove("input-animation");
    input.style.border = "1px solid #cbcbcb";

    Swal.fire({
      title: "Thanks for subscribing!",
      html: `
        <p class="text-center">A confirmation email has been sent to <span class="emailAlert"> ${inputValue}</span>. Please open it and click the button inside to confirm your subscription.</p>
      `,
      imageUrl: "./images/icon-success.svg",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Icon Success",
      confirmButtonText: "Dismiss message",
      customClass: {
        title: "title-left",
      },
    });
  } else {
    input.style.border = "2px solid red";
    input.classList.add("input-animation");
    emailRequired.innerText = "Valid email required";
  }
});
