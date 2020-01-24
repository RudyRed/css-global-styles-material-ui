const palette = require('./mui/palette')
const typography = require('./mui/typography')
const shadows = require('./mui/shadows')

const MuiButton = require('./mui/muiComponentsOverrides/MuiButton')

exports.muiTheme = {
  overrides: {
    MuiButton,
  },
  palette,
  typography,
  shadows,
}
