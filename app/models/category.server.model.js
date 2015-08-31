'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  // metadata: {
    
  // },
  
  name: {
    type: String,
    unique: true
  },
  
  parent: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  
  children: {
    type: [Schema.ObjectId],
    ref: 'Category'
  },
  
  history: {
    type: Schema.ObjectId,
    ref: 'History'
  }
  
});

mongoose.model('Category', CategorySchema);