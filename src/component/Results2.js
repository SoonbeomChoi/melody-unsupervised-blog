import { withStyles } from "@mui/styles";

import { globalSize } from "../property/SizeProperty";
import { useStyles } from "../control/ThemeControl"
import PhonemeProb from "../resource/phoneme_prob_en.png"

const Results2 = (props) => {
  const { classes } = props;

  return (
    <div className={classes.section}>
      <h2 className={classes.h2}> Results - Predicted Phoneme Probability </h2>
      <p className={classes.p}>
        Predicted phoneme probability (down) from a given mel-spectrogram overlayed with a ground truth phonemes (up).
        Phonemes are overlayed over probabilities when phoneme probabilities higher than 50% are continued.
      </p>
      <div className={classes.divImg}>
        <img src={PhonemeProb} alt="" style={{ width: 'calc(100% - ' + 2*parseInt(globalSize.marginMedium) + 'px)', margin: globalSize.marginMedium }}/>
      </div>
      <div className={classes.divBottom}/>
    </div>
  )
}

export default withStyles(useStyles, { withTheme: true})(Results2);