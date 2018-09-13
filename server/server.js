const express = require('express');
app = express();

PORT = 5000;

app.use(express.static('server/public'));

app.listen(PORT, function() {
    console.log('server up and listen on port:', PORT);
});