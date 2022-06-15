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


function getImageById() {
    var imgId = gMeme.selectedImgId
    var img = gImgs.find((img) => img.id ===imgId)
    return img
}


