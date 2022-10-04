let myName = document.getElementById("myName")
myName.innerText = prompt("İsminizi Giriniz:")

function showTime() {
    const today = new Date();
    let hour =today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById("myClock").innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(showTime,1000);

}

function checkTime(i) {
    if (i<10) {
        i="0" + i;

    }
    return i;
}

showTime()