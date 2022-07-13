let userName = prompt("Adınızı Giriniz...")

document.querySelector("#myName").innerHTML = userName



function Anlik () {
    let Clock = new Date().toLocaleTimeString();
    let gun = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let today = gun[new Date().getDay()]

    document.querySelector("#myClock").innerHTML =  Clock + " " + today
}
Anlik()
setInterval(Anlik,1000)