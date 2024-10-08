const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
const validateContact = require('../middleware/validate');

router.get('/', usersController.getAll); 

router.get('/:id',usersController.getSingle);

router.post('/', validateContact.saveContact, usersController.createUser);

router.put('/:id', validateContact.saveContact, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;