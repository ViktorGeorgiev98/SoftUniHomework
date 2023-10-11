const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const handlebars = require('express-handlebars');
const bcrypt = require('bcrypt');
const SECRET = "54225424532544253542dsadffsdfdsfds";
const PORT = "5050";
const cookieParse = require('cookie-parser');
const path = require('path');
const { promisify } = require('util');
const jwt = {
    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify)
}
const users = [{
    _id: "ef8ds7gsfg97sfdg7ds9f7gdf9gsfd7",
    username: 'koceto',
    password: '$2b$10$54hKUTquaK371fwUq.dY7uQhYpdEpnyy.evapZIPk4zzA6p6quDXu'
}];

const app = express();
app.use(cookieParse());
// app.use(auth);
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended : false }));

app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');



app.get('/', async (req, res, next) => {
    res.status(200);
    const token = req.cookies["auth"];
    if (token) {
        console.log('we have token')
        try {
            const decodedToken = await jwt.verify(token, SECRET)
            console.log('we have token')
            // req.user = decodedToken;
            // req.locals.user = decodedToken;
            // req.locals.isAuthenticated = true;
            res.send(`<main>
            <div>
                <h1>This is training for session and authentication</h1>
            </div>
        </main>`);
        } catch(e) {
            console.log(e.message);
            res.clearCookie("auth");
            res.redirect('/login');
        }
    } else {
        res.send(`<main>
        <div>
            <h1>You have no authentication</h1>
        </div>
    </main>`);
        next();
    }
    // if (req.locals.isAuthenticated) {
    //     res.send(`<main>
    //     <div>
    //         <h1>This is training for session and authentication</h1>
    //     </div>
    // </main>`);
    // } else {
    //     res.send(`<main>
    //     <div>
    //         <h1>You have no authentication</h1>
    //     </div>
    // </main>`);
    // }
   
})

app.get('/login', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Login Form</title>
    </head>
    <body>
        <h2>Login</h2>
        <form action="/login" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Login">
        </form>
    </body>
    </html>
    `);
})

app.get('/register', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Login Form</title>
    </head>
    <body>
        <h2>Register</h2>
        <form action="/register" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <label for="repeatPassword">Repeat password:</label>
            <input type="password" id="re-password" name="repeatPassword" required><br><br>
            <input type="submit" value="Register">
        </form>
    </body>
    </html>
    `)
})

app.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    try {
        if (!username || !password || !repeatPassword || password !== repeatPassword) {
            throw new Error("All fields are required and password must be the same as repeat password");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username: username,
            password: hashedPassword,
        }
        users.push(newUser);
        console.log(newUser)
        res.redirect('/login');
    } catch(e) {
        console.log(e.message);
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        if(!username || !password) {
            throw new Error("All fields are mandatory!");
        }

        const user = users.find((user) => user.username === username);
        if (!user) {
            throw new Error ("No such user")
        }

        const passIsValid = await bcrypt.compare(password, user.password);
        if (!passIsValid) {
            throw new Error("Password is not valid");
        }
        const payload = {
            _id: user._id,
            username: user.username
        };

        const token = await jwt.sign(payload, SECRET, {expiresIn: "3d"});
        res.cookie("auth", token, {httpOnly: true});
        res.redirect('/');
    } catch(e) {
        console.log(e.message);
    }
})

app.get('/logout', (req, res) => {
    res.clearCookie("auth");
    res.redirect('/');
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));


// async function auth(req, res, next) {
//     const token = req.cookies["auth"];
//     if (token) {
//         console.log('we have token')
//         try {
//             const decodedToken = await jwt.verify(token, SECRET)
//             console.log('verified token')
//             req.user = decodedToken;
//             req.locals.user = decodedToken;
//             req.locals.isAuthenticated = true;
//             next();
//         } catch(e) {
//             console.log(e.message);
//             res.clearCookie("auth");
//             res.redirect('/login');
//         }
//     } else {
//         next();
//     }
// }

