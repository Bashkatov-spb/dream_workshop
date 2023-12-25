const router = require('express').Router();

const authApirouter = require('./api/auth.routes');

router.use('/api/auth', authApirouter);

module.exports = router;
