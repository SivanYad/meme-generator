

function getImageById() {
    var imgId = gMeme.selectedImgId
    var img = gImgs.find((img) => img.id ===imgId)
    return img
}