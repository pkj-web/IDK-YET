const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', express.static(path.join(__dirname, 'public2')));

app.use('/test/progres', express.static(path.join(__dirname, 'public3')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html',));
    
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public2', 'index2.html',));
});

app.get('/test/progress', (req, res) => {
    res.sendFile(path.join(__dirname, 'public3', 'index3.html'))
})

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
