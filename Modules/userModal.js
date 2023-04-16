const { default: mongoose } = require("mongoose");
mongoose.connect('mongodb+srv://Yashanchaudhary:Yashanchaudhary@web322.fas2sn9.mongodb.net/test');
const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    password: String,
    email: String,
    loginHistory: [
        {
            dateTime: Date,
            userAgent: String
        }
    ]
});
const userMode = mongoose.model('User', userSchema)
export default userMode;