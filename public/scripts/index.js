/* global $ api STORE soundful*/ 
'use strict';

$(document).ready(function () { 
  soundful.init(); 
  soundful.bindEventListeners(); 

  api.get('/api/sounds')
    .then(response => { 
      console.log(response);
      STORE.sounds = response; 
      soundful.render(); 

    }); 
  
});


