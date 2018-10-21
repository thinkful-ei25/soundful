/* global $ */ 
'use strict';

// eslint-disable-next-line no-unused-vars
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

  // eslint-disable-next-line no-unused-vars
  const get = function(path, query) { 
    return $.ajax({ 
      type: 'GET', 
      url: path,
      dataType: 'json', 
      data: query
    });
  }; 

  return { 
    get,
    create
  }; 

}()); 