var ex = require('express');
var a = ex();

var port = 3000;

a.use(ex.static("public"));
a.set('views', 'views');
a.set('view engine', 'pug');

a.listen(port, () => {
    console.log("Server is running on port", port);
});