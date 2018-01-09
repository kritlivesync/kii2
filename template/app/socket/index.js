const SocketServer = async(req, ws, io) => {
    var id = setInterval(() => {
        ws.send(JSON.stringify({ data: Date.now() }), () => {});
    }, 100);

    ws.on('message', async(input) => {
        var
            arg = JSON.parse(input);
        io.emit(arg.type, arg.data);
    });

    ws.on('close', async() => {
        clearInterval(id);
    });
};
module.exports = SocketServer;