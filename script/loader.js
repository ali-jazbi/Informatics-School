document.querySelector('body').style.overflowY = 'hidden';
document.querySelector('main').style.display = 'none';
window.addEventListener('load', function(){
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('main').style.display = 'block'; 
        document.querySelector('body').style.overflowY = 'auto';
        document.querySelector('body').style.height = '3000px';
});