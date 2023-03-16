window.addEventListener('load', function(){
    document.querySelector('.loader').classList.add('hide');
});
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    document.querySelector('.loader').style.display = "none";
}