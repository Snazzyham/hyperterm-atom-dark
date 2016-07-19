
const backgroundColor = '#292b37'
const foregroundColor = '#abb2bf'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#dc3b3b', // red
  '#94c66e', // green
  '#d28e5d', // yellow
  '#8884c5', // blue
  '#b73999', // pink
  '#00aba4', // cyan
  '#d0d0d0', // light gray
  '#808080', // medium gray
  '#dc3b3b', // red
  '#94c66e', // green
  '#d28e5d', // yellow
  '#8884c5', // blue
  '#b73999', // pink
  '#00aba4', // cyan
  '#ffffff', // white
  foregroundColor
]

exports.decorateConfig = config => {
  console.log('Meow!')

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
