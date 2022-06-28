const digitalClock = document.querySelector('.digital-clock')
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')


setInterval(getDate, 1000);



function getDate() {
    const date = new Date();
    
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day_time = 'AM'

    let secondDegree = (seconds / 60 * 360)
    let minuteDegree = (minutes / 60 * 360) + (secondDegree / 60)
    let hourDegree = (hours / 12 * 360)  + (minuteDegree / 60)
   
    
    
    hourHand.style.transform = `rotate(${hourDegree}deg)`
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`
    secondHand.style.transform = `rotate(${secondDegree}deg)`

    digitalClock.textContent = `${hours}: ${minutes}: ${seconds} ${day_time}`
}

getDate()