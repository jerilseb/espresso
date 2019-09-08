const Espresso = require("../espresso");
const cors = require('./cors');

const app = new Espresso();
app.use(cors);

app.use(async (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello with CORS' }));
});

server = app.listen(3000, () => console.log("Espresso listening on port 3000"));