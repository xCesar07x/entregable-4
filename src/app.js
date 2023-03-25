const express = require('express');
const db = require('./utils/database');
const cors = require('cors');
const morgan = require('morgan');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.routes');
const chatRoutes = require('./routes/chat.routes');
const authRoutes = require('./routes/auth.routes');
const messageRoutes = require('./routes/message.routes');

const PORT = 8000;

const app = express();
initModels();

db.authenticate()
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => {
        console.log('Base de datos exitosa');
    })
    .catch((error) => {
        console.log(error);
    });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);
app.use(chatRoutes);
app.use(authRoutes);
app.use(messageRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my API');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})