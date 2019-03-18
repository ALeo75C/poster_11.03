document.addEventListener('DOMContentLoaded', function(){
  for (let i = 0; i < 50; i++) {
    criateDivs()
  }
})
function criateDivs() {
  let newDiv = document.createElement('div')
  document.body.appendChild(newDiv).setAttribute('style', 'z-index: -2; position: absolute; top:' + Math.floor(Math.random() * 100 - 5) + 'vh; left:' + Math.floor(Math.random() * 100 - 5) + 'vw; animation: ' + readAnimation() + '; ' + criateBackground())
}

let a = Math.floor(Math.random() * 3)
let weather = {}

function criateBackground() {
  let background
  let value = Math.floor(Math.random() * 50)
  if ( a === 0 ) {
    document.bgColor = 'C2EFEB'
    background = 'border-radius: 100%; background-color: #6EA4BF; opacity:' + Math.random() + '; width:' + value + 'px; height:' + value + 'px; '
  } else if (a === 1 ) {
    document.bgColor = '17BEBB'
      let i
        if ( Math.floor(Math.random() * 2) === 1) {
          i = 'images/clouds/cloud_1.png'
        } else {
          i = 'images/clouds/cloud_2.png'
        }
      background = 'background-image: url(' + i + '); width:' + Math.floor(Math.random() * 500 + 100) + 'px; height:' + Math.floor(Math.random() * 300 + 100) + 'px'
    } else if( a === 2 ) {
      document.bgColor = 'B0C7BD'
      background = 'background-image: url(images/rain.png); width:' +  Math.floor(Math.random() * 40) + 'px; height:' + Math.floor(Math.random() * 60) + 'px'
  }
  return background
}

function readAnimation() {
  let animation
  if (a === 0) {
    animation = 'doun ' + Math.floor(Math.random() * 10 + 5) + 's linear infinite'
  } else if (a === 1) {
    animation = 'doun ' + Math.floor(Math.random() * 20 + 10) + 's linear infinite'
  } else if (a === 2) {
    animation = 'spin ' + Math.floor(Math.random() * 4000 + 20) +  'ms linear infinite'
  }
  return animation
}
