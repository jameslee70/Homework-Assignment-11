const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

//Port Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});