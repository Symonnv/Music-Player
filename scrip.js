let music = document.getElementById('audio-music')
let cont = 0

function play() {
  if (cont % 2 === 0) {
    music.play()
    document.getElementById('play').src = './assets/img/pause_circle.svg'
  } else {
    document.getElementById('play').src = './assets/img/play_circle.svg'
  }
  cont++
}
function stop() {
  music.pause()
  music.currentTime = 0
  
}
function skip_previous() {}
function skip_next() {}
