const router = require('express').Router();
const pool = require('../database/db');

//Get all data
router.get('/',  async (req, res) => {
    try{
        const data = await pool.query('SELECT * FROM contacts')
        res.json({
            data : {
                messages: data.rows,
            }
        })
    } catch(error ) {
        console.error(error)

    }
});
//Get individual data
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const data = await pool.query("SELECT * FROM contacts WHERE id = $1", [id]);
        res.json(
            {
                data : {
                    message: data.rows[0],
                }
            })
    } catch(err){
        console.error(err)
    }
});

//Delete Data
router.delete('/:id', async(req, res) => {
    try {
        const data = await pool.query("DELETE FROM contacts WHERE id = $1", [req.params.id]);
        res.json({
            data : {
                message: data.rows[0],
            }
        })
    }catch(err){
        console.error(err)
    }
});

module.exports = router;