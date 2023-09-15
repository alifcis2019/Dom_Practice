let rightButton = document.querySelector(".imageSlider__buttons .right")
let leftButton = document.querySelector(".imageSlider__buttons .left")
let imgList = document.querySelectorAll(".imageSlider__img img")
let activeImage = document.querySelector(".imageSlider__img .active")

rightButton.addEventListener('click',function(e){
    let sourec=imgList[0].getAttribute('src')
    imgList[0].setAttribute('src',imgList[1].getAttribute('src'))
    for (let i =1 ; i < imgList.length;i++)
    {
        if(i == imgList.length-1)
            imgList[i].setAttribute('src',sourec)
        else
            imgList[i].setAttribute('src',imgList[i+1].getAttribute('src'))
    }
})

leftButton.addEventListener('click',function(e){
    let sourec=imgList[0].getAttribute('src')
    imgList[0].setAttribute('src',imgList[imgList.length-1].getAttribute('src'))
    for (let i =imgList.length-1 ; i >=1;i--)
    {
        if(i == 1)
            imgList[i].setAttribute('src',sourec)
        else
            imgList[i].setAttribute('src',imgList[i-1].getAttribute('src'))
    }
})

