window.addEventListener('keydown', function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.play()
    console.log(audio)
})