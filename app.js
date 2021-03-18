const i18n = domI18n({
  selector: '[data-translatable]',
  separator: ' // ',
  languages: ['en', 'fr'],
  defaultLanguage: 'fr',
});

document.getElementById('switch-fr-btn').addEventListener('click', () => {
  i18n.changeLanguage('en');
});
document.getElementById('switch-en-btn').addEventListener('click', () => {
  i18n.changeLanguage('fr');
});
