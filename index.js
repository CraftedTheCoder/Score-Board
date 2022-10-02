// Home 
Score = document.getElementById('score')
counta = 0
// Guest
Score1 = document.getElementById('score1')
count = 0

// functions for home
function plusone() {
	counta += 1
  Score.textContent = counta
}

function plustwo() {
	counta += 2
  Score.textContent = counta
}

function plusthree() {
	counta += 3
  Score.textContent = counta
}

// functions for Guest
function plusone1() {
	count += 1
  Score1.textContent = count
}

function plustwo2() {
	count += 2
  Score1.textContent = count
}

function plusthree3() {
	count += 3
  Score1.textContent = count
}