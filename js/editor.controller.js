var gElCanvas = document.querySelector('#my-canvas')
var gCtx = gElCanvas.getContext('2d');
var gTxtSizes = []


var gStrokeColor = 'black'

function init() {
    renderGallery()
    renderMeme()
    
    gSavedMemes = createSavedMemes()
}




function renderMeme() {
    var lines = getMemeLines()
    
    var img = new Image()
    img.src = getImageById().url
    // console.log(img.src)
    // img.onload = () => {
    //     gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
    // }
    img.addEventListener("load", () => {
        // console.log(img)
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTexts(lines)
    })
    // var memeTexts = lines.map((line) => line.txt)
}

function clearCanvas() {
    gCtx.globalAlpha = 1;
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.length);
}

function onSetChangeText(input) {
    // console.log(input.value)
    // console.log(typeof lineIdx)
    setLineTxt(input.value)
    renderMeme()
}

function onSetColorFill(color) {
    setColorFill(color)
    renderMeme()
}

function onSetColorStroke(color) {
    setColorStroke(color)
    renderMeme()
}

function onSetIncreaseText() {
    increaseTextSize()
    renderMeme()
}

function onSetDecreaseText() {
    decreaseTextSize()
    renderMeme()
}

function renderTexts(texts) {
    // console.log(texts[0])
    texts.forEach((text, idx) => {
        // console.log(text.txt)
        gCtx.lineWidth = 2
        gCtx.strokeStyle = text.strokeColor
        gCtx.fillStyle = text.color
        // console.log(text.color)
        gCtx.font = `${text.size}px Impact`
        gCtx.fillText(text.txt, text.loc.x, text.loc.y)
        gCtx.strokeText(text.txt, text.loc.x, text.loc.y)
        var text_width = gCtx.measureText(text).width;
        gCtx.textAlign = text.align
        gTxtSizes.push({idx: idx, textWidth: text_width + gCtx.lineWidth})
    });
}

function onSaveMeme() {
    saveMeme()
}

function onSetChangeLine() {
    // gCtx.clearRect(gMeme.lines[selectedLineIdx].loc.x,gMeme.lines[selectedLineIdx].loc.y,gTxtSizes[selectedLineIdx].textWidth, 80)
    var lineIdx = setChangeLine()
    var lines = getMemeLines()
    gCtx.rect(gMeme.lines[lineIdx].loc.x, gMeme.lines[lineIdx].loc.y - gMeme.lines[lineIdx].size, gTxtSizes[lineIdx].textWidth, 80)
    gCtx.strokeStyle = 'white'
    gCtx.stroke()
    document.querySelector('.line-num').innerText = `You are on line number ${lineIdx +1}`
    // console.log(gLineIdx)
    // var newX = lines[lineIdx].loc.x -10
    // var newY =  lines[lineIdx].loc.y -10
    // var length = gElCanvas.height - newY + 10 - lines[lineIdx].size
    // console.log('newX', newX, 'newY', newY, 'length', length)
    // gCtx.rect(newX, newY, gElCanvas.width - 10, length)
    // gCtx.strokeStyle = '#FFFFFF';
    // gCtx.stroke();
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onMoveDownTxt() {
    moveDownText()
    renderMeme()
}

function onMoveUpTxt() {
    moveUpText()
    renderMeme()
}

function onDownloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onUploadImg() {
    uploadImg()
}

function onTextAlign(alignment) {
    setTextAlign(alignment)
    renderMeme()
}

