const userModel = require("../models/user.model");

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
    const name = req.body.name
    const email = req.body.email
    const picture = req.body.picture
    const phone = req.body.phone
    const dob = req.body.dob
    const password = req.body.password

    const User = new userModel({ 'name': name, 'email': email, 'phone': phone, 'picture': picture, 'dob': dob, 'password':password})
    User.save()
    res.redirect('/')
}

exports.editForm = async (req, res) => {
    res.render('user/edit_user');
}
exports.editUser = async (req, res) => {

}


// AWS Lambda
// function ViewUser (req, res) {
// }
// exports.ViewUser;