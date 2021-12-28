const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

ctx.strokeRect(10, 10, 400, 130);

ctx.fillStyle = "rgba(255,0,0,1)";
ctx.fillRect(20, 20, 200, 100);

ctx.clearRect(30, 30, 150, 50);
