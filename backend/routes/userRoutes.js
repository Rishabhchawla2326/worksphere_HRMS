const express = require('express');
const router = express.Router();
const { createAdmin, } = require("../controllers/userController");
router.post('/create-admin', createAdmin);
module.exports = router;
