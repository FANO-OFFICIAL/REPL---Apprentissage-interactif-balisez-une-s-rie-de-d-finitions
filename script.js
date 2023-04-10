var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');

var codeResult = '\n'+ 
'<dl>\n'+ 
'  <dt>HTML</dt>\n'+ 
'  <dd>Langage informatique utilisé pour structurer un site web.</dd>\n'+ 
'  <dt>CSS</dt>\n'+ 
'  <dd>Langage informatique utilisé pour la mise en page d\'un site web.</dd>\n'+ 
'  <dt>JavaScript</dt>\n'+ 
'  <dd>Langage informatique utilisé pour rendre interactive les éléments d\'un site web.</dd>\n'+ 
'  <dd>Il peut être utilisé aussi pour communiquer avec un serveur.</dd>\n'+ 
'</dl>\n'+ 
'';
var htmlCodeInit = '\n'+ 
'\n'+ 
'HTML\n'+ 
'    Langage informatique utilisé pour structurer un site web.\n'+ 
'CSS\n'+ 
'    Langage informatique utilisé pour la mise en page d\'un site web.\n'+ 
'JavaScript\n'+ 
'    Langage informatique utilisé pour rendre interactive les éléments d\'un site web.\n'+ 
'    Il peut être utilisé aussi pour communiquer avec un serveur. \n'+ 
'';
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);