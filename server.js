import dotenv from 'dotenv';
import app from "./src/app.js";

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor inicializado.');
});