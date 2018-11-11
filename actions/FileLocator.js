const glob = require('glob');
const path = require('path');
module.exports = {
    fetchVideos: function (src, callback) {
        glob(src + '/**/*.mp4', callback);
    }
};