const postgre = require('../database')
const bookController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from market")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    create: async (req, res) => {
        try {
            const { sellerName, contactName, contactEmail, vatNumber, managerChanel } = req.body;
    
            const sql = 'INSERT INTO market(sellerName, contactName, contactEmail, vatNumber, managerChanel) VALUES($1, $2, $3, $4, $5) RETURNING *';
    
            const { rows } = await postgre.query(sql, [sellerName, contactName, contactEmail, vatNumber, managerChanel]);
    
            res.json({ msg: "OK", data: rows[0] });
    
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
}    

module.exports = bookController