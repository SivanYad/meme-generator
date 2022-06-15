var gElCanvas = document.querySelector('#my-canvas')
var gCtx = gElCanvas.getContext('2d');

renderMeme()

function renderMeme() {
    var img = new Image()
    img.src = getImageById().url
    console.log(img.src)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
    }
}
