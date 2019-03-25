let number = 50
let a = Math.floor(Math.random() * 8)
document.addEventListener('DOMContentLoaded', function(){
  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement('div')
    document.body.appendChild(newDiv).setAttribute('id', 'div' + i)
  }
  criateStyles()
})

function criateStyles() {
  for (let i = 0; i < number; i++) {
    let element = document.getElementById('div' + i)
    element.setAttribute('style', 'z-index: 2; position: absolute; top:' + Math.floor(Math.random() * 100 - 10) + 'vh; left:' + Math.floor(Math.random() * 100 - 5) + 'vw; animation: ' + readAnimation() + '; ' + criateBackground())
  }
}

function soln() {
  a = 0
  criateStyles()
}
function letn() {
  a = 1
  criateStyles()
}
function sessia() {
  a = 2
  criateStyles()
}
function zimn() {
  a = 3
  criateStyles()
}
function noch() {
  a = 4
  criateStyles()
}
function osen() {
  a = 5
  criateStyles()
}
function rad() {
  a = 6
  criateStyles()
}
function tum() {
  a = 7
  criateStyles()
}

function criateBackground() {
  let background
  let value = Math.floor(Math.random() * 50)
  if ( a === 0 ) {
    value = Math.floor(Math.random() * 300)
    document.bgColor = 'A5FFD6'
    document.getElementById('info').style.color = 'rgb(0, 0, 0)'
    background = 'border-radius: 100%; background-color: #FFF9A5; opacity:' + (Math.random() * 0.8) + '; width:' + value + 'px; height:' + value + 'px; '
  } else if (a === 1 ) {
    document.bgColor = '17BEBB'
    document.getElementById('info').style.color = 'rgb(0, 0, 0)'
    let i
      if ( Math.floor(Math.random() * 2) === 1) {
          i = 'materials/images/clouds/cloud_1.png'
      } else {
          i = 'materials/images/clouds/cloud_2.png'
        }
    background = 'background-image: url(' + i + '); width:' + Math.floor(Math.random() * 500 + 100) + 'px; height:' + Math.floor(Math.random() * 300 + 100) + 'px'
  } else if(a === 2) {
      document.bgColor = '5B5B5B'
      document.getElementById('info').style.color = 'rgb(238, 240, 242)'
      background = 'background-image: url(materials/images/rain.png); width:' +  Math.floor(Math.random() * 40) + 'px; height:' + Math.floor(Math.random() * 60) + 'px;'
  } else if (a === 3) {
    document.bgColor = 'C2EFEB'
    document.getElementById('info').style.color = 'rgb(0, 0, 0)'
    background = 'border-radius: 100%; background-color: #6EA4BF; opacity:' + Math.random() + '; width:' + value + 'px; height:' + value + 'px; '
  } else if (a === 4) {
    value = Math.floor(Math.random() * 10)
    document.bgColor = '2A2D34'
    document.getElementById('info').style.color = 'rgb(238, 240, 242)'
    background = 'border-radius: 100%; background-color: #F2C14E; opacity:' + Math.random() + '; width:' + value + 'px; height:' + value + 'px; '
  } else if (a === 5) {
    value = Math.floor(Math.random() * 100)
    document.bgColor = 'FCD757'
    document.getElementById('info').style.color = 'rgb(0, 0, 0)'
    let i = Math.floor(Math.random() * 3)
    let image
      if (i === 0) {
        image = 'materials/images/green/one.svg'
      } else if (i === 1) {
        image = 'materials/images/green/two.svg'
      } else if (i === 2) {
        image = 'materials/images/green/three.svg'
      }
    background = 'background-image: url(' + image + '); opacity:' + Math.random() + '; width:' + value + 'px; height:' + value + 'px; transform: rotate(' + Math.floor(Math.random() * 180) + 'deg)'
  } else if (a === 6) {
    value = Math.floor(Math.random() * 100)
    document.bgColor = 'A1CDF1'
    document.getElementById('info').style.color = 'rgb(0, 0, 0)'
    let color = Math.floor(Math.random() * 5)
    if (color === 0) {
      color = 'DF2935'
    } else if (color === 1) {
      color = 'F8F32B'
    } else if (color === 2) {
      color = '2BA84A'
    } else if (color === 3) {
      color = '345995'
    } else if (color === 4) {
      color = '5B2A86'
    }
    background = 'border-radius: 100%; background-color: #' + color +'; opacity:' + (Math.random()) + '; width:' + value + 'px; height:' + value + 'px; '
  } else if (a === 7) {
    value = Math.floor(Math.random() * 900)
    document.bgColor = '254D32'
    document.getElementById('info').style.color = 'rgb(238, 240, 242)'
    let i = Math.floor(Math.random() * 2)
    let image
      if (i === 0) {
        image = 'materials/images/fog/one.png'
      } else if (i === 1) {
        image = 'materials/images/fog/two.png'
      }
    background = 'background-image: url(' + image + '); opacity:' + Math.random() + '; width:' + value + 'px; height:' + Math.floor(Math.random() * 900) + 'px; '
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
  } else if (a === 3) {
    animation = 'doun ' + Math.floor(Math.random() * 10 + 5) +  's linear infinite'
  } else if (a === 4) {
    animation = 'doun ' + Math.floor(Math.random() * 10 + 15) +  's linear infinite'
  } else if (a === 5) {
    animation = 'spin ' + Math.floor(Math.random() * 10 + 5) +  's linear infinite'
  } else if (a === 6) {
    animation = 'doun ' + Math.floor(Math.random() * 10 + 15) +  's linear infinite'
  } else if (a === 7) {
    animation = 'doun ' + Math.floor(Math.random() * 10 + 15) +  's linear infinite'
  }
  return animation
}
