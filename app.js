const i18n = domI18n({
  selector: "[data-translatable]",
  separator: " // ",
  languages: ["fr", "en"],
  defaultLanguage: "fr",
});

const switchBtn = document.getElementById("switch_btn");
switchBtn.addEventListener("click", () => {
  switch (switchBtn.className) {
    case "switch-to-en-btn":
      i18n.changeLanguage("en");
      switchBtn.className = "switch-to-fr-btn";
      switchBtn.src = "assets/images/UK_flag.png";
      break;
    case "switch-to-fr-btn":
      i18n.changeLanguage("fr");
      switchBtn.className = "switch-to-en-btn";
      switchBtn.src = "assets/images/France_flag.png";
      break;
    default:
      break;
  }
});


// document.getElementById('switch-fr-btn').addEventListener('click', () => {
//   i18n.changeLanguage('en');
// });
// document.getElementById('switch-en-btn').addEventListener('click', () => {
//   i18n.changeLanguage('fr');
// });
