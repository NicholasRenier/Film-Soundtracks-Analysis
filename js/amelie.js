/* This script loads the MEI file via HTTP request */

/* Start Verovio */
var vrvToolkit = new verovio.toolkit()

/* Setup Verovio - adjust the options below */
var zoom = 50
var content = document.getElementById('content')
var contentHeight = 0
if (content) {
  contentHeight = content.offsetHeight
}
var defaultHeight = document.documentElement.clientHeight - contentHeight
var defaultWidth = document.documentElement.clientWidth - 50
options = {
    pageHeight: defaultHeight * 220 / zoom,
    pageWidth: defaultWidth * 80 / zoom,
    scale: zoom
}
vrvToolkit.setOptions(options)

/* Show the score */
showScore('score', 'data/amelie.mei') // <-- CHANGE THIS TO YOUR FILE