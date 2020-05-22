// models/ 역할 : 데이터베이스에 접근하여 데이터를 받아오기
const pool = require('../modules/pool');
const table = 'post';

const post = {
    // 모든 게시글 조회
    searchAllPosts: async () => {
        const query = 'SELECT * FROM ${table}';
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('searchAllPosts ERROR : ', err);
            throw err;
        }
    },
    // 게시글 고유 id값을 조회
    searchPostById: async (id) => {
        const query = `SELECT * FROM ${table} WHERE id = "${id}"`;
        try {
            const result = await pool.queryParam(query);
            return (result.length === 0) ? result[0] : false;
        } catch (err) {
            console.log('searchPostById ERROR : ', err);
            throw err;
        }
    },
    // 게시글 생성 | articleIdx | author | title | contents | likes |
    createPost: async (author, title, content) => {
        const questions = `?, ?, ?, ?, ?`;
        const fields = 'author, title, content';
        const values = [author, title, content];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        try {
            const result = await pool.queryParamArr(query, values);
            return result;
        } catch (err) {
            console.log('createPost ERROR : ', err);
            throw err;
        }
    },
    // 게시글 고유 id값을 가진 게시글을 수정
    updatePost: async (id) => {
        const fields = 'author, title, content';
        const values = [author, title, content];
        const query = `UPDATE ${table} SET ${fields} WHERE postId = ${id}`;
        try {
            const result = await pool.queryParamArr(query, values);
            return result;
        } catch (err) {
            console.log('updatePost ERROR : ', err);
            throw err;
        }
    },
    // 게시글 고유 id값을 가진 게시글을 삭제
    deletePost: async (id) => {
        const query = `DELETE FROM ${table} WHERE postId = ${id}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('deletePost ERROR : ', err);
            throw err;
        }
    },
}
module.exports = post;