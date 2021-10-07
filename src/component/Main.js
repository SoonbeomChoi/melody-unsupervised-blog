import { forwardRef, useState, useEffect, useCallback } from "react";
import { withStyles } from "@mui/styles";

import { globalSize } from "../property/SizeProperty";
import { enList, krList, ttsList } from "../property/AudioFiles";
import { useStyles } from "../control/ThemeControl";
import Overview from "./Overview";
import Demo from "./Demo";
import Results from "./Results";

const Main = forwardRef((props, mainRef) => {
  const { classes, setSection } = props;
  const unitHeight = window.innerHeight - parseInt(globalSize.headerHeight);
  const songList = ['Alphabet', 'Head Shoulder Knees & Toes', 'Jingle Bells', 'Rudolph', 'Twinkle Twinkle Little Star'];
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
  
  const [scrollY, setScrollY] = useState(0);

  const onScrollSection = useCallback(
    e => {
      const scrollTop = e.currentTarget.scrollTop;
      let scrollRatio = scrollY/unitHeight;
      let currentSection = parseInt(scrollRatio);
      if (scrollY > scrollTop && 0 < currentSection) {
        currentSection -= 1;
      } else if (scrollY < scrollTop) {
        currentSection += 1;
      }

      if (scrollY%unitHeight === 0) {
        /*
        requestAnimationFrame(() => {
          mainRef.current.scrollTo({
            top: currentSection*unitHeight,
            behavior: "smooth"
          })
        });
        */
      }
      setScrollY(scrollTop);

      if (0 <= scrollRatio && scrollRatio < 1 - globalSize.scrollTolerance) {
        setSection("Overview");
      } else if (1 - globalSize.scrollTolerance <= scrollRatio && scrollRatio < 4 - globalSize.scrollTolerance) {
        setSection("Demo");
      } else if (4 - globalSize.scrollTolerance <= scrollRatio) {
        setSection("Results");
      }
    }, [scrollY]
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
        <Demo title={'English'} trackType={'en'} songList={songList} trackList={svsTrackList} audioList={enList} colorList={svsColorList}/>
        <Demo title={'Korean'} trackType={'kr'} songList={songList} trackList={svsTrackList} audioList={krList} colorList={svsColorList}/>
        <Demo title={'Using TTS Data'} trackType={'tts'} songList={songList} trackList={ttsTrackList} audioList={ttsList} colorList={ttsColorList}/>
        <Results/>
      </div>
    </div>
  )
});

export default withStyles(useStyles, { withTheme: true})(Main);