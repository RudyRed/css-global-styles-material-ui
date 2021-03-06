
const { fontFamily } = require('../variables')
const palette = require('./palette')

module.exports = {
  fontFamily,
  fontWeight: 'normal',
  color: palette.primary.dark,
  h1: {
    fontFamily,
    fontWeight: '900',
    fontSize: 28,
    letterSpacing: 0.5,
  },
  h2: {
    fontFamily,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 'normal',
    letterSpacing: -0.1,
  },
  h3: {
    fontFamily,
    fontWeight: '900',
    fontSize: 20,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: palette.tertiary.main,
  },
  h4: {
    fontFamily,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: palette.tertiary.dark,
  },
  h5: {
    fontSize: 14,
    fontFamily,
    fontWeight: 'bold',
  },
  h6: {
    fontFamily,
    fontSize: 12,
    fontWeight: '900',
    lineHeight: 1.4,
    letterSpacing: -0.2,
  },
  caption: {
    fontFamily,
    fontSize: 14,
    letterSpacing: 'normal',
    color: palette.tertiary.main,
  },
  body2: {
    fontFamily,
    fontSize: 14,
    letterSpacing: 'normal',
  },
  body1: {
    fontFamily,
    fontSize: 16,
    letterSpacing: 'normal',
  },
  tableHeader: {
    fontFamily,
    color: palette.primary.dark,
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: '1.2px',
    lineHeight: '13px',
    textTransform: 'uppercase',
    textAlign: 'left',
    padding: '16px 14px 10px',
  },
  tableCell: {
    fontFamily,
    fontSize: 14,
    letterSpacing: 'normal',
    color: palette.primary.dark,
    padding: '10px 14px',
  },
  placeholder: {
    fontFamily,
    fontSize: 14,
    lineHeight: 'normal',
    letterSpacing: -0.1,
  },
  button: {
    fontFamily,
    fontSize: 12,
    fontWeight: '900',
    lineHeight: 'normal',
    letterSpacing: 1.8,
  },
}
