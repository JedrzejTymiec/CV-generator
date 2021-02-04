import { radioButtonSkills } from "./skill-level.js";
import { setCreativeLanguage } from "./language-level.js";

function setSkills() {
  //ustawienie początkowej wartości umiejętności z localStorage
  let JSlevel = localStorage.getItem("js");
  let SQLlevel = localStorage.getItem("sq");
  let HTMLlevel = localStorage.getItem("ht");
  let CSSlevel = localStorage.getItem("cs");
  let GITlevel = localStorage.getItem("gi");
  let jQuerylevel = localStorage.getItem("jq");
  let Reactlevel = localStorage.getItem("re");
  let Nodelevel = localStorage.getItem("nd");
  let enlevel = localStorage.getItem("en");
  let pllevel = localStorage.getItem("pl");
  let Exlevel = localStorage.getItem("ex");
  let SASSlevel = localStorage.getItem("sa");
  let PSlevel = localStorage.getItem("ps");
  let PLilevel = localStorage.getItem("pli");
  let ENilevel = localStorage.getItem("eni");
  radioButtonSkills("js", JSlevel, "off");
  radioButtonSkills("sq", SQLlevel, "off");
  radioButtonSkills("ht", HTMLlevel, "off");
  radioButtonSkills("cs", CSSlevel, "off");
  radioButtonSkills("gi", GITlevel, "off");
  radioButtonSkills("jq", jQuerylevel, "off");
  radioButtonSkills("re", Reactlevel, "off");
  radioButtonSkills("nd", Nodelevel, "off");
  radioButtonSkills("pl", pllevel, "off");
  radioButtonSkills("en", enlevel, "off");
  radioButtonSkills("ex", Exlevel, "off");
  radioButtonSkills("sa", SASSlevel, "off");
  radioButtonSkills("ps", PSlevel, "off");
  setCreativeLanguage("pl", PLilevel);
  setCreativeLanguage("en", ENilevel);
}

export { setSkills };
