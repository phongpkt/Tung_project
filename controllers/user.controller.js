const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const dateFormat = require('moment');

//GET /viewUser
exports.viewUser = async (req, res) => {
    const user = await userModel.find();
    res.render('user/view_user', {'user':user});
}

//GET /createFrom
exports.createForm = async (req, res) => {
    res.render('user/create_user');
}
//POST /createUser
exports.createUser = async (req, res) => {
//========= get information from create_user front end ===================
    const name = req.body.name
    const email = req.body.email
    const picture = req.body.picture
    const phone = req.body.phone
    const dob = req.body.dob
    const password = req.body.password
    const confirm = req.body.confirm
//======================= backend process ================================
    //formatting date
    const date = dateFormat(dob).format('MMMM d, YYYY');

    //validation
    if(!name || !email || !password || !confirm){
        console.log("Please fill all require fields");
    }
    if(password !== confirm){
        console.log("Password must match");
        // res.render('user/create_user', {"msg":msg});
    }
    else{
        //save user to DB
        const User = new userModel({ 
            'name': name, 
            'email': email, 
            'phone': phone, 
            'picture': picture, 
            'dob': date, 
            'password':password
        });
        //Password Hashing
        bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(User.password, salt, (err, hash) => {
            if (err) throw err;
                User.password = hash;
                User.save()
                .catch((err) => console.log(err));
            })
        );
        res.redirect('/');
    }
}

exports.editForm = async (req, res) => {
    res.render('user/edit_user');
}
exports.editUser = async (req, res) => {

}
exports.deleteUser = async (req, res) => {
    const id = req.query.id;
    const user = await userModel.findById(id);
    user.deleteOne();
    res.redirect('/')
}

// AWS Lambda
// function ViewUser (req, res) {
// }
// exports.ViewUser;