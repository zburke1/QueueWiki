'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var ArticleSchema = new Schema({ // Article == Problem to lifehack, an instance of a page to visit
  header: {
    type: Schema.ObjectId,
    ref: 'Header'
  },
  
	history: {
    type: Schema.ObjectId,
    ref: 'History'
  },
	
	
	
	
	
	
	
///////MEAN.js stuff follows VVVV	
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);
