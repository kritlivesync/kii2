module.exports = async(app) => {
    app
        .route('/')
        .delete('/logout', (req, res) => {
		  console.log('Destroying session');
		  req.session.destroy();
		  res.send({ result: 'OK', message: 'Session destroyed' });
		});

};