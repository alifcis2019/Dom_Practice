let images = document.querySelectorAll(".backgroundImage img")
for (let i =0 ; i < images.length;i++) {
    images[i].addEventListener('click',(e) => {
        document.body.setAttribute("style", `background-image: url(${e.target.getAttribute('src')});`);
    })
}