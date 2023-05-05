var mongoose = require('mongoose');
var {ObjectId} = mongoose.Schema.Types
var Schema = mongoose.Schema;

var mongoDB = "mongodb+srv://phongpkt:rDDra8qqSuEH2khW@cluster0.jxojykg.mongodb.net/test";
mongoose.connect(mongoDB);

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: { 
        type: String,
        require: true
    },
    picture: {
        type: String
    },
    phone: {
        type: String
    },
    dob: {
        type: Date
    },
    password: { 
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User', UserSchema);