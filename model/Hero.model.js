const db = require('../db')

exports.getData = (res) => {
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
 
}

exports.updateHeroByID = (req, res) => {
    const {id, name, role} = req.body

    const sql = `update hero set name = ?, role = ? where id = ?`

    db.query(sql, [name, role, id], (err, result) => {
        if (err) {
            console.log(err, "update data by id failed")
            return res.status(500).send(" kesalahan saat memperbarui data")
        }
        res.redirect('/user')
        res.end()
    })
}

exports.addHero = (req, res) => {
     const {name, role} = req.body
     const sql = `insert into hero (name, role) values ('${name}', '${role}')`

     db.query(sql, (err, result) => {
        if (err) return console.log('gagal menambah data')
        
        res.redirect('/user')
        res.end()
     })
}

exports.deleteHero = (req, res) => {
    const {id} = req.body
    // console.log(id)
    // res.send(id)

    const sql = `delete from hero where id='${id}'`
    db.query(sql, (err, result) => {
        if (err) return console.log(err, "Tidak dapat menghapus data")
        // console.log(result)
        res.redirect('/user')
        // res.end()
    })
}

