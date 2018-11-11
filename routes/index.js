const express = require('express');
const router = express.Router();
const path = require('path');
const FileLocator = require('../actions/FileLocator');



/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next){
	FileLocator.fetchVideos(path.resolve(__dirname, '../public'),function(err,videos){
		var video_list = [];
		videos.forEach(obj => {
			video_list.push(path.basename(obj));
		});
		res.send(video_list);
	});
});

module.exports = router;
