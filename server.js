const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('hello word')
})

app.listen(PORT, () => {
    console.log(`🐳🦋 Server is listening to PORT ${PORT} 🐢🦅`)
}) 