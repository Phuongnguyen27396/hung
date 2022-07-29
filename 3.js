var button = document.getElementById("generate");
button.onclick = function generate() {
var randomNum = Math.floor((Math.random() * 4) + 1);
var el = document.getElementById('ranNum');
el.innerHTML = randomNum;

if (randomNum ===1) alert("xin moi ban a")
if (randomNum ===2) alert("xin moi ban b")
if (randomNum ===3) alert("xin moi ban c")
if (randomNum ===4) alert("xin moi ban d")
};