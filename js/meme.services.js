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

function setLineTxt(inputVal) {
    gMeme.lines[gLineIdx].txt = inputVal
}

function setColorFill(color) {
    gMeme.lines[gLineIdx].color = color
}

function setColorStroke(color) {
    gMeme.lines[gLineIdx].strokeColor = color
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

function setChangeLine() {
    if ((gLineIdx + 1) > (gMeme.lines.length -1)) {
        gLineIdx = 0
    } else {
        gLineIdx++
    }
    return gLineIdx;
}

function addLine() {
    var newLine = {
        txt: 'Here is your new line',
        size: 50,
        align: 'left',
        color: 'white',
        strokeColor: 'black', 
        loc: {
            x: 20,
            y: 200
        }
    }
    gMeme.lines.push(newLine)
    gLineIdx = gMeme.lines.length -1
    console.log(gMeme.lines)
}

function removeLine() {
    gMeme.lines.splice(gLineIdx, 1)
}

