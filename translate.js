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
  document.querySelector('.SecondAdd').innerHTML = langArr['SecondAdd'][hash];
  document.querySelector('.secondAddDescription').innerHTML = langArr['secondAddDescription'][hash];
  document.querySelector('.ThirdAdd').innerHTML = langArr['ThirdAdd'][hash];
  document.querySelector('.thirdAddDescription').innerHTML = langArr['thirdAddDescription'][hash];
  document.querySelector('.fourthAdd').innerHTML = langArr['fourthAdd'][hash];
  document.querySelector('.fourthAddDescription').innerHTML = langArr['fourthAddDescription'][hash];
  document.querySelector('.fiveAdd').innerHTML = langArr['fiveAdd'][hash];
  document.querySelector('.fiveAddDescription').innerHTML = langArr['fiveAddDescription'][hash];
  document.querySelector('.sixAdd').innerHTML = langArr['sixAdd'][hash];
  document.querySelector('.sixAddDescription').innerHTML = langArr['sixAddDescription'][hash];
  document.querySelector('.IconCreator').innerHTML = langArr['IconCreator'][hash];
  document.querySelector('.Developer').innerHTML = langArr['Developer'][hash];
  document.querySelector('.Sitecreator').innerHTML = langArr['Sitecreator'][hash];
  
}
changeLanguage();