const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users']);

const saveControler = (req, res) => {
    // preuzeti podatke
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let password = req.body.password;
    let role = req.body.role;

    // po izvrsenju 
    db.users.insert(
        {
            firstname: firstName,
            lastName: lastName,
            password: password,
            role: role
        },
        (err, docs) => {
            if (err) {
                // display error page
            } else {
                res.redirect('/admin');
                // docs predstavlja u cijelini unos
                // console.log(docs);
            }

            // ovo se ispisuje unutar terminala jer je NodeJS backend
            // console.log(firstName, lastName, password, role);
        }
    );
};

module.exports = saveControler;