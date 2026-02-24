




const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const japan_chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
// const random = Math.random();
const drops = [];
const fontSize = 20;

function initDrops() {
    drops.length = 0;
    const columns = Math.floor(canvas.width / fontSize);

    for (let i = 0; i < columns; i++) {
        const drop = {
            y:Math.random() * canvas.height,
                speed: 1 + Math.random() * 4,
            char:japan_chars[Math.floor(Math.random() * japan_chars.length)]
        };
        drops.push(drop);

    }
}

function draw() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';
    ctx.fillStyle = '#000000';

    for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * fontSize;

        ctx.fillText(drop.char, x, drop.y);
        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = 0
            drop.speed = 1 + Math.random() * 4;
            drop.char = japan_chars[Math.floor(Math.random() * japan_chars.length)]


        }


    }
    requestAnimationFrame(draw);


}





function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initDrops();

    // window.addEventListener('resize', handleResize);
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
initDrops();
draw();
window.addEventListener('resize', handleResize);