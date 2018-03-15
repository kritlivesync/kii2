module.exports = function(app) {
    var
        logger = require('morgan'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
        session = require('express-session'),
        RedisStore = require('connect-redis')(session),
        i18n = require('i18n'),
        swig = require('swig'),
        helmet = require('helmet');
        multer = require('multer');

    // app use
    app.use(logger('dev'));
    app.enable('trust proxy');
    app.disable('x-powered-by');
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', C.dir.view);
    app.use(multer({ dest: C.dir.static }).any());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(cookieParser());
    app.use(session({
        store: new RedisStore({ client: R }),
        secret: C.secret,
        resave: true,
        saveUninitialized: true,
        proxy: true
    }));
    app.use(helmet.frameguard());
    app.use(helmet.noSniff());
    app.use(helmet.xssFilter());
    app.use(helmet.ieNoOpen());
    app.use(helmet.hsts({
      "maxAge": 15778476000,
      "includeSubdomains": true,
      "force": true
    }));
    app.use(helmet.hsts());
    app.use(i18n.init);
    i18n.configure({
        updateFiles: false,
        locales: C.ln,
        directory: C.dir.locales
    });

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    app.use((req, res, next) =>{
        res.locals.session = req.session;
        if (req.session && req.session.locale) {
            req.setLocale(req.session.locale);
        }
        next();
    })
};