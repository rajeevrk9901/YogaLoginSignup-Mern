import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/yogaWebsiteDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connected to DB');
});


// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mnum: String,
    age: Number,
    password: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

// User Model
const User = mongoose.model('User', userSchema);




// Routes
app.post('/login', (req, res) => {
    // res.send('Login');
    const { email, password } = req.body;
    User.findOne({ email, password }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: 'User Logged In', user: user });
            } else {
                res.send({ message: 'Invalid Password' });
            }

        } else {
            res.send({ message: 'User Not Registered' });
        }

    });
});

app.post('/register', (req, res) => {
    // res.send('Register');
    // console.log(req.body);
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (user) {
                res.send({ message: 'User already exists' });
            } else {

                const { name, email, mnum, age, password } = req.body;
                const user = new User({ name, email, mnum, age, password });
                user.save((err) => { (err) ? res.send(err) : res.send({ message: 'User Registeration Succesfully , Please Login Now', }) });
            }
        }
    });
});


app.get('/', (req, res) => { res.send('Hello World!') });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


