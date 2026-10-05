// 言葉の切り替え。選んだ言葉は、この端末だけに覚える(読めない時も、ページはそのまま動く)
  (function () {
    var root = document.documentElement, btn = document.getElementById('lang');
    function set(l) { root.lang = l; btn.textContent = l === 'ja' ? 'English' : '日本語'; try { localStorage.setItem('lang', l); } catch (e) {} }
    var saved = null; try { saved = localStorage.getItem('lang'); } catch (e) {}
    set(saved || ((navigator.language || 'ja').indexOf('ja') === 0 ? 'ja' : 'en'));
    btn.addEventListener('click', function () { set(root.lang === 'ja' ? 'en' : 'ja'); });
  })();
