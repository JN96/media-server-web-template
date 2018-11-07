const express = require('express');
const router = express.Router();
const path = require('path');
const FileLocator = require('../actions/FileLocator');



/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next){
	FileLocator.fetchVideos().then(data => {
		res.send(data);
	});
});

module.exports = router;
