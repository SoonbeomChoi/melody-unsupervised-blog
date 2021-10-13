import { forwardRef, useEffect, useCallback } from "react";
import { withStyles } from "@mui/styles";

import { globalSize } from "../property/SizeProperty";
import { enList, krList, ttsList } from "../property/AudioFiles";
import { useStyles } from "../control/ThemeControl";
import Overview from "./Overview";
import Method from "./Method";
import Demo from "./Demo";
import Results1 from "./Results1";
import Results2 from "./Results2";

const Main = forwardRef((props, mainRef) => {
  const { classes, setSection } = props;
  const unitHeight = window.innerHeight - parseInt(globalSize.headerHeight);
  const songList = ['Alphabet', 'Head Shoulder Knees Toes', 'Jingle Bells', 'Rudolph', 'Twinkle Twinkle Little Star'];
  const svsTrackList = [
    'Supervised (5)', 'Supervised (11)', 'Supervised (22)', 'Supervised (44)',
    'Unsupervised (0)', 'Semi-Supervised (5)', 'Semi-Supervised (11)', 'Semi-Supervised (22)', 'Semi-Supervised (44)',
    'ATK', 'Original'
  ];
  const ttsTrackList = [
    'Pitch +0', 'Pitch +2', 'Pitch -2'
  ];

  const svsColorList = [
    '#fe344c', '#fe344c', '#fe344c', '#fe344c',
    '#fe9534', '#fed134', '#fed134', '#fed134', '#fed134',
    '#3485fe', '#bd34fe'
  ];
  const ttsColorList = ['#fed134', '#fed134', '#fed134'];
  const ttsDescription = 'Following samples are generated using the model trained with LJSpeech and controlled with lyrics and scores in inference time.'
  
  let scrollTop = 0;

  const onScrollSection = useCallback(
    e => {
      scrollTop = e.currentTarget.scrollTop;
      const scrollRatio = scrollTop/unitHeight;

      if (0 <= scrollRatio && scrollRatio < 2 - globalSize.scrollTolerance) {
        setSection("Overview");
      } else if (2 - globalSize.scrollTolerance <= scrollRatio && scrollRatio < 5 - globalSize.scrollTolerance) {
        setSection("Demo");
      } else if (5 - globalSize.scrollTolerance <= scrollRatio) {
        setSection("Results");
      }
    }, [scrollTop]
  );

  useEffect(() => {
    mainRef.current.addEventListener("scroll", onScrollSection);
  
    return () => {
      mainRef.current.removeEventListener("scroll", onScrollSection);
    };
    }, [onScrollSection]
  );

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.main} ref={mainRef}>
        <Overview/>
        <Method/>
        <Demo title={'English'} trackType={'en'} songList={songList} trackList={svsTrackList} audioList={enList} colorList={svsColorList}/>
        <Demo title={'Korean'} trackType={'kr'} songList={songList} trackList={svsTrackList} audioList={krList} colorList={svsColorList}/>
        <Demo
          title={'Using TTS Data'}
          trackType={'tts'}
          songList={songList}
          trackList={ttsTrackList}
          audioList={ttsList}
          colorList={ttsColorList}
          description={ttsDescription}
        />
        <Results1/>
        <Results2/>
      </div>
    </div>
  )
});

export default withStyles(useStyles, { withTheme: true})(Main);