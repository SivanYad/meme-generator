
function renderSavedMemes() {
    const savedMemes = getSavedMemes()
    const images = getImages()
    const elSavedMemes = document.querySelector('.saved-memes')
    let strHtml = ''
    let elMemes = savedMemes.map((meme) => {
        const { selectedImgId: idx,  selectedLineIdx: lineIdx} = meme
        // console.log('idx', idx)
        console.log(images[idx])
        return (`<img onclick="onImgSelect(${idx}) class="image image${idx} src="${images[idx].url}">`)
        
    }).join('')
    strHtml+= elMemes
    console.log(strHtml)
    elSavedMemes.innerHTML = strHtml
}

function goToSavedMemes() {
  document.querySelector('.gallery').classList.add('hidden')
  document.querySelector('.gallery').classList.remove('grid')
  document.querySelector('.meme-editor').classList.add('hidden')
  document.querySelector('.saved-memes').classList.remove('hidden')
  document.querySelector('.saved-memes').classList.add('grid')
  document.querySelector('.about-container').classList.add('hidden')  

  renderSavedMemes()
  
}
