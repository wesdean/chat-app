const express = require('express');
const socket = require('socket.io');

const port = process.env.PORT || 4000;

// App setup
const app = express();
const server = app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', socket => {
    console.log(`Made socket connection: ${socket.id}`);

    socket.on('chat', data => {
        console.log(`Message received: ${data.handle} -> ${data.message}`);
        io.sockets.emit('chat', data);
    });

    socket.on('typing', data => {
        console.log(`Typing: ${data.handle}`);
        socket.broadcast.emit('typing', data);
    });

    socket.on('typing-stopped', data => {
        console.log(`Typing stopped: ${data.handle}`);
        socket.broadcast.emit('typing-stopped', data);
    });
});