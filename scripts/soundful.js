/* global $ STORE */ 
'use strict';

// eslint-disable-next-line no-unused-vars
const soundful = (function () { 

  function render(){ 
    console.log(STORE.freq, STORE.waveType, STORE.playBackState);
    // eslint-disable-next-line no-console
    //console.log('rendered');
  }

  function handleWaveType(){ 
    $('#js-add-sound').on('click', '.wave', function(){ 
      const waveType = $('input[name=WaveType]:checked').val(); 
      STORE.waveType = waveType; 
      // eslint-disable-next-line no-console
      //console.log('handled WaveType: ', waveType);
      render(); 
    }); 
  }

  function handleFrequency(){ 
    $('#js-add-sound').on('input change', function(){ 
      const frequency = $('input[type=range]').val(); 
      STORE.freq = frequency; 
      // eslint-disable-next-line no-console
      //console.log('handleFrequency', frequency);
      render(); 
    }); 

  }

  function handleTransport(){ 
    $('#js-add-sound').on('click', '#js-transport', function(){ 
      STORE.playBackState = !STORE.playBackState; 
      // eslint-disable-next-line no-console
      //console.log('handleTransport');
      render(); 
    }); 
  }

  function handleAddSound(){ 
    $('#js-add-sound').submit(function(event){
      event.preventDefault();  
      // eslint-disable-next-line no-console
      //console.log('handleAddSound', 'submitted');
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



