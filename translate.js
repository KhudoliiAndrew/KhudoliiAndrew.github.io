/*----------------------------------------translate---------------------------------------------------------------------------*/
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];
if(select){
  select.addEventListener('change' , changeURLLanguage);
}
function changeURLLanguage(){
  let lang = select.value;
  location.href = window.location.pathname + '#'+lang;
  location.reload();
}

function changeLanguage(){
  let hash = window.location.hash;
  hash = hash.substr(1);
  if(!allLang.includes(hash)){
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['name'][hash];
  document.querySelector('.lng-description').innerHTML = langArr['description'][hash];
  document.querySelector('.btn-large').innerHTML = langArr['btn-large'][hash];
  document.querySelector('.bttn').innerHTML = langArr['bttn'][hash];
  document.querySelector('.firstAdd').innerHTML = langArr['firstAdd'][hash];
  document.querySelector('.firstAddDescription').innerHTML = langArr['firstAddDescription'][hash];
}
changeLanguage();