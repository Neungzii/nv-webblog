const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
    /* RESFul Api for user management */
    
    //authen
    app.post('/login', UserAuthenController.login)

    // Create user
    app.post('/user' , UserController.create)

    // Edit user , suspend , active
    app.put('/user/:userId' , UserController.put)
    
    // Delete user
    app.delete('/user/:userId' , UserController.remove)

    // Get usre by id
    app.get('/user/:userId' , UserController.show)

    // Get all user
    app.get('/users' , UserController.index)

}