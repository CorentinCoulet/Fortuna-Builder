import { I18n } from "i18n-js";
import fr from "../lang/fr.json";
import en from "../lang/en.json";
import es from "../lang/es.json";
import pt from "../lang/pt.json";

const i18n = new I18n({
    ...fr,
    ...en,
    ...es,
    ...pt
});

i18n.defaultLocale = "fr-FR";
i18n.locale = "fr-FR";

load();

function load(){
    document.getElementById("buildName").innerHTML = i18n.t("buildName");
    document.getElementById("lvlLang").innerHTML = i18n.t("lvlLang");
    document.getElementById("guild").innerHTML = i18n.t("guild");
    document.getElementById("nation").innerHTML = i18n.t("nation");
    document.getElementById("hp").innerHTML = i18n.t("hp");
    document.getElementById("ap").innerHTML = i18n.t("ap");
    document.getElementById("wp").innerHTML = i18n.t("wp");
    document.getElementById("armor").innerHTML = i18n.t("armor");
    document.getElementById("mp").innerHTML = i18n.t("mp");
    document.getElementById("armorReceived").innerHTML = i18n.t("armorReceived");
    document.getElementById("armorGiven").innerHTML = i18n.t("armorGiven");
    document.getElementById("damageDealt").innerHTML = i18n.t("damageDealt");
    document.getElementById("critical").innerHTML = i18n.t("critical");
    document.getElementById("initiative").innerHTML = i18n.t("initiative");
    document.getElementById("dodge").innerHTML = i18n.t("dodge");
    document.getElementById("wisdom").innerHTML = i18n.t("wisdom");
    document.getElementById("control").innerHTML = i18n.t("control");
    document.getElementById("heals").innerHTML = i18n.t("heals");
    document.getElementById("block").innerHTML = i18n.t("block");
    document.getElementById("range").innerHTML = i18n.t("range");
    document.getElementById("lock").innerHTML = i18n.t("lock");
    document.getElementById("prospecting").innerHTML = i18n.t("prospecting");
    document.getElementById("will").innerHTML = i18n.t("will");
    document.getElementById("critMastery").innerHTML = i18n.t("critMastery");
    document.getElementById("rearMastery").innerHTML = i18n.t("rearMastery");
    document.getElementById("meleeMastery").innerHTML = i18n.t("meleeMastery");
    document.getElementById("healMastery").innerHTML = i18n.t("healMastery");
    document.getElementById("critResist").innerHTML = i18n.t("critResist");
    document.getElementById("rearResist").innerHTML = i18n.t("rearResist");
    document.getElementById("distanceMastery").innerHTML = i18n.t("distanceMastery");
    document.getElementById("berserkMastery").innerHTML = i18n.t("berserkMastery");
}

document.addEventListener("DOMContentLoaded", function () {
    
    var langDropdowns = document.querySelector(".lang-dropdown");
    var flag = langDropdowns.querySelector(".flag");
    var content = langDropdowns.querySelector(".dropdown-content");

    for (const dropdown of content.children) {
        dropdown.addEventListener("click", function(){
            flag.querySelector("img").src=dropdown.querySelector("img").src;
            i18n.locale = dropdown.getAttribute("data-lang");
            load();
        });
    };
});