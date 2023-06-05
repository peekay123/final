const router = require('express').Router();
const pool = require('../database/db');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async(req, res) => {
    try{

        // res.json(req.user);
        const user = await pool.query('SELECT * FROM admin WHERE user_id = $1', [req.user]);

        res.json(user.rows[0])

    }catch(error){
        console.error(error.message);
        res.status(500).json("Server Error")
    }
})

module.exports = router;