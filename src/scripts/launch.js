const checkCarXLCabine = document.getElementById("checkCarXLCabine")
const checkCarXLSDiesel = document.getElementById("checkCarXLSDiesel")
const checkCarStorm = document.getElementById("checkCarStorm")
const carsCheckBox = document.querySelectorAll(".carsCard__checkBox")
let activedCkeckBox = 0
carsCheckBox.forEach(checkCar => {
    checkCar.onclick = () => {
        if (checkCar.checked == true) { // checked comparado a true pq dps de clicar o checkbox fica true
            if (activedCkeckBox == 2) {
                checkCar.checked = false
                return
            }
            activedCkeckBox++
        } else {
            activedCkeckBox = activedCkeckBox - 1
        }
    }
});