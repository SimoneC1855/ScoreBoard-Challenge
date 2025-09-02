let pointsHome = 0
let pointsGuest = 0

function homeplus1() {
    pointsHome += 1
    document.getElementById("home").textContent = pointsHome
}
function homeplus2() {
    pointsHome += 2
    document.getElementById("home").textContent = pointsHome
}
function homeplus3() {
    pointsHome += 3
    document.getElementById("home").textContent = pointsHome
}
function guestplus1() {
    pointsGuest += 1 
    document.getElementById("guest").textContent = pointsGuest
}
function guestplus2() {
    pointsGuest += 2
    document.getElementById("guest").textContent = pointsGuest
}

function guestplus3() {
    pointsGuest += 3
    document.getElementById("guest").textContent = pointsGuest
}