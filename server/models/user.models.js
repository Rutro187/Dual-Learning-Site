
const pool = require("../config/connections");
const bcrypt = require('bcrypt');

function createUser(req, res){
    pool.query("SELECT email FROM users WHERE email = $1", 
    [req.body.email], (err, queryReturn)=>{
        console.log(queryReturn.rows[0]);
        if(queryReturn.rows[0]){
            return res.send({error: "EMAIL ALREADY EXISTS"})
        }
        let password = req.body.password;
        let passwordSend = bcrypt.hashSync(password, 5);
        let email = req.body.email;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let isAdmin = false;
        pool.query('INSERT INTO users (email, password, "firstName", "lastName", "isAdmin") VALUES($1,$2, $3, $4, $5)', [email, passwordSend, firstName, lastName, isAdmin], (err, result)=>{
            if(!err){
                return res.send({email: req.body.email});
            }
            res.status(500).send({error: "SOMETHING BROKE"})
        })
    })    
}
function login(req, res){
    pool.query('SELECT * FROM users WHERE email = $1', [req.body.email], (err, result) =>{ 
        if(result){
            console.log(result.rows[0].password);
            if(bcrypt.compareSync(req.body.password, result.rows[0].password)){
                userInfo = {isAdmin: result.rows[0].isAdmin, id: result.rows[0].id}
                return res.status(201).send(userInfo);
            } else {
                return res.send({error: "Invalid Username or Password"});
            }
        } else {
            res.send({error: "Invalid Username or Password"})
        }
    })
}

function deleteUser(req, res){
    pool.query("DELETE FROM users WHERE email = $1",
    [req.body.email], (err, queryResult)=>{
        if(queryResult){
            return res.send("Account deleted.")
        } else {
            res.status(500).send("OOPS! SOMETHING WENT WRONG")
        }
    })
}


module.exports.deleteUser = deleteUser;
module.exports.login = login;
module.exports.createUser = createUser;

// async function createUser(req, res) {
//     try {
//         User.findOne({ email: req.body.email }, function (err, userExists) {
//             if (userExists) {
//                 return res.send({ ERROR: 'ACCOUNT ALREADY EXISTS' })
//             } else {
//                 let password = bcrypt.hashSync(req.body.password, 5);
//                 const userPost = new User({
//                     email: req.body.email,
//                     username: req.body.username,
//                     password: password,
//                     admin: req.body.isAdmin
//                 })
//                 var userPostRes = await userPost.save();
//                 console.log(userPostRes);
//                 return res.status(201).send('User created')
//             }
//         })
//     } catch (err) {
//         console.log("Error:" + ' ' + err);
//     }
// }
// async function login(req, res) {
//     try {
//         await User.findOne({ email: req.body.email }, 'password', function (err, userPass) {
//             if (bcrypt.compareSync(req.body.password, userPass)) {
//                 await User.findOne({ email: req.body.email }, function (err, user) {
//                     if (err) {
//                         console.log('Error:' + ' ' + err);
//                     } else {
//                         res.status(201).send(user)
//                     }
//                 })
//             } else if (err) {
//                 console.log('Error:' + ' ' + err);
//             }
//         })
//     } catch (err) {
//         console.log('Error:' + ' ' + err);
//     }
// }

// function deleteUser(req, res) {
//     User.deleteOne({ email: req.body.email }, function (err) {
//         if (err) {
//             return console.log('Error:' = ' ' + err)
//         } else {
//             res.status(201).send('User Deleted')
//         }
//     })
// }

