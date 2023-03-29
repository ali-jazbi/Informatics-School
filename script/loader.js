document.querySelector('main').style.display = 'none';
// Hide overflow initially
document.body.style.overflow = 'hidden';
document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
                document.body.style.overflow = 'visible';
        }, 10)
});
window.addEventListener('load', function(){
        document.querySelector('.loader').classList.add('hide');
        document.querySelector('main').style.display = 'block'; 
});
