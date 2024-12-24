import dotenv from 'dotenv';
import app from "./src/app.js";
import Routers from './src/routers/pages.js';
import AuthRouter from './src/routers/auth.js';

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;

app.use('/', Routers);
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log('Servidor inicializado.');
});