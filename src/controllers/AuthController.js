import dbConnection from "../config/DBconnect.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const AuthController = {
    register(req, res){
        const { name, email, password, passwordRetry } = req.body;

        dbConnection.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) {
                console.log(err);
            }

            if (result.length > 0) {
                return res.render('register', {
                    message: 'That email is already in use',
                    err: true
                });
            } else if (password !== passwordRetry) {
                return res.render('register', {
                    message: 'Passwords do not match',
                    err: true
                });
            }

            let hashedPassword = await bcrypt.hash(password, 8);

            dbConnection.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    return res.render('register', {
                        message: 'User registered successfully',
                        err: false
                    })
                }
            });
        });
    },

    login(req, res){
        const { email, password } = req.body;

        dbConnection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) {
                console.log(err)
            };

            if (results.length === 0) {
                return res.render('login', {
                    message: "That email does't exists. Please try another email or create an account.",
                    err: true
                });
            }

            const user = results[0];

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.render('login', {
                    message: 'That password is incorrect. Try again',
                    err: true
                });
            }

            return res.redirect('/');
        });
    }
};

export default AuthController