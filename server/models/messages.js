var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var messagesSchema = new Schema({
    name: {type: String, required: true},
    message: {type: String, required: true}
    
});
 


module.exports = mongoose.model('Messages', messagesSchema);