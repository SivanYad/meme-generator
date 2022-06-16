
function renderGallery() {
  const images = getImages()
  // console.log(images)
  let strHtml = ''
  strHtml += images
    .map((image, idx) => {
      return (`<a href ="#" onclick="onImgSelect(${idx})"><img class="image image${idx}" src="${image.url}"></a>`)
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
  document.querySelector('.gallery').classList.add('hidden')
  document.querySelector('.gallery').classList.remove('grid')
  document.querySelector('.meme-editor').classList.remove('hidden')
  renderMeme()
}
