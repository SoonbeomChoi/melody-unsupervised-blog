class AudioControl {
  constructor() {
    this.sampleRate = 44100;
    this.bufferSize = 256;

    this.isPlaying = false;
    this.playingTrack = {type: 'en', number: 0}
    this.playingBuffer = null;
    this.timer = null;

    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext({sampleRate: this.sampleRate});
    this.contextStart = 0;
    this.source = null;
    this.audioList = {en: {}, kr: {}, tts: {}}

    this.playBuffer = this.playBuffer.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.stop = this.stop.bind(this);
    this.getPlayPos = this.getPlayPos.bind(this);
  }

  playBuffer() {
    this.source = this.context.createBufferSource();
    this.source.buffer = this.playingBuffer;
    this.source.connect(this.context.destination);
    this.source.start(0, 0);
  }

  togglePlay(trackType, trackNumber) {
    if (this.isPlaying && trackType === this.playingTrack.type && trackNumber === this.playingTrack.number) {
      this.stop();
    } else {
      this.stop();
      this.playingTrack = {type: trackType, number: trackNumber};
      this.playingBuffer = this.audioList[trackType][trackNumber.toString()];
      this.playBuffer();
      this.isPlaying = true;
    }
  }

  stop() {
    if (this.isPlaying) {
      this.source.stop(0);
      this.isPlaying = false;
    }
    this.contextStart = this.context.currentTime;
  }

  getPlayPos() {
    let playPos = 0;
    if (this.playingBuffer !== null) {
      playPos = (this.context.currentTime - this.contextStart)/this.playingBuffer.duration;
    }
    if (1.0 <= playPos) this.stop();

    return playPos;
  }
}

export const audioControl = new AudioControl();