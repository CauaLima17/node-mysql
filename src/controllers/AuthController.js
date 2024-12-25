import dbConnection from "../config/DBconnect.js";

const AuthController = {
    register(req, res){
        console.log(req.body);

        const { name, email, password, passwordRetry } = req.body;

        dbConnection.query('SELECT email FROM users WHERE email = ?', [email], (err, result) => {
            if (err) {
                console.log(err);
            }

            if (result.length > 0) {
                return res.render('register', {
                    message: 'That email is already in use'
                });
            } else if (password !== passwordRetry) {
                return res.render('register', {
                    message: 'Passwords do not match'
                });
            }
        });

        res.send('Form submited');
    }
};

export default AuthController