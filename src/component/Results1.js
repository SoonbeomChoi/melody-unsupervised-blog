import { withStyles } from "@mui/styles";

import { globalSize } from "../property/SizeProperty";
import { useStyles } from "../control/ThemeControl"
import MCDEN from "../resource/mcd_en.png"
import MCDKR from "../resource/mcd_kr.png"
import F0RMSEEN from "../resource/f0rmse_en.png"
import F0RMSEKR from "../resource/f0rmse_kr.png"

const Results1 = (props) => {
  const { classes } = props;
  const imgWidth = 'calc(50% - ' + 2*parseInt(globalSize.marginMedium) + 'px';

  return (
    <div className={classes.section}>
      <h2 className={classes.h2}> Results - MCD and F0 RMSE </h2>
      <p className={classes.p}>
        MCD and F0 RMSE results with regards to
        the increasing number of songs with melody labels for
        the unsupervised, semisupervised models, and supervised models.
      </p>
      <div className={classes.divImg}>
        <img src={MCDEN} alt="" style={{ width: imgWidth, height: 'auto', margin: globalSize.marginMedium }}/>
        <img src={MCDKR} alt="" style={{ width: imgWidth, height: 'auto', margin: globalSize.marginMedium }}/>
      </div>
      <div className={classes.divImg}>
        <img src={F0RMSEEN} alt="" style={{ width: imgWidth, height: 'auto', margin: globalSize.marginMedium }}/>
        <img src={F0RMSEKR} alt="" style={{ width: imgWidth, height: 'auto', margin: globalSize.marginMedium }}/>
      </div>
      <div className={classes.divBottom}/>
    </div>
  )
}

export default withStyles(useStyles, { withTheme: true})(Results1);