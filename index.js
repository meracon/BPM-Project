let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let secondsEl = document.getElementById("seconds-el")
let millisecEl= document.getElementById("millisec-el")
let count = 0
let seconds = 0
let millisecs = 0

let secondInterval
let milliInterval

function increment() {
    count += 1
    countEl.textContent = count
    saveEl.textContent = "BPM: "
    if (count==1){
        secondInterval = setInterval(countsec,1000)
        milliInterval = setInterval(countmilli,10)
    }
}

function countsec() {
    seconds += 1
    secondsEl.textContent = seconds
}

function countmilli() {
    millisecs+= 1
    millisecEl.textContent = millisecs%100
    // saveEl.textContent = "BPM: "+Number.parseFloat(count/(millisecs/6000)).toFixed(2)
}

function save() {
    
    saveEl.textContent = "BPM: "+Number.parseFloat(count/(millisecs/6000)).toFixed(2)
    
    clearInterval(secondInterval)
    clearInterval(milliInterval)
    countEl.textContent = 0
    secondsEl.textContent = 0
    millisecEl.textContent = 0
    
    seconds=0
    millisecs=0
    count = 0
}
