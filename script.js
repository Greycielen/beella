if (window.lucide) lucide.createIcons();

(function () {
  var buttons = document.querySelectorAll('.currency-toggle button');
  var values = document.querySelectorAll('.price-row .value, .pkg-value .value');
  var eurNotes = document.querySelectorAll('[data-eur-only]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cur = btn.getAttribute('data-currency');
      values.forEach(function (v) {
        v.textContent = cur === 'eur' ? v.getAttribute('data-eur') : v.getAttribute('data-brl');
      });
      eurNotes.forEach(function (n) { n.hidden = cur !== 'eur'; });
    });
  });

  document.querySelectorAll('[data-eur-only]').forEach(function (n) { n.hidden = true; });
})();

(function () {
  var form = document.getElementById('waitlist-form');
  var status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    if (form.action.indexOf('SEU_ID_AQUI') !== -1) {
      e.preventDefault();
      status.textContent = 'Formulário ainda não conectado — configure o Formspree (veja README).';
      status.className = 'form-status err';
      return;
    }
    e.preventDefault();
    var data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        form.reset();
        status.textContent = 'Pronto! Você está na lista — em breve entramos em contato.';
        status.className = 'form-status ok';
      } else {
        status.textContent = 'Algo deu errado. Tenta de novo em instantes?';
        status.className = 'form-status err';
      }
    }).catch(function () {
      status.textContent = 'Algo deu errado. Tenta de novo em instantes?';
      status.className = 'form-status err';
    });
  });
})();
