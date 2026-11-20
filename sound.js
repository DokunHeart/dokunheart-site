// 動画の音のボタン(2026-11-20、MYSTICA「音も入れて欲しい」)。押すと音を出す ⇔ 消す。
// ページの決まり(Content-Security-Policy)で、ページの中に直に書いた script は動かないので、別のファイルに置く。
document.querySelectorAll('.shot .sound').forEach(function (b) {
  var v = b.parentElement.querySelector('video');
  b.addEventListener('click', function () {
    v.muted = !v.muted;
    if (!v.muted) { v.currentTime = 0; v.play(); }
    b.setAttribute('aria-pressed', String(!v.muted));
    b.querySelector('.ja').textContent = v.muted ? '🔇 音を出す' : '🔊 音を消す';
    b.querySelector('.en').textContent = v.muted ? '🔇 Sound on' : '🔊 Sound off';
  });
});
