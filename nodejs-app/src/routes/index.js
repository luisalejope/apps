const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.send('<h1>Aplicación de NodeJs mas chingona del mundo</h1>'));

module.exports = router;