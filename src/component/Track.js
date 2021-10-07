import { forwardRef, useState } from "react";
import { withStyles } from "@mui/styles";
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { globalSize } from "../property/SizeProperty";
import { useStyles } from "../control/ThemeControl";
import { audioControl } from "../control/AudioControl";
import { toPercent } from "../utility/Utility";

const Track = forwardRef((props, canvasRef) => {
  const { classes, theme, trackType, trackNumber, trackName } = props;
  const thumbWidth = 'calc(100% - ' + (parseInt(globalSize.nameWidth) + parseInt(globalSize.buttonWidth) + 6*parseFloat(globalSize.marginSmall)) + 'px)';
  const [playPos, setPlayPos] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIsPlaying = () => {
    const playingTrack = audioControl.playingTrack;
    return audioControl.isPlaying && playingTrack.type === trackType && playingTrack.number === trackNumber;
  }

  const onTogglePlay = () => {
    audioControl.togglePlay(trackType, trackNumber);
    setIsPlaying(getIsPlaying());
    updatePlayPos();
  }

  const updatePlayPos = () => {
    setPlayPos(audioControl.getPlayPos());
    if (getIsPlaying()) {
      requestAnimationFrame(updatePlayPos);
    } else {
      setIsPlaying(false);
      setPlayPos(0.0);
    }
  }

  let playButtonColor = theme.backgroundColorLevel3;
  if (isPlaying) playButtonColor = theme.highlightColor;

  return (
    <div style={{ display: 'flex', width: '100%', height: globalSize.trackHeight, margin: globalSize.marginSmall + ' ' + globalSize.marginMedium }}>
      <div style={{ 
          display: 'inline-flex',
          justifyItems: 'center',
          alignItems: 'center',
          backgroundColor: theme.backgroundColorLevel1,
          width: globalSize.nameWidth,
          height: '100%',
          margin: globalSize.marginSmall
      }}>
        <p 
          className={classes.p}
          style={{ fontSize: globalSize.fontSizeMedium, textAlign: 'center' }}
        >
          {trackName}
        </p>
      </div>
      <div 
        disableRipple={true}
        style={{
          display: 'inline-flex',
          justifyItems: 'center',
          alignItems: 'center',
          backgroundColor: theme.backgroundColorLevel1,
          width: globalSize.buttonWidth,
          height: '100%',
          margin: globalSize.marginSmall
        }}
      >
        <Button 
          className={classes.button}
          variant="contained"
          onClick={onTogglePlay}
          disableRipple={true}
          style={{ color: playButtonColor }}
        >
          <PlayArrowIcon fontSize='large'/>
        </Button>
      </div>
      <div style={{ 
        display: 'inline-block',
        backgroundColor: theme.backgroundColorLevel1,
        width: thumbWidth,
        height: '100%',
        margin: globalSize.marginSmall
      }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}/>
        <div style={{ 
          backgroundColor: 'inherit',
          width: toPercent(playPos),
          height: 'calc(100% - ' + 2*parseFloat(globalSize.marginSmall) +'px)',
          borderLeft: '1px white',
          transform: 'translateY(calc(-100% - ' + 3*parseFloat(globalSize.marginSmall) + 'px))',
          opacity: globalSize.playMarkerOpacity
        }}/>
      </div>
    </div>
  )
});

export default withStyles(useStyles, { withTheme: true})(Track);