let x, y


document.addEventListener('mousemove', e=> {
    let w = window.screen.availWidth;
    let h = window.screen.availHeight;
    x = e.clientX/w;
    y = (e.clientY/h);
    rgbx = x*255
    rgby = y*255
    document.getElementById('printer').innerText = `${x}, ${y}`
    document.body.style.backgroundColor = `rgb(${rgbx}, ${rgby}, ${50})`;
    document.querySelector('.follower').style.left = `${x*100}vw`
    document.querySelector('.follower').style.top = `${y*100}vh`
})

