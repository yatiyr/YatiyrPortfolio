var path = require('path');
var settings = require('../settings');

exports.getImage = async (req, res) => {
    res.sendFile(`${settings.PROJECT_DIR}/media/images/${req.params.mediaPath}`);
}

exports.getGIF = async (req, res) => {
    res.sendFile(`${settings.PROJECT_DIR}/media/gifs/${req.params.mediaPath}`);
}

exports.getCSS = async (req, res) => {
    res.sendFile(`${settings.PROJECT_DIR}/media/styles/${req.params.mediaPath}`)
}
// TODO: DO THE SAME THING FOR OTHER TYPES