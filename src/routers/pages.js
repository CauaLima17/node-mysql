import express from 'express';
import isAuthenticated from '../middlewares/AuthMiddleware.js';

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

Routers.get('/profile', isAuthenticated, (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
});

Routers.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Erro ao fechar sessão: ', err);
        }

        res.redirect('/')
    })
})

export default Routers;