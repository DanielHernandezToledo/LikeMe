const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'pgadmin',
  port: 5432,
  database: 'likeme',
  allowExitOnIdle: true
})

const mostrarPosts = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows;
}


const crearPost = async (titulo, url, descripcion) => {
  const result = await pool.query('INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (Default, $1, $2, $3, $4)', [titulo, url, descripcion, 0]);
  return result;
}

module.exports = {
  mostrarPosts,
  crearPost
}