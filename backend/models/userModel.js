const db = require('../config/db');

const User = {
    create: async (username, password, fullname)=>{
        const query = 'insert into users(username, password, fullname) values ($1,$2,$3)';
        const res = db.query(query, [username, password, fullname]);
        return res;
    }
}

export default User;