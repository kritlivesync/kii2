module.exports = async(app) => {
    app
        .route('/login')
        .post((req, res) => {
          const id = Date.now();

          console.log(`Updating session for user ${id}`);
          req.session.userId = id;
          res.send({ result: 'OK', message: 'Session updated' });
        });


        
};