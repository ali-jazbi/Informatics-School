document.querySelector('main').style.display = 'none';
window.addEventListener('load', function(){
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('main').style.display = 'block'; 
});
// Hide overflow initially
document.body.style.overflow = 'hidden';
document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
                document.body.style.overflow = 'visible';
        }, 10)
});