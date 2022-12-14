const express = require('express');
const app = express();
const routes = require('./routes');
const session = require('express-session');

const HALF_DAY = 1000 * 60 * 60 * 12;

// ovdje smo postavili defaultne vrijednosti sesije
const {
    PORT = 3000,
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'fullapp',
    SESS_LIFETIME = HALF_DAY
} = process.env;

// OVO JE FALSE, JER JE NODE_ENV u development modu
const IN_PROD = NODE_ENV == 'production'

// sa ovom linijom koda omogucili smo da mozemo da citamo
// iz samog body-a to sto nam stigne iz neke forme
app.use(express.urlencoded({ extended: false }))
// medjutim mozda cemo nekad slati nesto preko ajaxa
// zato smo dodali ovu liniju koda ispod
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// podesavanja sesije za nasu aplikaciju
// ova sesija nam omogucava da na samom request objectu
// imamo novi object koji se zove session gdje mozemo
// da dodamo nesto i to je vidljivo unutar cijele nase aplikacije
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}))

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3000, () => {
    console.log('Listening to port 3000');
})