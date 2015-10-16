var mongoose = require('mongoose');

//define object schema
var articleSchema = new mongoose.Schema( {
   
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title is required'
    },
    Content: {
        type: String,
        default: '',
        trim: true
    }
    
});

//make this public so the controller can see it
module.exports = mpngoose.model('Article', articleSchema);