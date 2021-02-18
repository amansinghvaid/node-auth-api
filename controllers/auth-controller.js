const Response = require('../util/response');
const User = require('../models/user');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if(email && password) {
        User.findOne({email:email, password:password})
        .then(user => {
            if(user) {
                res.status(200).json(new Response(true,'Login successfull.',{user: user}));
            }else{
                res.status(200).json(new Response(true,'incorrect username or password.'));
            }
        })
        .catch(err => {
            res.status(200).json(new Response(true,'email and password received.'));
        });
    }else{
        res.status(403).json(new Response(false,'email and password is required.'));
    }
}

exports.register = (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
    .then(user => {
        if(!user){
            const user = new User({
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password
            });
            user.save()
            .then( result => {
                return res.status(200).json(new Response(true, 'User registered successfully.', {'user' : user }));
            })
            .catch( err => {
                console.log(err);
                return res.status(500).json(new Response(false, 'Something went wrong.'));
            });
        }else{
            return res.status(403).json(new Response(false, 'Other user registerd with this email'));
        }
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json(new Response(false, 'Something went wrong.'));
    });

}