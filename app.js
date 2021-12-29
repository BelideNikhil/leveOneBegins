//confetti
const confettiElement = document.getElementById('my-canvas');
const confettiSettings = { target: confettiElement };
const confetti = new ConfettiGenerator(confettiSettings);

const daysRemaining=document.querySelector("#daysRemaining")
const hoursRemaining=document.querySelector("#hoursRemaining")
const minutesRemaining=document.querySelector("#minutesRemaining")
const secondsRemaining=document.querySelector("#secondsRemaining")
const H1=document.querySelector('h1')

let presentDate=new Date();
let levelOneStart=new Date(2021,11,30)
levelOneStart.setHours( levelOneStart.getHours()-1)
levelOneStart.setMinutes( levelOneStart.getMinutes() -28)

function timer(presentDate){
    let difference=levelOneStart.getTime()-presentDate.getTime()
    let seconds=Math.floor((difference/1000)%60)
    let minutes=Math.floor(((difference/1000)/60)%60)
    let hours=Math.floor((((difference/1000)/60)/60)%24)
    let days=Math.floor((((difference/1000)/60)/60)/24)

    daysRemaining.innerHTML=days
    hoursRemaining.innerHTML=hours
    minutesRemaining.innerHTML=minutes
    secondsRemaining.innerHTML=seconds
}

function reset(){
    confetti.render();

    daysRemaining.innerHTML=0
    hoursRemaining.innerHTML=0
    minutesRemaining.innerHTML=0
    secondsRemaining.innerHTML=0

    clearInterval(trigger)
    H1.innerHTML="Let The Fun Begin!"
}

let trigger=setInterval(()=>{
    //passing present every second and triggering timer fn
    presentDate=new Date()
    if(presentDate>levelOneStart){
        reset()
    }else{
        timer(presentDate)
    }
},1000)


    