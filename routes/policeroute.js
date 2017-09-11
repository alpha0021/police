const express = require('express');
const router = express.Router();
const Police = require('../models/police');


router.get('/police',function(req,res,next){
	Police.find({}).then(function(polices){
		res.render('police');
	});
});



router.post("/polices",function(req,res,next){

	Ninja.create(req.body).then(function(police){

		res.send(police);

	}).catch(next);

});




module.exports = router;