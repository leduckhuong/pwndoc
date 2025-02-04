const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');
const route = require('./routes/index.route')

const PORT = process.env.PORT || 3000;

route(app);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});