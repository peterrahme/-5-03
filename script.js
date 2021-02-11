document.getElementById('message').addEventListener('click',clickButton)

/* changes the display of the backgroundColor, text on screen, and makes the alert window appear with important news */
function clickButton () {
  alert('Detection of a virus!!!')
  document.getElementById('background').style.backgroundColor = 'blue'
  document.getElementById('yes').innerHTML = 'Peter!'
}