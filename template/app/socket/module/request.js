const SocketRequest = async(req, ws, io) => {
    io.on('request', async(input) => {
        console.log('recive===>', input.arguments);
    })
};
module.exports = SocketRequest;