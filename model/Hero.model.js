const db = require('../db')

exports.getData = (res)=> {
    const sql = "select * from hero"

    db.query(sql, (err, result) => {
        if (err) return console.log(err, 'get data failed')

        const datas = {
            title: "LIST HERO",
            data: JSON.parse(JSON.stringify(result))
        }
        res.render('index', {datas})
        res.end()
    })
}

exports.getHeroByID = (req, res) => {
    const {id} = req.params;

    try {
        const sql = `select * from hero where id = '${id}'`
    
        db.query(sql, (err, result) => {
            if (err) return console.log(err, "get data by id failed")
    
            const data = {
                title: "DATA HERO BY ID",
                data: JSON.parse(JSON.stringify(result))
            }
            res.render('heroDetail', {data})
            res.end()
        })
    } catch (error) {
        res.send(error)
    }
}

exports.updateHeroByID = (req, res) => {
    const {id} = req.params
    const {name, role} = req.body

    const sql = `update hero set name = '${name}', role = '${role}' where id = '${id}'`

    db.query(sql, (err, result) => {
        if (err) return console.log(err, "update data by id failed")

        console.log(result)
        res.redirect('/index')
        res.end()
    })

}

