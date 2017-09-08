const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname })
})

app.listen(process.env.PORT || 3000, function () {
    console.log('NTS app listening on port '+process.env.PORT || 5000)
})