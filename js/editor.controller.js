var gElCanvas = document.querySelector('#my-canvas')
var gCtx = gElCanvas.getContext('2d');
var gTxtSizes = []


var gStrokeColor = 'black'

function init() {
    renderGallery()
    renderMeme()
    renderStickers()
    
    gSavedMemes = createSavedMemes()
}

function onStickerSelect(el) {
    const elImage = el.querySelector('img')
    console.log(elImage)
    const sticker = elImage.getAttribute('src')
    console.log(sticker)
    var img = new Image()
    img.src = sticker
    gCtx.drawImage(img, 0, 100, 60, 60)
}



function renderMeme() {
    var lines = getMemeLines()
    console.log(lines)
    var img = new Image()
    img.src = getImageById().url
    
    // img.addEventListener("load", () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTexts(lines)
        
    // })
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

function setStartAlignment(line, mesurements) {
    let startX = line.loc.x
    if (line.align === 'center') {
        startX = gElCanvas.width /2 - mesurements.width
        if (startX < 0) {
            startX = (gElCanvas.width / 2) - (mesurements.width /2)
        }
    } else if (line.align === 'right') {
        startX = gElCanvas.width - mesurements.width
    }
    return startX
}

function renderTexts(texts) {

    texts.forEach((text, idx) => {
 
        gCtx.strokeStyle = text.strokeColor
        gCtx.fillStyle = text.color

        gCtx.font = `${text.size}px Impact`
     
        const mesurements = getLineMesurements(text)
        const startX = setStartAlignment(text, mesurements)
        console.log(startX)
        gCtx.fillText(text.txt, startX, mesurements.y, mesurements.width, text.size)
        gCtx.strokeText(text.txt, startX, mesurements.y, mesurements.width, text.size)
        var text_width = gCtx.measureText(text).width;
        console.log('idx', idx, 'align', text.align)
        // gCtx.textAlign = text.align
        gTxtSizes.push({idx: idx, textWidth: text_width + gCtx.lineWidth})
    });
}

function onSaveMeme() {
    saveMeme()
}

function isLineSelected() {
  
}

function getLineMesurements(line) {
   const { width } = gCtx.measureText(line)
   const height = line.loc.y - gCtx.measureText(line).fontBoundingBoxDescent
   const rect = {x: line.loc.x, y: line.loc.y, width, height }
   return rect
}

function createLineRect(line) {

}


function onSetChangeLine() {
    //draw canvas
    
    var lineIdx = setChangeLine()
    let line = getCurrLine()
    renderMeme()
    console.log('line idx', lineIdx)
    console.log('line', line)

    //Draw lines
    const mesurements = getLineMesurements(line)
    gCtx.strokeStyle = '#FFFFFF';
    gCtx.strokeRect(mesurements.x, mesurements.y - line.size, gElCanvas.width, line.size)
  
    document.querySelector('.line-num').innerText = `You are on line number ${lineIdx +1}`
    // gCtx.stroke();
}

function onAddLine() {
    // addLine()
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

function renderStickers() {
    const stickers = getStickersForDisplay()
    const strHTMLs = stickers.map(
        (sticker) => 
        `<a data-id=${sticker.id} onclick="onStickerSelect(this)" href="#"><img src="${sticker.src}"></a>`
    )
    document.querySelector('.stickers-container').innerHTML = strHTMLs.join('')
  
  }

  function onMoveToPage(page) {
    moveToPage(page)
    renderStickers()
}