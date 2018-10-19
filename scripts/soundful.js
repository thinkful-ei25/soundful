'use strict';

const soundful = (function () { 

  function render(){ 
    console.log('rendered');
  }

  function handleWaveType(){ 
    console.log('handleWaveType');
    render(); 
  }

  function handleFrequency(){ 
    console.log('handleFrequency');
    render(); 
  }

  function handleTransport(){ 
    console.log('handlTransport');
    render(); 
  }

  function handleAddSound(){ 
    console.log('handleAddSound');
    render(); 
  }

  function bindEventListeners(){ 
    handleWaveType(); 
    handleFrequency(); 
    handleTransport(); 
    handleAddSound(); 
  }

  return { render, bindEventListeners}; 

})(); 



