import express from 'express';

const app = express();

app.get('/users', (req, res) => {
   res.send('Hello World!\n');
})

app.listen(3333, () => {
    console.log('HTTP server running!');
});