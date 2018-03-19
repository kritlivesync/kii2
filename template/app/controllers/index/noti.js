module.exports = async(app) => {
    app
        .route('/noti')
        .post((req, res) => {
          var id = Date.now();
 		  R.publish("public", JSON.stringify({data:id}));
          res.send({ result: 'OK', message: 'Send noti to socket '+id });
        });
};