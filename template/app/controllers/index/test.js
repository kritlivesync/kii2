module.exports = async(app) => {
    app
        .route('/noti/:id')
        .post((req, res) => {
          var id = req.params.id;
 		  R.publish("user:"+id, JSON.stringify({data:Date.now()}));
          res.send({ result: 'OK', message: 'Send noti to socket '+id });
        });
};