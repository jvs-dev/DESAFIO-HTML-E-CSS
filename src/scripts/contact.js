const contactOf = document.getElementById("contactOf")
contactOf.onchange = function () {
    if (contactOf.value != "") {
        contactOf.style.color = "#000"
    }
}