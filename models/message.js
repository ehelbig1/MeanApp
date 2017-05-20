const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
const Message = module.exports = mongoose.model('Message', messageSchema);

module.exports.addMessage = function(newMessage, callback){
    newMessage.save(callback);
}