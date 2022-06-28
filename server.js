const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})


//create server that browsers can connect to
app.listen(3000, function(){
    console.log('listening on 3000')
})