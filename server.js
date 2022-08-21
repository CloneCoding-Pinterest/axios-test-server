import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('*', (req, res) => {
    console.log(`반가워요 ${req.headers['api-key']} 님`)
    console.log(req.headers);

    return res.status(200).json('hello axios');
});
app.listen(3000, () => console.log(`Server is running on 3000`));