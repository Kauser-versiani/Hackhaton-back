const  express = require('express')
const router = express.Router();
const contactForm = require('../controllers/contact-controller')


router.route('/contact').post(contactForm);
// router.route('/register').post(authcontrollers.register);
// router.route('/login').post(authcontrollers.login);

module.exports = router;