var gLineIdx = 0

function getMeme() {
    return getMeme
}

function setImg(imgIdx) {
    gMeme.selectedImgId = gImgs[imgIdx].id
    gMeme.selectedLineIdx = imgIdx
}

function getMemeLines() {
    return gMeme.lines
}

function setLineTxt(inputVal, lineIdx) {
    gMeme.lines[lineIdx].txt = inputVal
}

function setColorFill(color, linIdx = 0) {
    gMeme.lines[linIdx].color = color
}

function setColorStroke(color, lineIdx = 0) {
    gMeme.lines[lineIdx].strokeColor = color
}

function increaseTextSize() {
    gMeme.lines[gLineIdx].size++
    // console.log(gMeme.lines[gLineIdx].size)
}

function decreaseTextSize() {
    gMeme.lines[gLineIdx].size--
}

function getImageById() {
    var imgId = gMeme.selectedImgId
    var img = gImgs.find((img) => img.id ===imgId)
    return img
}


