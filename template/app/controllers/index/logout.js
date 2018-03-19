module.exports = async(app) => {
    app
        .route('/logout')
        .delete((req, res) => {
		  console.log('Destroying session');
		  req.session.destroy();
		  res.send({ result: 'OK', message: 'Session destroyed' });
		});

};