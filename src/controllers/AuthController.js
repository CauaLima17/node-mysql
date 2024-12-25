import dbConnection from "../config/DBconnect.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const AuthController = {
    register(req, res){
        console.log(req.body);

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
            console.log(hashedPassword);

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
    }
};

export default AuthController