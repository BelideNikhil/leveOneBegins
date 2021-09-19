const daysRemaining=document.querySelector("#daysRemaining")
const hoursRemaining=document.querySelector("#hoursRemaining")
const minutesRemaining=document.querySelector("#minutesRemaining")
const secondsRemaining=document.querySelector("#secondsRemaining")

let presentDate=new Date();
let levelOneStart=new Date(2022,00,02)



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

setInterval(()=>{
    presentDate=new Date()
    timer(presentDate)
},1000)

