import { I18n } from "i18n-js";
import fr from "./lang/fr.json";
import en from "./lang/en.json";
import es from "./lang/es.json";
import pt from "./lang/pt.json";

const i18n = new I18n({
  fr,
  en,
  es,
  pt
});

load();

const bouton = document.getElementById("lang-content");
bouton.addEventListener("click", function(){
  i18n.locale = "fr";
  load();  
});

function load(){
  document.getElementById("armor").innerHTML = i18n.t("armor");
}

