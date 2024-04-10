const db = require('../db')

exports.getData = (res)=> {
    const sql = "select * from hero"

    db.query(sql, (err, result) => {
        if (err) return console.log(err, 'get data failed')

        const datas = {
            title: "DATA HERO BY ID",
            data: JSON.parse(JSON.stringify(result))
        }
        res.render('index', {datas})
        res.end()
    })
}

exports.getHeroByID = (req, res) => {
    const {id} = req.params;
    const sql = `select * from hero where id = '${id}'`

    db.query(sql, (err, result) => {
        if (err) return console.log(err, "get data by id failed")

        const data = JSON.parse(JSON.stringify(result))
        // res.render('index', {data})
        // res.end()
        console.log(data)
    })
}

