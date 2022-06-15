var elCanvas = document.querySelector('#my-canvas')
var gCtx = elCanvas.getContext('2d');



function renderMeme() {
    var img = new Image()
    img.src = getImageById().url
    // console.log(img.src)
}

getImageById