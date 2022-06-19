const PAGE_SIZE = 3
var gPageIdx = 0
var gStickersCount


var gStickers = [
    { id: 0, src: 'stickers-imgs/sticker-1.png' },
    { id: 1, src: 'stickers-imgs/sticker-2.png' },
    { id: 2, src: 'stickers-imgs/sticker-3.png' },
    { id: 3, src: 'stickers-imgs/sticker-4.png' },
    { id: 4, src: 'stickers-imgs/sticker-5.png' },
    { id: 5, src: 'stickers-imgs/sticker-6.png' },
    { id: 6, src: 'stickers-imgs/sticker-7.png' },
    { id: 7, src: 'stickers-imgs/sticker-8.png' },
    { id: 8, src: 'stickers-imgs/sticker-9.png' },
    { id: 9, src: 'stickers-imgs/sticker-10.png' },
    { id: 10, src: 'stickers-imgs/sticker-11.png' },
    { id: 11, src: 'stickers-imgs/sticker-12.png' },
    { id: 12, src: 'stickers-imgs/sticker-13.png' },
    { id: 13, src: 'stickers-imgs/sticker-14.png' },
    { id: 14, src: 'stickers-imgs/sticker-15.png' },
]

function moveToPage(page) {
    if (page === '+') gPageIdx++
    if (page === '-') gPageIdx--
  }

  function getStickersForDisplay() {
    var stickers = gStickers
    gStickersCount = stickers.length
    if (gPageIdx >= gStickersCount / PAGE_SIZE) {
        gPageIdx = 0
    }
    if (gPageIdx < 0) {
        gPageIdx = gStickersCount / PAGE_SIZE - 1
    }
    const startIdx = gPageIdx * PAGE_SIZE
    stickers = stickers.slice(startIdx, startIdx + PAGE_SIZE)
    return stickers
}

function getPageCount() {
    return Math.ceil(gStickersCount / PAGE_SIZE)
}