
console.log("Hello I am Mangesh Wagh")

function addLanguage(LangName){

    let li = document.createElement('li');
    li.innerHTML= `${LangName}`;
    let ul = document.querySelector('.language');

    ul.appendChild(li);
}
addLanguage("marathi");
addLanguage("English");
addLanguage("Core Java");
addLanguage("Pythone");
addLanguage("C, CPP");

function addOptiLanguage(LangName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(LangName));
    document.querySelector('.language').appendChild(li);

}
addOptiLanguage("Mangesh");
const secondLanguage = document.querySelector("li:nth-child(2)");
const newlan = document.createElement('li');
newlan.textContent = "RajaBhadya";
secondLanguage.replaceWith(newlan);

let lstlineremove = document.querySelector('li:last-child');
lstlineremove.remove();

