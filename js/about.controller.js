function goToAbout() {
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.gallery').classList.remove('grid')
    document.querySelector('.meme-editor').classList.add('hidden')
    document.querySelector('.saved-memes').classList.remove('grid')
    document.querySelector('.saved-memes').classList.add('hidden')
    document.querySelector('.about-container').classList.remove('hidden')  
}