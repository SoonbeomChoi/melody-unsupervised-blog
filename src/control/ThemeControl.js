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
    height: 'calc(100vh - ' + globalSize.headerHeight + ')',
    backgroundColor: theme.backgroundColorLevel2,
    padding: globalSize.mainPaddingH + ' ' + globalSize.mainPaddingV,
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
  },
  headerButton: {
    background: 'transparent !important',
    color: theme.textColor + ' !important',
    minWidth: '0 !important',
    padding: 0,
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeMedium + ' !important',
    boxShadow: 'none !important'
  },
  headerButtonHighlighted: {
    background: 'transparent !important',
    color: theme.highlightColor + ' !important',
    minWidth: '0 !important',
    padding: 0,
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeMedium + ' !important',
    boxShadow: 'none !important'
  },
  songToggleButton: {
    background: 'transparent !important',
    minWidth: '0 !important',
    margin: globalSize.marginMedium + ' !important',
    padding: '0 !important',
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeSmall + ' !important',
    fontWeight: globalSize.trackFontWeight + ' !important',
    boxShadow: 'none !important'
  },
  button: {
    background: 'transparent !important',
    minWidth: '0 !important',
    margin: globalSize.marginMedium + ' !important',
    padding: '0 !important',
    border: '0 !important',
    fontFamily: fontFamily,
    fontSize: globalSize.fontSizeSmall + ' !important',
    fontWeight: globalSize.trackFontWeight + ' !important',
    boxShadow: 'none !important'
  },
  h2: {
    color: theme.textColor,
    textAlign: 'center',
    fontFamily: 'Futura',
    fontSize: globalSize.sectionHeadFontSize,
  },
  p: {
    color: theme.textColor,
    width: '100%',
    textAlign: 'justify',
    fontFamily: fontFamily,
    fontSize: globalSize.mainFontSize,
    fontWeight: globalSize.mainFontWeight
  },
  divImg: {
    backgroundColor: theme.backgroundColorLevel3,
    padding: globalSize.marginLarge
  }
})