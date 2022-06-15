var gElCanvas = document.querySelector('#my-canvas')
var gCtx = gElCanvas.getContext('2d');

var gStrokeColor = 'black'

renderMeme()

function renderMeme() {
    var lines = getMemeLines()
    
    var img = new Image()
    img.src = getImageById().url
    console.log(img.src)
    // img.onload = () => {
    //     gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
    // }
    img.addEventListener("load", () => {
        console.log(img)
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTexts(lines)
    })
    
    // console.log(lines)
    
    // var memeTexts = lines.map((line) => line.txt)
}

function renderTexts(texts) {
    console.log(texts[0])
    texts.forEach((text, idx) => {
        console.log(text.txt)
        gCtx.lineWidth = 2
        gCtx.strokeStyle = gStrokeColor
        gCtx.fillStyle = text.color
        console.log(text.color)
        gCtx.font = `${text.size}px Impact`
        gCtx.fillText(text.txt, 25, 25 + 100 * idx)
        gCtx.strokeText(text.txt, 25, 25 +  100 * idx)
    });
}