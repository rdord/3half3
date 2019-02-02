function toggleMute(element) {
  element.muted = true;
  element.play()
}

window.addEventListener('load', function () {
  setTimeout(function () {
      toggleMute(document.querySelector('video'));
  }, 1000);
});
