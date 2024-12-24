const AuthController = {
    async register(req, res){
        console.log(req.body);
        res.send('Form submited');
    }
};

export default AuthController