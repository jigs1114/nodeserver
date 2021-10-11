const express = require('express')
const router = express.Router()


const routertest = require('../controllers/test')

router.get('/usersall', routertest.usersAll)
router.post('/userscreate', routertest.usersCreate)
router.post('/usersupdate', routertest.usersUpdate)
router.put('/usersdelete', routertest.usersDelete)
module.exports = router