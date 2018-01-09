exports.init = function(config) {
    var
        express = require('express'),
        path = require('path'),
        http = require('http'),
        app = express();

    /**
     * C : config
     * M : model
     * F : function
     */
    global.DOCS = {
        api:{},
        socket:{},
    };
    global.C = config; //config
    global.D = {}; //data base
    global.M = {}; //middle where
    global.S = {}; //service
    global.R = require('kii/init/cache.js'); //redis
    global.F = require('kii/init/funcs.js'); //function

    require('kii/init/models.js'); // model
    require('kii/init/middles.js'); // middle
    require('kii/init/boot.js')(app); // model
    require('kii/init/services.js'); // service
    require('kii/init/routes.js')(app, express); // router
    require('kii/init/socket.js')(server);

    // start server
    server = http.createServer(app)
    server.listen(C.port, () => {
        console.log(`start http server ${C.domain.www} at ${C.port}`)
    });
}
