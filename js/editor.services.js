// var gMeme.selectedLineIdx = 0
// var gLineIdx = 0

const STORAGE_KEY = 'memesDB'

function getMeme() {
  return getMeme
}


function createSavedMemes() {
  var savedMemes = loadFromStorage(STORAGE_KEY)
  if (!savedMemes) {
    savedMemes = []
  }
  return savedMemes
}

function setImg(imgIdx) {
  gMeme.selectedImgId = gImgs[imgIdx].id
  console.log(imgIdx)
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
  var img = gImgs.find((img) => img.id === imgId)
  return img
}

function setChangeLine() {
  if (gMeme.selectedLineIdx + 1 > gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx++
  }
  return gMeme.selectedLineIdx
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
      y: 200,
    },
  }
  gMeme.lines.push(newLine)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
  console.log(gMeme.lines)
}

function removeLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
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

function saveMeme() {
  const newMeme = {
    memeId: makeId(),
    ...gMeme,
  }
  gSavedMemes.push(newMeme)
  saveToStorage(STORAGE_KEY, gSavedMemes)
}

function randomizeMeme() {
  gMeme.selectedImgId = gImgs[getRandomIntInclusive(1, gImgs.length)]
  gMeme.selectedLineIdx = 0
  gMeme.lines[0].txt =
    memesSentences[getRandomIntInclusive(0, memesSentences.length - 1)]

}

function getLines() {
  return gMeme.lines;
}
