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
    create: async(req, res) => {
        try {
            const { name, price } = req.body

            const sql = 'INSERT INTO market(name, price) VALUES($1, $2) RETURNING *'

            const { rows } = await postgre.query(sql, [name, price])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
}

module.exports = bookController