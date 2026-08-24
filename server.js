const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ message: 'Instagram Marketing API' }));
app.listen(5000, () => console.log('Server running'));