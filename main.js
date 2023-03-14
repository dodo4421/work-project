document.getElementById("time").innerHTML = new Date().toLocaleString()

function red() {
  document.body.style.backgroundColor = "red"
}

function white() {
  document.body.style.backgroundColor = "white"
}
function yellow() {
  document.body.style.backgroundColor = "yellow"
}
function reset() {
  document.body.style.backgroundColor = "black"
}

function showty() {
  document.getElementById("fig").src = "img/ty.jpg"
  document.getElementById("desc").innerHTML =
    "<b>토니 스타크</b>는 아이언맨 개발의 장본인이자 수트를 착용하고 다니는 히어로이다."
}

function showmk2() {
  document.getElementById("fig").src = "img/ironman2.jpg"
  document.getElementById("desc").innerHTML =
    "<b>아이언맨 마크2</b>는 토니 스타크가 만든 최첨단 수트로 프로토타입이다."
}

function showmk5() {
  document.getElementById("fig").src = "img/ironman5.jpg"
  document.getElementById("desc").innerHTML =
    "<b>아이언맨 마크5</b>는 경량화 수트로 최초로 기계의 도움 없이 자발적 수트업 수트이다."
}

function showmk7() {
  document.getElementById("fig").src = "img/ironman7.jpg"
  document.getElementById("desc").innerHTML =
    "<b>아이언맨 마크7</b>는 마크5의 업그레이드 버전으로 착용자의 팔찌를 인식하여 수트업한다."
}

function showmk42() {
  document.getElementById("fig").src = "img/ironman42.jpg"
  document.getElementById("desc").innerHTML =
    "<b>아이언맨 마크42</b>는 최초의 파츠가 개별적으로 사용자 몸에 착용된다."
}

function showmk85() {
  document.getElementById("fig").src = "img/ironman85.jpg"
  document.getElementById("desc").innerHTML =
    "<b>아이언맨 마크85</b>는 최초의 나노테크 수트로 사용자가 착용한 가슴부분 파츠를 두번 터치하면 나노재질의 수트가 가슴부분부터 착용된다."
}

function hide() {
  document.getElementById("fig").src = ""
  document.getElementById("desc").innerHTML = ""
}
