// models/ 역할 : 데이터베이스에 접근하여 데이터를 받아오기
const pool = require('../modules/pool');
const crypto = require('../modules/crypto');
const table = 'user';
const user = {
    //              회원가입시 받아올 데이터들
    signup: async (id, name, password, salt, email) => {
        // 데이터베이스에 데이터 넣기
        const questions = `?, ?, ?, ?, ?`;
        const fields = 'id, name, password, salt, email';
        var hashed = await crypto.encryptWithSalt(password, salt);
        const values = [id, name, hashed, salt, email];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        // 회원가입 에러처리
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },
    //            로그인시 받아올 데이터들
    signin: async (id, password) => {
        // 데이터베이스에서 해당 아이디 정보 받아오기
        const query = `SELECT * FROM ${table} WHERE id = "${id}"`;
        // 에러처리
        try {
            const result = await pool.queryParam(query);
            // 받아온 데이터를 해당 아이디의 솔트값으로 복호화
            var hashed = await crypto.encryptWithSalt(password, result[0].salt);
            // 비교 후 리턴
            return (result[0].password === hashed) ? true : false;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signin ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signin ERROR : ', err);
            throw err;
        }
    },
    // 데이터베이스에 id의 값을 가진 사용자 있는지
    checkUser: async (id) => {
        const query = `SELECT * FROM ${table} WHERE id = "${id}"`;
        try {
            const result = await pool.queryParam(query);
            return (result.length === 0) ? true : false;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },
    getUserById: async (id) => {
        const query = `SELECT * FROM ${table} WHERE id = "${id}"`;
        try {
            return await pool.queryParamArr(query, [id]);
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    }
}

module.exports = user;