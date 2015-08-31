'use strict';

//////consider mongo virtual methods!

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var contentEnum = ['', 'Article', 'Solution'];

var HeaderSchema = new Schema({
  standards: {  // standards of the content, wording, cited, verified, legal, safe, etc
    
  },
  siteStats: {  // clicks & visits per unit time
    
  },
  editStats: {  // edits & changes per unit time
    
  },
  category: {
    type: String,
    index: true
  },
  privileges: { // edit, view, blacklist, lockdown, searchable, etc
    
  },
  contributors: { // percent of edits by which users (for point distribution)
    
  },
  tags: { // aka hashtags, simplest, slowest implementation
          // should only include words not already in title
    type: [String]
  },
  contentType: {
    type: String,
    enum: contentEnum
  },
  title: {
    type: String
  },
  // content: {
  //   type: Schema.ObjectId
  // }
  
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Header', HeaderSchema);
