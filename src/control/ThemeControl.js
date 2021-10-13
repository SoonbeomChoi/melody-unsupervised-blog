import '../resource/fonts.css';

import { globalSize } from "../property/SizeProperty";

const fontFamily = 'Nunito Sans';

export const useStyles = theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    width: 'calc(100% - ' + 2*parseInt(globalSize.headerMarginH) + 'px)',
    backgroundColor: theme.backgroundColorLevel1,
    height: globalSize.headerHeight,
    paddingLeft: globalSize.headerMarginH,
    paddingRight: globalSize.headerMarginH,
    zIndex: 2,
    boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.7)',
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    backgroundColor: theme.backgroundColorLevel2,
    top: globalSize.headerHeight,
    width: '100%',
    height: 'calc(100vh - ' + globalSize.headerHeight + ')',
    zIndex: 1
  },
  main: {
    display: 'block',
    maxWidth: globalSize.mainMaxWidth,
    minWidth: globalSize.mainMinWidth,
    height: 'calc(100vh - ' + globalSize.headerHeight + ')',
    backgroundColor: theme.backgroundColorLevel2,
    padding: globalSize.mainPaddingH + ' ' + globalSize.mainPaddingV,
    scrollSnapType: 'y mandatory',
    overflow: 'overlay',
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent'
    }
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    scrollSnapAlign: 'start'
  },
  headerButton: {
    background: 'transparent !important',
    color: theme.textColor + ' !important',
    minWidth: '0 !important',
    padding: 0,
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeMedium1 + ' !important',
    boxShadow: 'none !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: globalSize.fontSizeMedium2 + ' !important',
    }
  },
  headerButtonHighlighted: {
    background: 'transparent !important',
    color: theme.highlightColor + ' !important',
    minWidth: '0 !important',
    padding: 0,
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeMedium1 + ' !important',
    boxShadow: 'none !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: globalSize.fontSizeMedium2 + ' !important',
    }
  },
  songToggleButton: {
    background: 'transparent !important',
    minWidth: '0 !important',
    margin: globalSize.marginMedium + ' !important',
    padding: '0 !important',
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeSmall1 + ' !important',
    fontWeight: globalSize.trackFontWeight + ' !important',
    boxShadow: 'none !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: globalSize.fontSizeSmall2 + ' !important',
    }
  },
  button: {
    background: 'transparent !important',
    minWidth: '0 !important',
    margin: globalSize.marginMedium + ' !important',
    padding: '0 !important',
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeSmall1 + ' !important',
    fontWeight: globalSize.trackFontWeight + ' !important',
    boxShadow: 'none !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: globalSize.fontSizeSmall2 + ' !important',
    }
  },
  logo: {
    width: globalSize.logoWidth1,
    [theme.breakpoints.down('sm')]: {
      width: globalSize.logoWidth2
    }
  },
  h2: {
    color: theme.textColor,
    textAlign: 'center',
    fontFamily: 'Futura',
    fontSize: globalSize.sectionHeadFontSize1,
    [theme.breakpoints.down('sm')]: {
      fontSize: globalSize.sectionHeadFontSize2 + ' !important',
    }
  },
  p: {
    color: theme.textColor,
    width: '100%',
    marginBottom: globalSize.pMarginBottom,
    textAlign: 'justify',
    fontFamily: fontFamily,
    fontSize: globalSize.mainFontSize1,
    fontWeight: globalSize.mainFontWeight,
    [theme.breakpoints.down('sm')]: {
      fontSize: globalSize.mainFontSize2 + ' !important',
    }
  },
  divImg: {
    backgroundColor: theme.backgroundColorLevel3,
    padding: globalSize.marginLarge
  },
  divThumb: {
    display: 'inline-block',
    backgroundColor: theme.backgroundColorLevel1,
    width: 'calc(100% - ' + (parseInt(globalSize.nameWidth1) + parseInt(globalSize.buttonWidth) + 6*parseFloat(globalSize.marginSmall)) + 'px)',
    height: '100%',
    margin: globalSize.marginSmall,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - ' + (parseInt(globalSize.nameWidth2) + parseInt(globalSize.buttonWidth) + 6*parseFloat(globalSize.marginSmall)) + 'px)'
    }
  },
  divBottom: {
    width: '100%',
    height: globalSize.fontSizeLarge1,
    [theme.breakpoints.down('sm')]: {
      height: globalSize.fontSizeLarge2,
    }
  }
})