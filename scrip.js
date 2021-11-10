let music = document.querySelector('.music')
let cont = 0

function play() {
  music.play()
  document.querySelector('.control-play').style.display = 'none'
  document.querySelector('.control-pause').style.display = 'block'
  document.querySelector('.control-stop').style.display = 'block'
}
function pause() {
  music.pause()
  document.querySelector('.control-play').style.display = 'block'
  document.querySelector('.control-pause').style.display = 'none'
}

function stop() {
  music.pause()
  music.currentTime = 0
  document.querySelector('.control-play').style.display = 'block'
  document.querySelector('.control-pause').style.display = 'none'
  document.querySelector('.control-stop').style.display = 'none'
}
function skip_previous() {}
function skip_next() {}
