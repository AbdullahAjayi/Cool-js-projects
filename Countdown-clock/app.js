let countdown;
const timerDisplay = document.querySelector('.display_time-left')
const endTime = document.querySelector('.display-end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    clearInterval(countdown)

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
    let hours = Math.floor(minutes / 60);
    let remainderSeonds = seconds % 60;
    
    hours = (hours < 10) ?  '0' + hours : hours
    minutes = (minutes < 10) ?  '0' + minutes : minutes
    remainderSeonds = (remainderSeonds < 10) ?  '0' + remainderSeonds : remainderSeonds

    const display = `${hours} : ${minutes} : ${remainderSeonds}`;
    timerDisplay.textContent = display;
    document.title = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const dayTime = hour > 12 ? 'PM' : 'AM';
    const formattedHour = hour > 12 ? (hour - 12) : hour;

    endTime.textContent = `Be Back At ${formattedHour}:${minutes < 10 ? '0' + minutes: minutes} ${dayTime}`
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach((button)=>{
    button.addEventListener('click', startTimer);
})

document.customForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const mins = this.customForm.minutes.value
    if (isNaN (mins) == false && mins !== '') {
        timer(mins * 60);
    }
    console.log(typeof mins, isNaN(mins));
    this.customForm.reset()
})

// PSEUODOCODE

/* 
    // STEPS
    1. Get input from user
    2. Use input as parameter for the seconds to be worked on and START TIMER
    3. Display time left to reach the end time
    4. Calculate and DISPLAY the user ENDTIME (make the time 12 hour format )
    5. STOP TIMER when the time elapse

    // FUNCTIONS
    * START TIMER:
    * DISPLAY TIME LEFT
    * DISPLAY ENDTIME:
    * STOP TIMER
*/
