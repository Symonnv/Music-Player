let musicList = [
  {
    title: 'King Porter Stomp',
    artist: 'Joel Cummins',
    src: 'assets/music/King Porter Stomp - Joel Cummins.mp3',
    img: 'assets/img/jazz.jpg'
  },
  {
    title: 'Twin Engines',
    artist: 'Jeremy Korpas',
    src: 'assets/music/Twin Engines - Jeremy Korpas.mp3',
    img: 'assets/img/rock.jpg'
  },
  {
    title: 'Bourree',
    artist: 'Joel Cummins',
    src: 'assets/music/Bourree - Joel Cummins.mp3',
    img: 'assets/img/musica_classica.jpg'
  },
  {
    title: 'Nine Lives',
    artist: 'Unicorn Heads',
    src: 'assets/music/Nine Lives - Unicorn Heads.mp3',
    img: 'assets/img/eletronica.jpg'
  }
]

let music = document.querySelector('.music')
let indexMusic = 0
let musicDuration = document.querySelector('.theEnd-time')
let image = document.querySelector('img')
let musicName = document.querySelector('#description h2')
let artistName = document.querySelector('#description em')

renderMusic(indexMusic)

music.addEventListener('timeupdate', updateBar)

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
function skip_previous() {
  indexMusic--
  if (indexMusic < 0) {
    indexMusic = 2
  }
  renderMusic(indexMusic)
  document.querySelector('.control-play').style.display = 'block'
  document.querySelector('.control-pause').style.display = 'none'
  document.querySelector('.control-stop').style.display = 'none'
}
function skip_next() {
  indexMusic++
  if (indexMusic > 2) {
    indexMusic = 0
  }
  renderMusic(indexMusic)
  document.querySelector('.control-play').style.display = 'block'
  document.querySelector('.control-pause').style.display = 'none'
  document.querySelector('.control-stop').style.display = 'none'
}

function updateBar() {
  let bar = document.querySelector('progress')
  bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'
  let elapsedTime = document.querySelector('.start-time')
  elapsedTime.textContent = timeConversion(Math.floor(music.currentTime))
}

function timeConversion(seconds) {
  minutesField = Math.floor(seconds / 60)
  secondsField = seconds % 60
  if (secondsField < 10) {
    secondsField = '0' + secondsField
  }
  return `${minutesField}:${secondsField}`
}

function renderMusic(index) {
  music.setAttribute('src', musicList[index].src)
  music.addEventListener('loadeddata', () => {
    musicName.textContent = musicList[index].title
    artistName.textContent = musicList[index].artist
    image.src = musicList[index].img
    musicDuration.textContent = timeConversion(Math.floor(music.duration))
  })
}
