import { withStyles } from "@mui/styles";

import { useStyles } from "../control/ThemeControl"
import { globalSize } from "../property/SizeProperty";
import ModelImage from "../resource/model.png"

const Method = (props) => {
  const { classes } = props;

  return (
    <div className={classes.section}>
      <h2 className={classes.h2}> Method </h2>
      <p className={classes.p}>
        The proposed model is composed of a phoneme classifier and a singing voice generator.
        In melody-unsupervision mode the modules are trained jointly using audio and lyrics only.
        In melody-supervision mode only the singing voice generator is trained using audio, lyrics and melody.
      </p>
      <div className={classes.divImg}>
        <img src={ModelImage} alt="" style={{ width: 'calc(100% - ' + 2*parseInt(globalSize.marginMedium) + 'px)', margin: globalSize.marginMedium }}/>
      </div>
      <div className={classes.divBottom}/>
    </div>
  )
}

export default withStyles(useStyles, { withTheme: true})(Method);