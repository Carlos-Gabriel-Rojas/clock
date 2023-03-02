function updateClock() {
    const clockContainer = document.querySelector("#clock")
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    clockContainer.innerHTML = `${hours}:${minutes}:${seconds}`
}

updateClock()
setInterval(updateClock, 1000)