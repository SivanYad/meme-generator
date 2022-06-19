
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
  document.querySelector('.meme-editor').classList.add('grid')
  document.querySelector('.about-container').classList.add('hidden')
  renderMeme()
}

function goToGallery() {
  document.querySelector('.gallery').classList.remove('hidden')
  document.querySelector('.gallery').classList.add('grid')
  document.querySelector('.meme-editor').classList.add('hidden')
  document.querySelector('.meme-editor').classList.remove('grid')
  document.querySelector('.saved-memes').classList.add('hidden')
  document.querySelector('.saved-memes').classList.remove('hidden')
}

function onRandomizeMeme() {
  randomizeMeme()
}
