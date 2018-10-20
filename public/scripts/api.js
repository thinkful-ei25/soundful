'use strict';

const api = (function (){ 
  // eslint-disable-next-line no-unused-vars
  const create = function(path, obj) { 
    return $.ajax({ 
      type: 'POST', 
      url: path, 
      contentType: 'application/json', 
      dataType: 'json', 
      processData:false,  
      data: JSON.stringify(obj)
    }); 
  }; 

}); 