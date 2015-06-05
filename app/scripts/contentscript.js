'use strict';

console.log('logentries extension loaded');

var i = setInterval(function(){
    var e = document.getElementById('le-in-app-toaster-bottom');
    if(e){
        e.style.display = 'none';
        window.clearInterval(i);
        console.log('stop');

        document.getElementById('sidebarbutton-transparent').click();
    }
}, 1000);
