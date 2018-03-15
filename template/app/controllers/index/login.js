module.exports = async(app) => {
    app
        .route('/')
        .post('/login', (req, res) => {
          const id = Date.now();

          console.log(`Updating session for user ${id}`);
          req.session.userId = id;
          res.send({ result: 'OK', message: 'Session updated' });
        });


        
};