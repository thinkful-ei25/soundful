/* global $ STORE */ 
'use strict';

// eslint-disable-next-line no-unused-vars
const soundful = (function () { 

  function render(){ 

  }

  function handleWaveType(){ 
    $('#js-add-sound').on('click', '.wave', function(){ 
      const waveType = $('input[name=WaveType]:checked').val(); 
      STORE.waveType = waveType; 
      render(); 
    }); 
  }

  function handleFrequency(){ 
    $('#js-add-sound').on('input change', function(){ 
      const frequency = $('input[type=range]').val(); 
      STORE.freq = frequency; 
      render(); 
    }); 

  }

  function handleTransport(){ 
    $('#js-add-sound').on('click', '#js-transport', function(){ 
      STORE.playBackState = !STORE.playBackState; 
      render(); 
    }); 
  }

  function handleAddSound(){ 
    $('#js-add-sound').submit(function(event){
      event.preventDefault();  
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



