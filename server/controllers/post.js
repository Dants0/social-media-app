import {db} from '../connection.js'

export const getPosts = (req, res) => {
    const q = `SELECT p.*, u.id AS userId, u.name, u.profilePic FROM social.post AS p JOIN social.users AS u ON (u.id = p.userId)`

    db.query(q, (err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    })
}