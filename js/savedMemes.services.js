function getSavedMemes() {
    const memes = loadFromStorage(STORAGE_KEY)
    return memes
}