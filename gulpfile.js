/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * Path settings
 * Set as many as you need
 */
uswds.paths.src.uswds = './node_modules/uswds/dist'
uswds.paths.src.sass = './node_modules/uswds/dist/scss'
uswds.paths.src.theme = './node_modules/uswds/dist/scss/theme'
uswds.paths.src.fonts = './node_modules/uswds/dist/fonts'
uswds.paths.src.img = './node_modules/uswds/dist/img'
uswds.paths.src.js = './node_modules/uswds/dist/js'

uswds.paths.dist.sass = './assets/stylesheets';

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;