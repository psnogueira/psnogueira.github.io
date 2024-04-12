/** How to add translations:
 *  
 * 1. Create a tag of the same name in all translations inside the Dictionaty.
 * Example: 
 * Dictionary = 
 *  { 
 *      en: {title: "Title",}, 
 *      pt: {title: "Título",} 
 *  }
 * 
 * 
 * 2. Create an id and add lang="en" for the tag the you want to translate inside the .html file.
 * Example:
 * before: <h1 id="title" lang="en">The Great Mountains</h1>
 * after: <h1 >The Great Mountains</h1>
 * 
 * 
 * 3. Create the variable of the tag inside this .js file.
 * Example:
 * var title = document.getElementById("title");
 * 
 * 
 * 4. Update the variable inside the document.addEventListener("DOMContentLoaded").
 * Example:
 *  document.addEventListener('DOMContentLoaded', () => { 
 *      title = document.getElementById("title"); 
 *  })
 * 
 * 
 * 5. Add the change you want inside the function changeLanguage().
 * Example:
 *  function changeLanguage()
 *  {
 *      title.innerHTML = translations[nextLanguage].title;
 *  }
 */

const translations = {
    en: {
      flag_src:"assets/images/us.svg",
      welcome: 'Welcome to my website!',
      switchLanguage: "Switch Language",
      box_title: "The Great Mountains",
      body1: "Explore our articles on <b>adventure travel</b>, <b>camping tips</b>, and <b>nature photography</b>. Discover hidden trails, learn how to pitch a tent like a pro, and get inspired by breathtaking landscapes captured through the lens.",
      button_seemore: "See more",
    },
    pt: {
      flag_src:"assets/images/br.svg",
      welcome: 'Bem vindo ao meu site!',
      switchLanguage: "Trocar Idioma",
      box_title: "As Grandes Montanhas",
      body1: "Explore nossos artigos sobre <b>trilhas</b>, <b>dicas de acampamento</b>, e <b>fotografia da natureza</b>. Descubra trilhas ocultas, Aprenda como montar uma barraca como um pro, e seja inspirado por paisagens magníficas capturadas através das lentes.",
      button_seemore: "Veja mais",
    },
};

// Tags variables
var button = document.getElementById("languageButton");
var button_image = document.getElementById("languageButtonImage");
var title = document.getElementById("title1");
var body1 = document.getElementById("body1");
var button_seemore = document.getElementById("button_seemore");

let preference = "languagePreference";
let defaultPreference = "en";

// Update variables after html document is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
  button = document.getElementById("languageButton");
  button_image = document.getElementById("languageButtonImage");
  title = document.getElementById("title1");
  body1 = document.getElementById("body1");
  button_seemore = document.getElementById("button_seemore");

  if (localStorage.getItem(preference) == "pt") {
    changeLanguage();
  }

})

function changeLanguage()
{
    // Toggle between English and Portuguese
    const currentLanguage = document.documentElement.lang;
    const nextLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    document.documentElement.lang = nextLanguage;

    localStorage.setItem(preference, nextLanguage);

    title.innerHTML = translations[nextLanguage].box_title;
    //button.innerHTML = translations[nextLanguage].switchLanguage;
    button_image.src = translations[nextLanguage].flag_src;
    body1.innerHTML = translations[nextLanguage].body1;
    button_seemore.innerHTML = translations[nextLanguage].button_seemore;
    // Update other elements with their respective translations
}

