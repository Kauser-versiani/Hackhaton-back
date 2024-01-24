// const  express = require('express');
// const app= express();
// const cors = require("cors")
// const authRoute = require('./router/auth-router');
// const contactRoute = require('./router/contact-router');
// const connectDB = require('./utils/db');
// const contactModel = require('./models/contact-Fetch-model');

// const corsOptions ={
//     origin: "http://localhost:5173",
//     methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//     credentials: true,
// }
// app.get('/', (req, res) => {
//     contactModel.find()
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// });
// app.use(cors(corsOptions))

// app.use(express.json());
// app.use('/api/auth',authRoute);
// app.use('/api/form',contactRoute);

// connectDB().then(()=>{
// const PORT = 3000;
// app.listen(PORT,()=>{
//     console.log(`server is running: ${PORT}`);
// });
// });


// require("dotenv").config();
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router")
const home = require('./controllers/auth-controllers')
const connectDb = require('./utils/db')
const contactModel = require('./models/contact-Fetch-model'); 
// lets tackle cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.get('/', (req, res) => {
    contactModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});
app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute)
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    })
})