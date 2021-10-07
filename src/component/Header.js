import React from 'react'
import { withStyles } from "@mui/styles";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";

import { useStyles } from "../control/ThemeControl";
import MACLabLogo from "../resource/MACLabLogo.png";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedSection: "Overview"
    }

    this.openMACLab = this.openMACLab.bind(this);
  }

  openMACLab() {
    window.open('https://mac.kaist.ac.kr/', '_blank');
  }

  render() {
    const { classes, onSelectSection } = this.props;

    return (
      <div className={classes.header}>
        <ButtonGroup>
          <Button className={classes.button} variant="contained" onClick={this.openMACLab} style={{ padding: '0px' }}>
            <img className={classes.logo} src={MACLabLogo} alt=""/>
          </Button>
        </ButtonGroup>
        <ToggleButtonGroup onChange={onSelectSection} exclusive>
          <ToggleButton
            className={this.state.selectedSection === "Overview" ? classes.headerButtonHighlighted : classes.headerButton}
            variant="text"value="Overview" disableRipple={true}
          >Overview
          </ToggleButton>
          <ToggleButton
            className={this.state.selectedSection === "Demo" ? classes.headerButtonHighlighted : classes.headerButton}
            variant="text" value="Demo" disableRipple={true}
          >Demo
          </ToggleButton>
          <ToggleButton
            className={this.state.selectedSection === "Results" ? classes.headerButtonHighlighted : classes.headerButton}
            variant="text" value="Results" disableRipple={true}
          >Results
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    )
  }
}

export default withStyles(useStyles, { withTheme: true})(Header);