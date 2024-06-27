const express = require('express')
const userController = require("../controllers/userController")

const {getAllUser, createNewUser , getUser,updateUser,deleteUser} = userController

//User Route Handlers, Controllers



const router = express.Router()

router.route('/').get(getAllUser).post(createNewUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router