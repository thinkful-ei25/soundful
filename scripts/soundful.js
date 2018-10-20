/* global $ STORE */
'use strict';

// eslint-disable-next-line no-unused-vars
const soundful = (function() {
  // eslint-disable-next-line no-unused-vars
  let context; 
  let oscillator;

  function render() {
    if (STORE.current.playBackState) playSound(); 
    
    if (!STORE.current.playBackState) stopSound(); 

    updateOscillator(); 
  }

  function updateOscillator(){ 
    if(oscillator) { 
      oscillator.type = STORE.current.waveType; 

      if (STORE.current.frequency) 
      {
        oscillator.frequency.value = STORE.current.frequency; 
      }
      else 
      { 
        oscillator.frequency.value = 650; 
      }
      return; 
    }
  }

  function playSound(){ 
    if(oscillator) { 
      return; 
    }
    oscillator = context.createOscillator(); 
    oscillator.type = STORE.waveType; 
    oscillator.connect(context.destination); 
    oscillator.start(0); 
  }

  function stopSound(){ 
    if (oscillator) { 
      oscillator.stop(0); 
      oscillator = null; 
    }
  }

  function handleWaveType() {
    $('#js-add-sound').on('click', '.wave', function() {
      const waveType = $('input[name=WaveType]:checked').val();
      STORE.current.waveType = waveType;
      render();
    });
  }

  function handleFrequency() {
    $('#js-add-sound').on('input change', function() {
      const frequency = $('input[type=range]').val();
      STORE.current.frequency = frequency;
      render();
    });
  }

  function handleTransport() {
    $('#js-add-sound').on('click', '#js-transport', function() {
      STORE.current.playBackState = !STORE.current.playBackState;
      render();
    });
  }

  function handleAddSound() {
    $('#js-add-sound').submit(function(event) {
      event.preventDefault();
      STORE.sounds.push(Object.assign({}, STORE.current)); 
      render();
    });
  }


  function bindEventListeners() {
    handleWaveType();
    handleFrequency();
    handleTransport();
    handleAddSound();
  }

  function init() {
    context = new AudioContext();
  }

  return {init, render, bindEventListeners};
})();
