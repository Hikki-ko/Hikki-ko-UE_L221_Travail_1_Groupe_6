/* tutoriel : https://www.youtube.com/watch?v=WOSaNbpHNqU */
document.addEventListener('DOMContentLoaded', function() {

    /* plusieurs boutons, application de l'effet à chacun */
    const tipslink = document.querySelectorAll('.tips-link span');

    tipslink.forEach(function(tipslink) {

        tipslink.onmousemove = function(e){
            /* récupération de la position et des dimensions des liens */
            const rect = tipslink.getBoundingClientRect();
            
            /* récupération de la position de la souris */
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            tipslink.style.setProperty('--x', x + 'px');
            tipslink.style.setProperty('--y', y + 'px');
    
        }
    });
    
});