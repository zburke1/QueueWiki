'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SolutionSchema = new Schema({
  header: {
    type: Schema.ObjectId,
    ref: 'Header'
  },
  
  history: {
    type: Schema.ObjectId,
    ref: 'History'
  },
  
  queued: {
    //changes up for vote go here
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

// mongoose.model('Article', ArticleSchema);
