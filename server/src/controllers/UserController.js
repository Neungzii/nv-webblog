module.exports = {
    //Get all user
    index (req , res){
        res.send('เรียกดูข้อมูลผู้ใช้งานทั้งหมด')
    },

    //Create user
    create (req , res){
        res.send('ทำการวสรางผู้ใช้งาน:' + JSON.stringify(req,body))
    },

    //edit user
    put (req , res){
        res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },

    //Delete user
    remove (req , res){
        res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },

    //Get user by id
    show (req , res){
        res.send('ดูข้อมูลผู้ช้งาน: ' + req.params.userId)
    }

}