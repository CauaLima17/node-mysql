import express from 'express';

const Routers = express.Router();

Routers.get('/', (req, res) => {
    res.render('index');
});

Routers.get('/register', (req, res) => {
    res.render('register');
});

Routers.get('/login', (req, res) => {
    res.render('login');
});

export default Routers;