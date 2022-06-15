renderGallery()

function renderGallery() {
  const images = getImages()
  // console.log(images)
  let strHtml = ''
  strHtml += images
    .map((image, idx) => {
      return `<img class="image image${idx}" onclick="onImgSelect(${idx})" src="${image.url}">`
    })
    .join('')
  // console.log(elImagesArr)
  // console.log(strHtml)
  const elGallery = document.querySelector('.gallery')
  elGallery.innerHTML += strHtml
}

function onImgSelect(imageIdx) {
  imageIdx = +imageIdx
  setImg(imageIdx)
  renderMeme()
}
