const contactOf = document.getElementById("contactOf")
const contactForm = document.getElementById("contactForm")

contactOf.onchange = function () {
    if (contactOf.value != "") {
        contactOf.style.color = "#000"
    }
}

contactForm.onsubmit = function (event) {
    event.preventDefault()
    alert("Formulario enviado com sucesso")    
    let allInputs = document.querySelectorAll("#contactForm input")
    let message = document.getElementById("message")
    allInputs.forEach(element => {
        element.value = ""
        message.value = ""
    });
}