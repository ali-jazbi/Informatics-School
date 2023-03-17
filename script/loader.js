document.querySelector('body').style.overflow = 'hidden';
document.querySelector('main').style.display = 'none';
document.querySelector('body').style.height = 'auto';
window.addEventListener('load', function(){
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('main').style.display = 'block'; 
        document.querySelector('body').style.overflow = 'auto';
});