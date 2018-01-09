module.exports = async(app) => {
    app
        .route('/')
        .get(async(req, res) => {
            res.render('index', { title: 'Server'});
        })
};