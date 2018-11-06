var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var video = path.join('video.mp4');
// var video = path.join(__dirname, '../public', 'video.mp4');
// var videoString = fs.readFileSync(video, 'utf8');
var videoPathArray = [];
videoPathArray.push(video);
console.log(video);
console.log('video path array: ', videoPathArray);


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next){
	res.send(videoPathArray);
});

module.exports = router;
