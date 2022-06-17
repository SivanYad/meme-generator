// var gMeme.selectedLineIdx = 0
// var gLineIdx = 0

function getMeme() {
    return getMeme
}

function setImg(imgIdx) {
    gMeme.selectedImgId = gImgs[imgIdx].id
    // gMeme.selectedLineIdx = imgIdx
}

function getMemeLines() {
    return gMeme.lines
}

function setLineTxt(inputVal) {
    gMeme.lines[gMeme.selectedLineIdx].txt = inputVal
}

function setColorFill(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setColorStroke(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function increaseTextSize() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    // console.log(gMeme.lines[gLineIdx].size)
}

function decreaseTextSize() {
    gMeme.lines[gMeme.selectedLineIdx].size--
}

function getImageById() {
    var imgId = gMeme.selectedImgId
    var img = gImgs.find((img) => img.id ===imgId)
    return img
}

function setChangeLine() {
    if ((gMeme.selectedLineIdx + 1) > (gMeme.lines.length -1)) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
    return gMeme.selectedLineIdx;
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
    gMeme.selectedLineIdx = gMeme.lines.length -1
    console.log(gMeme.lines)
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function moveDownText() {
    console.log(gMeme.selectedLineIdx)
    gMeme.lines[gMeme.selectedLineIdx].loc.y += 5
}

function moveUpText() {
    console.log(gMeme.selectedLineIdx)
    gMeme.lines[gMeme.selectedLineIdx].loc.y -= 5
}

function setTextAlign(alignment) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignment
}

