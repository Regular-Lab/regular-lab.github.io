document.querySelector('site-header').outerHTML = `
  <div class="header">
    <a href="index.html">
      <img src="logo.png" alt="Regular Lab" />
    </a>
  </div>`;

document.querySelector('site-footer').outerHTML = `
  <div class="footer">
    <div class="footer-inner">
      © Regular Lab FlexCo · <a href="impressum.html">Impressum</a> ·
      <a href="privacy.html">Privacy policy</a>
    </div>
  </div>`;
