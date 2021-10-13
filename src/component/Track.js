import { forwardRef, useRef, useState } from "react";
import { withStyles } from "@mui/styles";
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { globalSize } from "../property/SizeProperty";
import { useStyles } from "../control/ThemeControl";
import { audioControl } from "../control/AudioControl";
import { toPercent } from "../utility/Utility";

const Track = forwardRef((props, canvasRef) => {
  const { classes, theme, trackType, trackNumber, trackName } = props;

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

  /*
  let playMarkerX = 0;
  let playMarkerW = '100%';
  if (thumbRef.current !== undefined) {
    playMarkerX = parseInt(playPos*thumbRef.current.clientWidth);
    playMarkerW = (parseInt(thumbRef.current.clientWidth) - playMarkerX).toString() + 'px';
  }

  playMarkerX = playMarkerX.toString() + 'px';
  */

  return (
    <div style={{ display: 'flex', width: '100%', height: globalSize.trackHeight, margin: globalSize.marginSmall + ' ' + globalSize.marginMedium }}>
      <div style={{ 
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundColorLevel1,
        width: globalSize.nameWidth1,
        height: '100%',
        margin: globalSize.marginSmall,
        [theme.breakpoints.down('sm')]: {
          width: globalSize.nameWidth2
        }
      }}>
        <p 
          className={classes.p}
          style={{ 
            fontSize: globalSize.fontSizeMedium1, textAlign: 'center', margin: 0,
            [theme.breakpoints.down('sm')]: {
              fontSize: globalSize.fontSizeMedium2
            }
          }}
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
          style={{ left: globalSize.buttonCalib, color: playButtonColor }}
        >
          <PlayArrowIcon fontSize='large'/>
        </Button>
      </div>
      <div className={classes.divThumb}>
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