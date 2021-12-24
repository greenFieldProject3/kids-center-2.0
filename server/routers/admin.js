const router = require("express").Router();
const AdminController = require("../controllers/admin");

// auth login
router.post("/signin", AdminController.signin);

// signin / registration
router.post("/signup", AdminController.signup);

// signin / registration
router.post("/contact", AdminController.contact);


module.exports = router;
