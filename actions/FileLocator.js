const fs = require('fs');
const path = require('path');
module.exports = {
    fetchVideos: function() {
        return new Promise(function(resolve){
            fs.readdir(path.resolve(__dirname,'../public'), (err, files) => {
                var videos = [];
                files.forEach(file => {
                    if (file.includes('.mp4') || file.includes('.mkv'))
                        videos.push(file);
                });
                resolve(videos);
            });
        });
    }
};