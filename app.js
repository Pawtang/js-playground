const follower = document.querySelector('.follower')
let x, y
let size = 100

function reducesize() {
    size--;
    follower.style.width = `${size}px`;
    follower.style.height = `${size}px`;
}

document.addEventListener('mousemove', e=> {
    let w = window.innerWidth;
    let h = window.innerHeight;
    x = e.clientX/w;
    y = (e.clientY/h);
    rgbx = x*255
    rgby = y*255
    document.getElementById('printer').innerText = `${x.toFixed(2)}, ${y.toFixed(2)}`
    document.body.style.backgroundColor = `rgb(${rgbx}, ${rgby}, ${50})`;
    follower.style.backgroundColor = `rgb(${rgby}, ${rgbx}, ${rgbx+rgby})`;
    follower.style.left = `${x*100}vw`
    follower.style.top = `${y*100}vh`
})

document.addEventListener('keypress', reducesize);