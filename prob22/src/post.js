let prev = document.querySelector('.leftArrow')
let next = document.querySelector('.rightArrow')


let imgs = document.querySelectorAll('.sectionImage ul li')
let bullets = document.querySelectorAll('.sectionImageBullets label')

let index = 0
let move = 0

window.onload = function () {
    changeBullet()
}

prev.addEventListener('click', function () {
    if (index != 0) {
        index--
    }
    changeImage(-1)
    changeBullet()
})

next.addEventListener('click', function () {
    if (index != imgs.length - 1) {
        index++
    }
    changeImage(1)
    changeBullet()
})

function changeImage(num) {
    // -1이면 왼쪽, 1이면 오른쪽

    if (num == -1 && move < 0) {
        move += 500
    } else if (num == 1 && move > -500 * (imgs.length - 1)) {
        move -= 500
    }
    document.querySelector('.sectionImage ul li').style.marginLeft = `${move}px`
    document.querySelector('.sectionImage ul li').style.transition = '0.5s'
}

function changeBullet() { 
    bullets.forEach((bullet, i) => {
        //현재 이미지는 흰색, 그 외 회색
        if (i == index) {
            bullet.style.backgroundColor = 'rgba(255,255,255,0.7)'
        } else {
            bullet.style.backgroundColor = 'rgba(0,0,0,0.3)'
        }
    })
}


// -------------------------footer-----------------------
function toggleLike() {
    let like = document.getElementById('sectionFooterImgLike')
    let imgSrc = like.src

    if (imgSrc.includes('fill')) {
        like.src = './asset/like.png'
    } else {
        like.src = './asset/like_fill.png'
    }
}