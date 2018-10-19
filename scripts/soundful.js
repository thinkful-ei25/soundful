/* global $ */ 
'use strict';

const soundful = (function () { 

  function render(){ 
    console.log('rendered');
  }

  function handleWaveType(){ 
    $('#js-add-sound').on('click', function(){ 
      const waveType = $('input[name=WaveType]:checked').val(); 
      console.log('handled WaveType: ', waveType);
      render(); 
    }); 


  }

  function handleFrequency(){ 
    //console.log('handleFrequency');
    //render(); 
  }

  function handleTransport(){ 
    //console.log('handlTransport');
    //render(); 
  }

  function handleAddSound(){ 
    //console.log('handleAddSound');
    //render(); 
  }

  function bindEventListeners(){ 
    handleWaveType(); 
    handleFrequency(); 
    handleTransport(); 
    handleAddSound(); 
  }

  return { render, bindEventListeners}; 

})(); 



