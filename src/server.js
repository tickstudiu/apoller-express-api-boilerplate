const {app} = require('./app.js')

app.on('ready', function() {
    app.listen(process.env.PORT, () => {
        console.log("server is running on port", process.env.PORT);
    });
});