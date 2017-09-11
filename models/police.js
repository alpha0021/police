const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PoliceSchema = new Schema({
	name:{
		type:String
	},

	rank:{
		type:String
	},

	number:{
		type:String
	},

	posting:{
		type:String
	}
});

const Police = mongoose.model('police',PoliceSchema);
module.exports = Police;
