document.addEventListener('DOMContentLoaded', function(){
  for (let i = 0; i < 20; i++) {
    let newDiv = document.createElement('div')
    document.body.appendChild(newDiv).setAttribute('style', 'z-index: -2; width: ' + Math.floor(Math.random() * 100) + 'px; height: ' + Math.floor(Math.random() * 100) + 'px; background-color: #' + getColor() + '; position: absolute; top:' + Math.floor(Math.random() * 1000) + 'px; left:' + Math.floor(Math.random() * 1000) + 'px; animation: ' + readAnimation() + '; transition: all ' + Math.floor(Math.random() * 100) + 'ms ease; content: "' + generateContent() + '"')
  }
  document.getElementsByTagName('div').on(mouseover = function() {
    console.log(this.style.top)
  })
})

let a = Math.floor(Math.random() * 3)

function getColor() {
  let color
  if (a === 0) {
    document.bgColor = 'C2EFEB'
    color = '41337A'

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
    animation = 'doun 10s linear infinite'
  } else if (a === 1) {
    animation = 'slise 10s linear infinite'
  } else if (a === 2) {
    animation = 'spin 3s linear infinite'
  }
  return animation
}
function generateContent() {
  let content
  if (a === 0) {
    content = 'Снежинки'
  } else if (a === 1) {
    content = 'Облака'
  } else if (a === 2) {
    content = 'Дождинки'
  }
  return content
}



// #anim-two
//   text-align: center
//   // padding-top: 150px
//   ul
//     text-align: center
//     list-style: none
//     li
//       width: 30px
//       height: 30px
//       border-radius: 50%
//       background-color: red
//       display: inline-block
//       margin: 0 5px
//       transform: translateY(-30px)
//       animation: bounce-balls 1.2s cubic-bezier(0.245, 0.325, 0.510, 1.305) infinite alternate
//       &:nth-child(1)
//         background: orange
//         animation-delay: .6s
//       &:nth-child(2)
//         background: coral
//         animation-delay: .7s
//       &:nth-child(3)
//         background: darksalmon
//         animation-delay: .8s
//       &:nth-child(4)
//         background: indianred
//         animation-delay: .6s
//       &:nth-child(5)
//         background: lightcoral
//         animation-delay: .6s
//       &:nth-child(6)
//         background: lightcoral
//         animation-delay: .7s
//
// @keyframes bounce-balls
//   30%
//     transform: translateY(-30px)
//   60%
//     transform: translateY(205px)
//   80%
//     transform: translateY(190px)
//   100%
//     transform: translateY(195px)
