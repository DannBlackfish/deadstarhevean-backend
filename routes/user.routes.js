// RUTAS PARA CREAR USUARIOS
const express   = require('express')
const router    = express.Router()

const {check}   = require('express-validator')

const {
    getProfile, editProfile, deleteProfile
   } = require('../controllers/userController')

const userController = require('../controllers/userController')

// CREATE A USER
// api/users
router.post('/', 
    [
        check("name", "The name is required").not().isEmpty(),
        check("email", "Add a valid email").isEmail(),
        check("password", "The password must be a minimum of 6 characters").isLength({min: 6})
    ], 
    userController.createUser
)

router.get("/", (req, res) => {
    res.json({
        message: "new user"
    })
})

router.get('/profile', getProfile)

router.patch('/profile/edit', editProfile)

router.delete('/profile/delete', deleteProfile)

module.exports = router