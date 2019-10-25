
const bcrypt = require('bcryptjs')
module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        let foundUser = await db.check_username([username])
        if(!foundUser){
            res.status(401).send('Username already exists');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        // console.log(username, hash)
        
        let newUser = await db.register([username, hash]); console.log(newUser)
        res.status(200).send('Registered');  
    }, 
    login: async(req, res) => {
        const {username, password} = req.body;
        console.log(username)
        const db = req.app.get('db')
        let foundUser = await db.check_username([username]);
         console.log(foundUser)
        foundUser = foundUser[0];
        console.log(foundUser)
        if(!foundUser){
            res.status(401).send('Username does not exist')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if(authenticated){
            delete foundUser.password;
            res.status(200).send('Logged in')
        }
    },
    
}

















// const bcrypt = require('bcryptjs');

// module.exports = {

//     register: async(req, res) => {
//         const {username, password} = req.body;
//         const db = req.app.get('db');
//         let foundUser = await db.check_username(username);
//         foundUser = foundUser[0]
//         if(foundUser){
//             res.status(409).send('Username Already Exists');
//         }
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(password, salt);
//         let newUser = await db.register({username, password: hash});
//         newUser = newUser[0]
//         res.status(200).send(req.session.user)
//     },

//     login: async(req, res) => {
//         const {username, password} = req.body;
//         const db = req.app.get('db');

//         let foundUser = await db.check_username(username);
//         foundUser = foundUser[0]

//         if(!foundUser) {
//             res.status(401).send('Username does not exist')
//         }
//         const authenticated = bcrypt.compareSync(password, foundUser.password)

//         if(authenticated) {
//             delete foundUser.user.password;
//             req.session.user = foundUser;
//             res.status(200).send(req.session.user);

//         } else {
//             res.status(401).send('Incorrect Password')
//         }
        
//     }
// }

