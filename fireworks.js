const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let sparks = [];

function Spark() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height / 2;
  this.size = Math.random() * 3 + 1;
  this.life = 60;
  this.color = `hsl(${Math.random()*360},100%,60%)`;
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if (Math.random() < 0.08) sparks.push(new Spark());

  sparks.forEach((s,i)=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
    ctx.fillStyle = s.color;
    ctx.fill();
    s.life--;
    if(s.life<=0) sparks.splice(i,1);
  });

  requestAnimationFrame(animate);
}
animate();
