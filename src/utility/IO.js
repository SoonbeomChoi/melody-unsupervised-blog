import { audioControl } from "../control/AudioControl";

export function monoToStereo(audioContext, buffer) {
  let stereoBuffer = audioContext.createBuffer(2, buffer.length, audioContext.sampleRate);
  stereoBuffer.copyToChannel(buffer.getChannelData(0), 0, 0);
  stereoBuffer.copyToChannel(buffer.getChannelData(0), 1, 0);

  return stereoBuffer;
}

export function loadAudio(file, i, fn) {
  let request = new XMLHttpRequest();
  request.open("GET", file);
  request.responseType = "arraybuffer";

  request.onload = function() {
    audioControl.context.decodeAudioData(request.response, function(buffer) {
      if (buffer.numberOfChannels === 1) {
        buffer = monoToStereo(audioControl.context, buffer);
      }

      fn(buffer, i);
    })
  }
  request.send(file);
}