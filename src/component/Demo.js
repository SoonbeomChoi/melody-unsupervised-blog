import { useRef, useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";

import { useStyles } from "../control/ThemeControl"
import { audioControl } from "../control/AudioControl";
import { loadAudio } from "../utility/IO";
import { draw1D } from "../utility/Draw";
import { toPercent } from "../utility/Utility";
import Track from "./Track";

const Demo = (props) => {
  const { classes, theme, title } = props;
  const buttonWidth = toPercent(1/props.songList.length);
  const refList = useRef([]);

  const [selectedSong, setSelectedSong] = useState(0);

  useEffect(() => {
    refList.current = refList.current.slice(0, props.trackList.length);
    if (props.audioList !== undefined) loadSong(0);
  }, [props.trackList]);

  const drawThumbnail = (buffer, i) => {
    draw1D(refList.current[i], buffer.getChannelData(0), props.colorList[i]);
    audioControl.audioList[props.trackType][i.toString()] = buffer;
  };

  const loadSong = (songNumber) => {
    for (let i = 0; i < props.audioList[songNumber].length; i++) {
      loadAudio(props.audioList[songNumber][i], i, drawThumbnail);
    }
  }

  const onSelectSong = (event, songNumber) => {
    if (selectedSong !== songNumber) audioControl.stop();

    loadSong(songNumber);
    setSelectedSong(songNumber);
    audioControl.audioList[props.trackType] = [];
  }

  let songList = [];
  for (let i = 0; i < props.songList.length; i++) {
    let textColor = theme.textColor;
    if (i === selectedSong) textColor = theme.highlightColor;

    songList.push(
      <ToggleButton
        className={classes.songToggleButton}
        key={"songSelectButton" + i.toString()}
        variant="text"
        value={i}
        disableRipple={true}
        style={{ color: textColor, width: buttonWidth }}
      >
        {props.songList[i]}
      </ToggleButton>
    );
  }

  return (
    <div className={classes.section}>
      <h2 className={classes.h2}> {'Demo - ' + title} </h2>
      <ToggleButtonGroup value={props.songList[0]} exclusive onChange={onSelectSong}>
        {songList}
      </ToggleButtonGroup>
      {props.trackList.map((trackName, i) => (
        <Track key={"track" + i.toString()} ref={c => refList.current[i] = c} trackType={props.trackType} trackNumber={i} trackName={trackName}/>
      ))}
      <div className={classes.divBottom}/>
    </div>
  )
}

export default withStyles(useStyles, { withTheme: true})(Demo);