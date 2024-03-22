function disableBodyInteractionForTime(milliseconds: number) {
    document.body.classList.add('disabled')
  
    setTimeout(function() {
      document.body.classList.remove('disabled')
    }, milliseconds)
  }

export default disableBodyInteractionForTime