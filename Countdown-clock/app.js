let countdown;
const timerDisplay = document.querySelector('.display_time-left')
const endTime = document.querySelector('.display-end-time')

function timer(seconds) {
    const now = Date.now()
    const then = now + seconds * 1000
    dsplayTimeLeft(seconds)
    displayEndTime(then)
    
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if(secondsLeft < 0) {
            clearInterval(countdown)
            return
        }
        dsplayTimeLeft(secondsLeft)
    }, 1000)
}

function dsplayTimeLeft(seconds) {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60)
    let remainderSeonds = seconds % 60;
    
    hours = (hours < 10) ?  '0' + hours : hours
    minutes = (minutes < 10) ?  '0' + minutes : minutes
    remainderSeonds = (remainderSeonds < 10) ?  '0' + remainderSeonds : remainderSeonds

    const display = `${hours} : ${minutes} : ${remainderSeonds}`;
    timerDisplay.textContent = display;
    document.title = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const minutes = end.getMinutes()
    const dayTime = hour > 12 ? 'PM' : 'AM';
    const formattedHour = hour > 12 ? (hour - 12) : hour;

    endTime.textContent = `Be Back At ${formattedHour}:${minutes < 10 ? '0' + minutes: minutes} ${dayTime}`
}

timer(1200)