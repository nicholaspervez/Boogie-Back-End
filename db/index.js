import pkg from 'pg'; 

const { Pool } = pkg;
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


export default function query(text, params) {
  return pool.query(text, params);
}