document.addEventListener('DOMContentLoaded', function(){
  for (let i = 0; i < 50; i++) {
    let newDiv = document.createElement('div')
    document.body.appendChild(newDiv).setAttribute('style', 'z-index: -2;' + generateSize() + '; background-color: #' + getColor() + '; position: absolute; top:' + Math.floor(Math.random() * 1000 - 100) + 'px; left:' + Math.floor(Math.random() * 1400) + 'px; animation: ' + readAnimation() + '; ' + deformateDiv() + '; opacity:' + generateOpacity())
  }
})

let a = Math.floor(Math.random() * 3)

function generateOpacity() {
  let opacity
  if (a === 0) {
    opacity = Math.random()
  } else if (a === 1) {
    opacity = Math.random()
  } else if (a === 2) {
    opacity = Math.random()
  }
  return opacity
}

function generateSize() {
  let value
  if (a === 0) {
    value = Math.floor(Math.random() * 50)
    value = 'width:' + value + 'px; height:' + value + 'px'
  } else if (a === 1) {
    value = Math.floor(Math.random() * 50)
    value = 'width:' + value + 'px; height:' + Math.floor(Math.random() * 100) + 'px'
  } else if (a === 2) {
    value = Math.floor(Math.random() * 100)
    value = 'width:' + value + 'px; height:' + Math.floor(Math.random() * 100) + 'px'
  }
  return value
}
function getColor() {
  let color
  if (a === 0) {
    document.bgColor = 'C2EFEB'
    color = '6EA4BF'

  } else if (a === 1) {
    document.bgColor = '17BEBB'
    color = 'FFC914'
  } else if (a === 2) {
    document.bgColor = 'B0C7BD'
    color = '8D5A97'
  }
  return color
}
function readAnimation() {
  let animation
  if (a === 0) {
    animation = 'doun ' + Math.floor(Math.random() * 10 + 5) + 's linear infinite'
  } else if (a === 1) {
    animation = 'slise ' + Math.floor(Math.random() * 10) + 's linear infinite'
  } else if (a === 2) {
    animation = 'spin ' + Math.floor(Math.random() * 5 + 5) +  's linear infinite'
  }
  return animation
}
function deformateDiv() {
  let diformate
  if (a === 0) {
    diformate = 'border-radius: 100%'
  } else if (a === 1) {
    diformate = 'border-radius: 10px'
  } else if (a === 2) {
    diformate = 'border-radius: 0 0 10px 10px'
  }
  return diformate
}
