const shadows = require('../shadows')
const palette = require('../palette')

module.exports = {
  root: {
    whiteSpace: 'nowrap',
    boxShadow: shadows[1],
    '&$outlined': {
      '&:disabled': {
        border: 'none',
        opacity: 0.7,
      },
    },
  },
  text: {
    boxShadow: 'none',
  },
  contained: {
    padding: '9px 24px 8px',
  },
  outlinedPrimary: {
    color: palette.background.default,
    background: palette.primary.main,
    border: 'none',
    '&:hover': {
      border: 'none',
    },
  },
  outlinedSecondary: {
    color: palette.background.default,
    background: palette.secondary.main,
    border: 'none',
    '&:hover': {
      border: 'none',
    },
  },
  outlined: {
    padding: '8px 24px 7px',
  },
  sizeSmall: {
    fontSize: 11,
  },
}