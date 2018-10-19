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
    $('#js-add-sound').on('input change', function(){ 
      const frequency = $('input[type=range]').val(); 
      console.log('handleFrequency');
      render(); 
    }); 

  }

  function handleTransport(){ 
    //console.log('handlTransport');
    //render(); 
  }

  function handleAddSound(){ 
    $('#js-add-sound').submit(function(event){
      event.preventDefault();  
      console.log('handleAddSound', 'submitted');
      render(); 
    }); 
  }

  function bindEventListeners(){ 
    handleWaveType(); 
    handleFrequency(); 
    handleTransport(); 
    handleAddSound(); 
  }

  return { render, bindEventListeners}; 

})(); 



