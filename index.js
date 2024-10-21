const drumSamples = {
  1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  2: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  4: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  5: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  6: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  7: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  8: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  9: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  10: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  11: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  12: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  13: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  14: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  15: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  16: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
};

const drumPadContainer = document.getElementById('drum-pad-container');

// Create audio elements and buttons for each drum sample
Object.entries(drumSamples).forEach(([pad, url]) => {
  const audio = document.createElement('audio');
  audio.src = url;
  audio.id = pad;
  document.body.appendChild(audio);

  const button = document.createElement('button');
  button.className = 'drum-pad';
  button.textContent = pad.toUpperCase();
  button.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
  drumPadContainer.appendChild(button);
});