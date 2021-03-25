window.addEventListener("DOMContentLoaded", (event) => {
  const i18n = domI18n({
    selector: "[data-translatable]",
    separator: " // ",
    languages: ["fr-FR", "en"],
    defaultLanguage: "fr-FR",
  });

  const switchBtn = document.querySelector("#switch_btn");
  const currentLanguage = localStorage.getItem("langue");
  const UKFlagSrc = "./assets/images/icons/UK_flag.png";
  const FranceFlagSrc = "./assets/images/icons/France_flag.png";

  function switchLanguageFlag(imgSrc, flag, language) {
    i18n.changeLanguage(language);
    switchBtn.className = flag;
    switchBtn.src = imgSrc;
    localStorage.setItem("langue", flag);
  }

  function checkLanguage() {
    if (!currentLanguage) {
      switchBtn.classList.add("tochange");
      switchLanguageFlag(UKFlagSrc, "switch-to-en-btn", "fr-FR");
    } else if (currentLanguage === "switch-to-en-btn") {
      switchLanguageFlag(UKFlagSrc, "switch-to-en-btn", "fr-FR");
    } else if (currentLanguage === "switch-to-fr-btn") {
      switchLanguageFlag(FranceFlagSrc, "switch-to-fr-btn", "en");
    }
  }

  setTimeout(checkLanguage, 300);

  switchBtn.addEventListener("click", () => {
    switch (switchBtn.className) {
      case "switch-to-en-btn":
        switchLanguageFlag(FranceFlagSrc, "switch-to-fr-btn", "en");
        break;
      case "switch-to-fr-btn":
        switchLanguageFlag(UKFlagSrc, "switch-to-en-btn", "fr-FR");
        break;
      default:
        break;
    }
  });
});
