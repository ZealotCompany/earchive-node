


module.exports = function (app, config){

    app.get('/partials/*', function(req, res) {
        console.log('getting partials ' + req.params[0]);
        return res.sendFile(config.rootPath + '/public/app/' + req.params[0] + '.html');
    });

    app.get('*', function(req, res) {
        console.log('rendering index');
        res.sendFile(config.rootPath  + '/public/index.html');
    });
};
