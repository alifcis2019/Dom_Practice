// on click image changer
let imgAfterClick = document.querySelector(".after_click img")
let img = document.querySelectorAll(".change_image img")
for (let i =0 ; i < img.length ; i++) {
    img[i].addEventListener('click',(e) => imgAfterClick.setAttribute('src', e.target.getAttribute('src')))
    console.log(imgAfterClick)
}


