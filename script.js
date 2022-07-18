function changeColor () {
  let hexNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let hexCode = ''

  for (i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexNumbers.length)
    hexCode += hexNumbers[randomIndex]
  }
  document.querySelector('#hex-code').innerHTML = hexCode
  document.querySelector('.inner-one').style.background = '#' + hexCode
}

function changeColorGradient () {
  let hexNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let hexCodeOne = ''
  let hexCodeTwo = ''

  for (i = 0; i < 6; i++) {
    let randomIndexOne = Math.floor(Math.random() * hexNumbers.length)
    hexCodeOne += hexNumbers[randomIndexOne]
  }
  for (i = 0; i < 6; i++) {
    let randomIndexTwo = Math.floor(Math.random() * hexNumbers.length)
    hexCodeTwo += hexNumbers[randomIndexTwo]
  }
  document.querySelector('#hex-code-gradient-one').innerHTML = hexCodeOne
  document.querySelector('#hex-code-gradient-two').innerHTML = hexCodeTwo
  document.querySelector('.inner-two').style.background = `linear-gradient(to left, #${hexCodeOne}, #${hexCodeTwo})`
}