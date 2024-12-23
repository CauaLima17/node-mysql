import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1>');
});

export default app;