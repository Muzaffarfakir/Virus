let canvas = document.getElementById('canvas');
let img = document.getElementById('img');
let ter = document.getElementById('ter1');
let ter2 = document.getElementById('ter2');
let blood = document.getElementById('blood');

let score = 0;
let s = document.getElementById('s');
let c = canvas.getContext('2d');
let cw = innerWidth;
let ch = innerHeight;
canvas.width = cw;
canvas.height = ch;
let en1 = [];
let en2 = [];
let en3 = [];
let mu = new Audio();
let cur = new Image();
let ene1 = new Image();
let ene2 = new Image();
let ene3 = new Image();
ene3.src = 'img/Enemy3.png';
ene2.src = 'img/Enemy2.png';
ene1.src = 'img/Enemy1.jpg';
cur.src = 'img/c.png';
mu.src = "music/shoot.mp3";
let mo = {
  x: undefined,
  y: undefined
}
let mox;
let moy;
////////Event listing///////////
window.addEventListener('click', (e) => {
  img.style.top = e.pageY + "px"
  img.style.left = e.pageX + "px";

  mo.x = e.pageX;
  mo.y = e.pageY;
  if (e.target === ter) {
    s.innerHTML = score
    score++;
    mu.play();
    blood.style.top = e.pageY + "px"
    blood.style.left = e.pageX + "px"


  }
  if (e.target === ter2) {
    s.innerHTML = score
    score++;
    mu.play();
    blood.style.top = e.pageY + "px"
    blood.style.left = e.pageX + "px"


  }
});
////////////////////Enemy/////////

function Enemy() {
  // body...
  setInterval(() => {
    let x = Math.random() * cw - 100;
    let y = Math.random() * ch - 100;
    ter.style.position = 'absolute';
    ter.style.top = x + 'px';
    ter.style.left = y + "px";
    ter2.style.position = 'absolute';
    ter2.style.left = x + 'px';
    ter2.style.top = y + "px";




  }, 1000)
}

//////////Animation function///////
function Animate(e) {
  requestAnimationFrame(Animate);
  c.clearRect(0, 0, cw, ch)

}
/////calling functions/////////////
Animate();
Enemy();
