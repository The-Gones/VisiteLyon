const i18n = domI18n({
  selector: "[data-translatable]",
  separator: " // ",
  languages: ["fr", "en"],
  defaultLanguage: "fr",
});

const switchBtn = document.querySelector("#switch_btn");
const currentLanguage = localStorage.getItem("langue");
const UKFlagSrc = "./assets/images/Icons/UK_flag.png";
const FranceFlagSrc = "./assets/images/Icons/France_flag.png";

function switchLanguageFlag(imgSrc, flag, language) {
  i18n.changeLanguage(language);
  switchBtn.className = flag;
  switchBtn.src = imgSrc;
  localStorage.setItem("langue", flag);
}

if (!currentLanguage) {
  switchBtn.classList.add("tochange");
  switchLanguageFlag(UKFlagSrc, "switch-to-en-btn", "fr");
} else if (currentLanguage === "switch-to-en-btn") {
  switchLanguageFlag(UKFlagSrc, "switch-to-en-btn", "fr");
} else if (currentLanguage === "switch-to-fr-btn") {
  switchLanguageFlag(FranceFlagSrc, "switch-to-fr-btn", "en");
}

switchBtn.addEventListener("click", () => {
  switch (switchBtn.className) {
    case "switch-to-en-btn":
      switchLanguageFlag(FranceFlagSrc, "switch-to-fr-btn", "en");
      break;
    case "switch-to-fr-btn":
      switchLanguageFlag(UKFlagSrc, "switch-to-en-btn", "fr");
      break;
    default:
      break;
  }
});
