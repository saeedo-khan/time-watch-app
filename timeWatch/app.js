
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

const seconds = document.getElementById('seconds')
const tense = document.getElementById('tense')

let millisecond = 0;
let secondsElapse = 0;
function startTimer(){
    const timeRun = setInterval(()=> {

        if(millisecond <= 99){
            tense.innerHTML = `${millisecond < 10? '0'+ millisecond++ : millisecond++}`

        }else if(millisecond > 99){
            seconds.innerHTML = `${secondsElapse < 10? '0'+ secondsElapse++ : secondsElapse++}`
            millisecond = 0;
            millisecond++;
        } 
    }, 10);

    stop.addEventListener('click', () =>{
        clearInterval(timeRun)
    })

    reset.addEventListener('click', () => {
        millisecond = 0;
        secondsElapse = 0;

        tense.innerHTML = `${millisecond < 10? '0'+ millisecond++ : millisecond++}`;

        seconds.innerHTML = `${secondsElapse < 10? '0'+ secondsElapse++ : secondsElapse++}`
        
    })
}




// Event Listener

start.addEventListener('click', startTimer);

// stop.addEventListener('click', stopTimer)
